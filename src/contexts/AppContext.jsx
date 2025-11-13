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

  useEffect(() => {
    // Check if user is logged in (simulate checking localStorage/sessionStorage)
    const savedUser = localStorage.getItem('courierhubb_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (emailOrUserData, password) => {
    // Handle both login scenarios: email/password and direct user data
    if (typeof emailOrUserData === 'object') {
      // Direct user data (from signup)
      const userData = emailOrUserData;
      setUser(userData);
      localStorage.setItem('courierhubb_user', JSON.stringify(userData));
      return { success: true };
    } else {
      // Email/password login
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
        return { success: true };
      }
      return { success: false, error: 'Invalid credentials' };
    }
  };

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
    setCurrentPage
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};