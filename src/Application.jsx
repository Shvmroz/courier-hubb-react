import { AppProvider, useAppContext } from "./contexts/AppContext";
import { CustomSnackbarProvider } from "./components/ui/custom-snackbar";
import AppRoutes from "./routes/Routes";
import MainLayout from "./layout/MainLayout";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "./components/ui/spinner";

const AppInner=() => {
  const { isAuthenticated, loading } = useAppContext();
  const location = useLocation();

  const publicRoutes = ["/login"];
  const isPublicRoute = publicRoutes.includes(location.pathname);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  //  If authenticated and tries to go to /login → redirect
  if (isAuthenticated && location.pathname === "/login") {
    return <Navigate to="/dashboard" replace />;
  }

  //  Public route
  if (isPublicRoute) {
    return <AppRoutes />;
  }

  //  Protected routes (with layout)
  if (isAuthenticated) {
    return (
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    );
  }

  // If not authenticated, redirect to login
  return <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <CustomSnackbarProvider>
      <AppProvider>
        <AppInner />
      </AppProvider>
    </CustomSnackbarProvider>
  );
}
