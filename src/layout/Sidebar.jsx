import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { usePageContext } from "../contexts/PageContext";
import { Home, Plus, Briefcase, MessageSquare } from "lucide-react";

// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const menuItems = [
  {
    text: "Home",
    icon: Home,
    path: "/home",
    color: "text-gray-800",
    bgColor: "bg-white",
  },
  {
    text: "Post a Job",
    icon: Plus,
    path: "/post-job",
    color: "text-gray-800",
    bgColor: "bg-white",
  },
  {
    text: "My Jobs",
    icon: Briefcase,
    path: "/jobs",
    color: "text-gray-800",
    bgColor: "bg-white",
  },
  {
    text: "Messages",
    icon: MessageSquare,
    path: "/messages",
    color: "text-gray-800",
    bgColor: "bg-white",
  },
];

const Sidebar = ({
  open,
  onClose,
  variant = "temporary",
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { setCurrentPage } = usePageContext();

  const handleNavClick = (pageName) => {
    setCurrentPage(pageName);
    if (variant === "temporary") {
      onClose();
    }
  };

  const sidebarContent = (
    <div className="h-full flex flex-col bg-yellow-400 shadow-xl">
      {/* Header */}
      <Link to="/home">
        <div className="cursor-pointer h-20 px-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
            <span className="text-2xl">🚚</span>
          </div>
          <div className="mt-1">
            <h1 className="text-2xl font-extrabold leading-none text-black">
              CourierHubb.
            </h1>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex-1 py-4 px-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.text}
              to={item.path}
              onClick={() => handleNavClick(item.text)}
              className={cn(
                "flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-black text-yellow-400 shadow-sm"
                  : "hover:bg-yellow-500 text-black hover:text-black"
              )}
            >
              <div
                className={`p-1 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "bg-transparent"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-black'}`} />
              </div>
              <span
                className={`text-sm font-medium ${
                  isActive ? "font-semibold" : "font-medium"
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
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-80 z-50 lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        {sidebarContent}
      </div>
    </>
  );
};

export default Sidebar;