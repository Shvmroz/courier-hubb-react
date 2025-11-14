import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('Home');
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "Welcome to QuickCourier",
      message: "Your account has been successfully created. Start by scheduling your first delivery!",
      notification_type: "success",
      read: false,
      createdAt: "2025-11-10T08:00:00.000Z",
    },
    {
      id: "2",
      title: "New Delivery Assigned",
      message: 'You have been assigned a new delivery for "Order #1024".',
      notification_type: "delivery",
      read: false,
      createdAt: "2025-11-09T15:30:00.000Z",
    },
    {
      id: "3",
      title: "Payment Received",
      message: "Payment of $45 received for your last delivery.",
      notification_type: "payment",
      read: true,
      createdAt: "2025-11-08T12:15:00.000Z",
    },
    {
      id: "4",
      title: "Delivery Reminder",
      message: "Reminder: Delivery for 'Order #1019' is scheduled tomorrow at 10:00 AM.",
      notification_type: "reminder",
      read: false,
      createdAt: "2025-11-07T09:00:00.000Z",
    },
    {
      id: "5",
      title: "Customer Message",
      message: "John Doe sent you a message regarding 'Order #1021'.",
      notification_type: "message",
      read: false,
      createdAt: "2025-11-06T18:45:00.000Z",
    },
    {
      id: "6",
      title: "System Update",
      message: "QuickCourier app has been updated to version 2.1. Check out new features!",
      notification_type: "system",
      read: true,
      createdAt: "2025-11-04T07:30:00.000Z",
    },
    {
      id: "7",
      title: "Delivery Failed",
      message: "Delivery for 'Order #1007' failed. Please contact the customer or retry.",
      notification_type: "error",
      read: false,
      createdAt: "2025-10-03T21:20:00.000Z",
    },
  ]);
  

  useEffect(() => {
    const savedUser = localStorage.getItem('courierhubb_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (emailOrUserData, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (typeof emailOrUserData === 'object') {
          const userData = emailOrUserData;
          setUser(userData);
          localStorage.setItem('courierhubb_user', JSON.stringify(userData));
          resolve({ success: true });
        } else {
          const email = emailOrUserData;
          if (email && password) {
            const userData = {
              id: '1',
              email,
              name: 'John Doe',
              avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=100&h=100&fit=crop&crop=face'
            };
            setUser(userData);
            localStorage.setItem('courierhubb_user', JSON.stringify(userData));
            resolve({ success: true });
          } else {
            resolve({ success: false, error: 'Invalid credentials' });
          }
        }
      }, 1500); 
    });
  };
  

    // ==========================Notifications===========================

    const markNotificationAsRead = (id) => {
      setNotifications((prev) =>
        prev.map((notification) =>
          notification.id === id ? { ...notification, read: true } : notification
        )
      );
    };
    // =====================================================
  
    const markAllNotificationsAsRead = () => {
      setNotifications((prev) =>
        prev.map((notification) => ({ ...notification, read: true }))
      );
    };
    // =====================================================
  
    const removeNotification = (id) => {
      setNotifications((prev) =>
        prev.filter((notification) => notification.id !== id)
      );
    };
  
    const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

    //=============================================================================//
    //=============================================================================//
  const logout = () => {
    setUser(null);
    localStorage.removeItem('courierhubb_user');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    currentPage,
    setCurrentPage,
    // ----> notifications
    notifications,
    unreadNotificationsCount,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    removeNotification,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};