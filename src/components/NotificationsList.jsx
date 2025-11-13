import React from "react";
import { Icon } from "@iconify/react";
import { useApp } from "../contexts/AppContext";

const getNotificationIcon = (type) => {
  switch (type) {
    case "pickup":
      return <Icon icon="mdi:truck-delivery-outline" className="w-5 h-5 text-gray-900" />;
    case "delivery":
      return <Icon icon="mdi:package-variant-closed" className="w-5 h-5 text-gray-900" />;
    case "delay":
      return <Icon icon="mdi:clock-alert" className="w-5 h-5 text-gray-900" />;
    case "payment":
      return <Icon icon="mdi:currency-usd" className="w-5 h-5 text-gray-900" />;
    case "system":
      return <Icon icon="mdi:server" className="w-5 h-5 text-gray-900" />;
    case "success":
      return <Icon icon="mdi:check-circle-outline" className="w-5 h-5 text-gray-900" />;
    case "info":
    default:
      return <Icon icon="mdi:information-outline" className="w-5 h-5 text-gray-900" />;
  }
};

export const getTimeAgo = (date) => {
  const now = new Date();
  const seconds = Math.floor((now - new Date(date)) / 1000);

  if (seconds < 60) return "just now";
  else if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  else if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
  else if (seconds < 604800) return `${Math.floor(seconds / 86400)} day ago`;
  else return new Date(date).toLocaleDateString();
};

export const NotificationsList = ({ onClose }) => {
  const {
    notifications,
    unreadNotificationsCount,
    markNotificationAsRead,
    markAllNotificationsAsRead,
  } = useApp();

  return (
    <div className="w-96 bg-white rounded-3xl shadow-2xl border border-gray-200 min-h-[50vh] max-h-[85vh] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900 leading-5">
            Notifications
          </h3>
          <span className="text-gray-500 text-xs mt-1">
            You have {unreadNotificationsCount} unread notifications
          </span>
        </div>
        <div>
          {unreadNotificationsCount > 0 && (
            <span
              onClick={() => {
                markAllNotificationsAsRead();
                if (onClose) onClose();
              }}
              className="text-xs text-gray-600 hover:text-gray-800 font-medium cursor-pointer"
            >
              Mark all read
            </span>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {notifications.length === 0 ? (
          <div className="p-8 text-center">
            <Icon
              icon="mdi:bell-outline"
              className="w-12 h-12 text-gray-300 mx-auto mb-4"
            />
            <p className="text-gray-500">No notifications</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`py-4 ps-4 pe-1 hover:bg-gray-100 transition-colors cursor-pointer ${
                  !notification.read ? "bg-amber-100/50" : ""
                }`}
              >
                <div className="flex items-start space-x-3">
                  {/* Icon */}
                  <div className="p-2 rounded-full bg-primary shadow flex-shrink-0">
                    <div className="w-5 h-5 text-white">
                      {getNotificationIcon(notification.notification_type)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4
                          className={`text-sm font-medium ${
                            !notification.read
                              ? "text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          {notification.title}
                        </h4>
                        <p
                          className={`text-xs mt-1 ${
                            !notification.read
                              ? "text-gray-800"
                              : "text-gray-500"
                          }`}
                        >
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          {getTimeAgo(notification.createdAt)}
                        </p>
                      </div>

                      {/* Read/Unread Status */}
                      <div className="flex items-center space-x-2 ml-2">
                        {!notification.read ? (
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              markNotificationAsRead(notification.id);
                            }}
                            className="p-2 transition-colors cursor-pointer hover:bg-primary-dark rounded-full"
                            title="Mark as read"
                          >
                            <Icon
                              icon="mdi:email-outline"
                              className="w-4 h-4 text-black"
                            />
                          </div>
                        ) : (
                          <div className="p-2 flex items-center justify-center">
                            <Icon
                              icon="mdi:email-open-outline"
                              className="w-4 h-4 text-gray-400"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
