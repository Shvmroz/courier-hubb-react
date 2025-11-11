import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
};

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Home');

  const value = {
    currentPage,
    setCurrentPage
  };

  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
};