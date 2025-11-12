import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { PageProvider } from "./contexts/PageContext";
import AppRoutes from "./routes/Routes";
import MainLayout from "./layout/MainLayout";
import { Navigate, useLocation } from "react-router-dom";
import "./index.css";

const AppInner = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  const publicRoutes = ["/login"];
  const publicRoutes = ["/login", "/forgot-password"];
  const isPublicRoute = publicRoutes.includes(location.pathname);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If authenticated and tries to go to /login → redirect
  if (user && (location.pathname === "/login" || location.pathname === "/forgot-password")) {
    return <Navigate to="/home" replace />;
  }

  // Public route
  if (isPublicRoute) {
    return <AppRoutes />;
  }

  // Protected routes (with layout)
  if (user) {
    return (
      <PageProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </PageProvider>
    );
  }

  // If not authenticated, redirect to login
  return <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
