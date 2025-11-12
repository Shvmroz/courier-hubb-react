import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import PostJobPage from "../pages/PostJobPage";
import Jobs from "../pages/Jobs";
import Messages from "../pages/Messages";
import ProfilePage from "../pages/ProfilePage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Protected Routes */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/post-job" element={<PostJobPage />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />

      {/* Redirect root → home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Catch-all route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;