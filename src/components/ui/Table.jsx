import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  EllipsisVertical,
  Filter,
} from "lucide-react";
import { createPortal } from "react-dom";
import { searchLocalData } from "../lib/utils";
import Button from "./Button";
import FilterDrawer from "./Filter/FilterDrawer";

const Table = ({ config }) => {
  const {
    data = [],
    table_head = [],
    actions = [],
    loading = false,
    search = { enabled: false, useLocalSearch: true },
    pagination = { enabled: false, pageSize: 10 },
    emptyMessage = "No data available",
    onMenuAction,
    onSearch,
    onFilterApply,
    filterConfig = null,
    actionsPosition = "end",
  } = config;

  const [searchTerm, setSearchTerm] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pagination?.pageSize || 10);

  const filteredData = useMemo(() => {
    if (!search.enabled || !searchTerm.trim()) return data;
    if (!search.useLocalSearch) return data;
    return searchLocalData(data, searchTerm);
  }, [data, searchTerm, search]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const menuRef = useRef(null);
  const buttonRefs = useRef({});
  const searchTimeoutRef = useRef(null);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);

    if (!search.useLocalSearch && onSearch) {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

      searchTimeoutRef.current = setTimeout(async () => {
        setIsSearching(true);
        try {
          await onSearch(value);
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setIsSearching(false);
        }
      }, 300);
    }
  };

  const handleActionClick = (action, item, e) => {
    e.stopPropagation();
    setActiveMenu(null);
    onMenuAction?.(action.type, item);
  };

  const handleMenuToggle = (itemId, e) => {
    e.stopPropagation();
    const button = e.currentTarget;
    buttonRefs.current[itemId] = button;
    const rect = button.getBoundingClientRect();

    const menuWidth = 192;
    const menuHeight = actions.length * 40;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const openLeft = viewportWidth - rect.right < menuWidth;
    const left = openLeft ? rect.left - menuWidth + rect.width : rect.left;

    const openUp =
      viewportHeight - rect.bottom < menuHeight && rect.top > menuHeight;
    const top = openUp ? rect.top - menuHeight - 2 : rect.bottom + 2;

    setMenuPosition({
      top: Math.max(8, Math.min(top, viewportHeight - menuHeight - 8)),
      left: Math.max(8, Math.min(left, viewportWidth - menuWidth - 8)),
    });

    setActiveMenu(activeMenu === itemId ? null : itemId);
  };

  // Close menu on scroll -------------------
  useEffect(() => {
    const handleScroll = () => {
      if (activeMenu) setActiveMenu(null);
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [activeMenu]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // --- Table Skeleton Loader ---
  const renderSkeleton = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-pulse flex space-x-4">
        {/* Circle loader */}
        <div className="rounded-full bg-gray-300 dark:bg-gray-700 h-12 w-12"></div>
        {/* Bars loader */}
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-48"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
        </div>
      </div>
    </div>
  );

  if (loading) return renderSkeleton();

  return (
    <div className="">
      {/* Search Bar */}
      <div className="flex justify-end items-center mb-6 gap-2">
        {search.enabled && (
          <div className="">
            <div className="relative min-w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300" />
              <input
                type="text"
                placeholder={search.placeholder || "Search..."}
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                disabled={isSearching}
                className="w-full h-[36px] pl-9 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:ring-blue-200 disabled:opacity-50"
              />
            </div>
          </div>
        )}

        {filterConfig && (
          <Button onClick={() => setShowFilters(true)} variant="contained">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        )}
      </div>

      {/* =========================== Table =========================== */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700/60">
              <tr>
                {actions.length > 0 && actionsPosition === "start" && (
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                )}

                {table_head.map((col) => (
                  <th
                    key={col.key}
                    className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider min-w-max max-w-[180px] truncate"
                  >
                    {col.title}
                  </th>
                ))}

                {actions.length > 0 && actionsPosition === "end" && (
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                )}
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={table_head.length + (actions.length > 0 ? 1 : 0)}
                    className="text-center py-10 text-gray-500 dark:text-gray-400"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, index) => (
                  <tr
                    key={row.id || index}
                    className="hover:bg-gray-50 dark:hover:bg-blue-800/10 transition"
                  >
                    {actions.length > 0 && actionsPosition === "start" && (
                      <td className="px-6 py-4 text-center min-w-max max-w-[120px]">
                        <button
                          ref={(el) => (buttonRefs.current[row.id] = el)}
                          onClick={(e) => handleMenuToggle(row.id, e)}
                          className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300"
                        >
                          <EllipsisVertical className="h-4 w-4" />
                        </button>
                      </td>
                    )}

                    {table_head.map((col) => (
                      <td
                        key={col.key}
                        className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 min-w-max max-w-[300px] truncate"
                        title={String(row[col.key] ?? "")}
                      >
                        {col.render ? col.render(row, index) : row[col.key]}
                      </td>
                    ))}

                    {actions.length > 0 && actionsPosition === "end" && (
                      <td className="px-6 py-4 text-center min-w-max max-w-[120px]">
                        <button
                          ref={(el) => (buttonRefs.current[row.id] = el)}
                          onClick={(e) => handleMenuToggle(row.id, e)}
                          className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition text-gray-700 dark:text-gray-300"
                        >
                          <EllipsisVertical className="h-4 w-4" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {pagination?.enabled && filteredData.length > 0 && (
          <div className=" bg-gray-50 dark:bg-gray-700/60 px-6 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 dark:border-gray-600 gap-3">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing {(currentPage - 1) * pageSize + 1} to{" "}
              {Math.min(currentPage * pageSize, filteredData.length)} of{" "}
              {filteredData.length} results
            </div>

            <div className="flex items-center gap-4">
              {/* Rows per page selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Rows per page:
                </span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    const newLimit = Number(e.target.value);
                    setPageSize(newLimit);
                    setCurrentPage(1);
                    pagination?.setPageSize?.(newLimit);
                    pagination?.onPageChange?.(1, newLimit);
                  }}
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  {[2, 10, 20, 50, 100].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              {/* ============= Pagination ============= */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (currentPage > 1) {
                      const newPage = currentPage - 1;
                      setCurrentPage(newPage);
                      pagination?.onPageChange?.(newPage, pageSize);
                    }
                  }}
                  disabled={currentPage === 1}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <span className="text-sm text-gray-800 dark:text-gray-200">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => {
                    if (currentPage < totalPages) {
                      const newPage = currentPage + 1;
                      setCurrentPage(newPage);
                      pagination?.onPageChange?.(newPage, pageSize);
                    }
                  }}
                  disabled={currentPage === totalPages}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition text-gray-500 dark:text-gray-300 disabled:opacity-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Portal Menu */}
      {activeMenu &&
        createPortal(
          <div
            ref={menuRef}
            style={{
              position: "fixed",
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              zIndex: 9999,
            }}
            className="w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600"
          >
            {actions.map((action, i) => (
              <button
                key={i}
                onClick={(e) =>
                  handleActionClick(
                    action,
                    data.find((d) => d.id === activeMenu),
                    e
                  )
                }
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600 ${
                  action.variant === "danger"
                    ? "text-red-600 dark:text-red-500"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {action.icon && <span className="shrink-0">{action.icon}</span>}
                {action.title}
              </button>
            ))}
          </div>,
          document.body
        )}

      {/* Filter Drawer */}
      {filterConfig && (
        <FilterDrawer
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
          config={filterConfig}
          onApply={onFilterApply}
        />
      )}
    </div>
  );
};

export default Table;
