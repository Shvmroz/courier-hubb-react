import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider, useApp } from "./contexts/AppContext";
import AppRoutes from "./routes/Routes";
import MainLayout from "./layout/MainLayout";
import { Navigate, useLocation } from "react-router-dom";
import "./index.css";
import FullScreenLoader from "./components/FullScreenLoader";
import { useEffect, useState } from "react";

const AppInner = () => {
  const { user, loading } = useApp();
  const location = useLocation();
  const publicRoutes = ["/login", "/forgot-password", "/signup"];
  const isPublicRoute = publicRoutes.includes(location.pathname);

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (loading) {
      setShowLoader(true);
    } else {
      const timer = setTimeout(() => setShowLoader(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (showLoader) {
    return <FullScreenLoader />;
  }

  if (user && isPublicRoute) {
    return <Navigate to="/home" replace />;
  }

  if (isPublicRoute) {
    return <AppRoutes />;
  }

  

  if (user) {
    return (
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    );
  }

  return <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
