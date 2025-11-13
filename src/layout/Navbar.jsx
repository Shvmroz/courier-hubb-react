import React from "react";
import { useApp } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { Menu, Bell, Sun, Moon, User, LogOut, Lock, Search } from "lucide-react";

const Navbar = ({ onMenuClick }) => {
  const { user, logout, currentPage } = useApp();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);

  const handleLogoutClick = async () => {
    setShowUserMenu(false);
    await logout();
    navigate('/login');
  };


  const handleNavigation = (path) => {
    setShowUserMenu(false);
    navigate(path);
  };

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
  {/* Left Section */}
  <div className="flex items-center space-x-4">
    <button
      onClick={onMenuClick}
      className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <Menu className="w-5 h-5 text-gray-600" />
    </button>

    {/* Page Title */}
    <div className="hidden lg:block">
      <h1 className="text-xl font-semibold text-gray-900 font-manrope">
        {currentPage}
      </h1>
    </div>
  </div>



  {/* Right Section */}
  <div className="flex items-center space-x-4">
    {/* Notifications */}
    <div className="relative">
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Bell className="w-5 h-5 text-gray-600" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] flex items-center justify-center font-bold min-w-[18px] h-[18px] rounded-full px-1 leading-none">
          3
        </span>
      </button>
    </div>

    {/* User Menu */}
    <div className="relative">
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full p-[2px] flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="text-gray-400" />
            )}
          </div>
        </div>

        <div className="hidden md:block text-left">
          <div className="text-sm font-medium text-gray-900 font-manrope">
            {user?.name}
          </div>
          <div className="text-xs text-gray-500 font-manrope">
            {user?.email}
          </div>
        </div>
      </button>

      {showUserMenu && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowUserMenu(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <button
              onClick={() => handleNavigation("/profile")}
              className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-manrope"
            >
              <User className="w-4 h-4" />
              <span>Profile Settings</span>
            </button>
            <button
              onClick={() => handleNavigation("/change-password")}
              className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-manrope"
            >
              <Lock className="w-4 h-4" />
              <span>Change Password</span>
            </button>
            <div className="border-t border-gray-200 my-2"></div>
            <button
              onClick={handleLogoutClick}
              className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 font-manrope"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </>
      )}
    </div>
  </div>
</div>

  );
};

export default Navbar;