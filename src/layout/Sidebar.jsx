import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { Icon } from "@iconify/react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const menuItems = [
  { text: "Home", icon: "material-symbols:home-rounded", path: "/home" },
  { text: "Post a Job", icon: "ph:plus-fill", path: "/post-job" },
  { text: "My Jobs", icon: "basil:bag-solid", path: "/jobs" },
  { text: "Messages", icon: "ant-design:message-filled", path: "/messages" },
];

const Sidebar = ({ open, onClose, variant = "temporary" }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { setCurrentPage } = useApp();

  const handleNavClick = (pageName) => {
    setCurrentPage(pageName);
    if (variant === "temporary") onClose();
  };

  const sidebarContent = (
    <div className="h-full flex flex-col bg-primary shadow-xl relative">
      {/* Header */}
      <div className="flex items-center justify-between md:justify-center pe-3 relative">
        {/* Logo */}
        <Link to="/home">
          <img
            src="/logo.png"
            alt="Sidebar Logo"
            className="w-full max-w-[180px] md:max-w-[260px]"
          />
        </Link>

        {/* Close button (mobile only) */}
        <button
          onClick={onClose}
          className="md:hidden text-black hover:text-gray-700 transition-colors"
        >
          <Icon icon="mdi:close" className="w-7 h-7" />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 pb-4 pt-1 px-2 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.text}
              to={item.path}
              onClick={() => handleNavClick(item.text)}
              className={cn(
                "flex items-center space-x-3 px-3 rounded-[12px] transition-all duration-200 group",
                "h-[48px]",
                isActive
                  ? "bg-black text-primary"
                  : "text-black hover:bg-black/10"
              )}
            >
              <Icon
                icon={item.icon}
                className={`w-8 h-8 ${
                  isActive ? "text-primary" : "text-black"
                }`}
              />
              <span
                className={`text-md ${
                  isActive ? "font-extrabold" : "font-medium"
                }`}
              >
                {item.text}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );

  if (variant === "permanent") {
    return <div className="w-72 flex-shrink-0">{sidebarContent}</div>;
  }

  return (
    <>
      {/* Mobile Sidebar (Full Screen) */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-full z-50 lg:hidden bg-primary transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </div>
    </>
  );
};

export default Sidebar;
