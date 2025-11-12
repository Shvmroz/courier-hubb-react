import React from "react";
import { useLocation, Link } from "react-router-dom";
import { usePageContext } from "../contexts/PageContext";
import { Icon } from "@iconify/react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const menuItems = [
  { text: "Home", icon: "material-symbols:home-rounded", path: "/home" },
  { text: "Post a Job", icon: "mdi:plus-circle-outline", path: "/post-job" },
  { text: "My Jobs", icon: "mdi:briefcase-outline", path: "/jobs" },
  { text: "Messages", icon: "mdi:message-text-outline", path: "/messages" },
];

const Sidebar = ({ open, onClose, variant = "temporary" }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { setCurrentPage } = usePageContext();

  const handleNavClick = (pageName) => {
    setCurrentPage(pageName);
    if (variant === "temporary") onClose();
  };

  const sidebarContent = (
    <div className="h-full flex flex-col bg-[#fafe11] shadow-xl relative">
      {/* Header */}
      <Link to="/home">
        <div className="cursor-pointer py-10 px-4 flex items-center">
          <img src="/sidebar_logo.jpg" alt="Logo" className="w-[100%]" />
        </div>
      </Link>

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
                  ? "bg-black text-[#fafe11]"
                  : "text-black hover:bg-black/10"
              )}
            >
              <Icon
                icon={item.icon}
                className={`w-8 h-8 ${
                  isActive ? "text-[#fafe11]" : "text-black"
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
          "fixed inset-y-0 left-0 w-80 z-50 lg:hidden transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </div>
    </>
  );
};

export default Sidebar;
