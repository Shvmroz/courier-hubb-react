import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";
import ForgotPasswordPage from "../auth/forgot-password/forgot-password";
import HomePage from "../pages/home/home";
import PostJobPage from "../pages/post-job/post-job";
import JobsPage from "../pages/jobs/jobs";
import MessagesPage from "../pages/messages/messages";
import ProfilePage from "../pages/profile/profile";
import ChangePasswordPage from "../pages/profile/change-password";
import NotFoundPage from "../pages/not-found/not-found";
import MainLayout from "../layout/MainLayout";

const AppRoutes = ({ user }) => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/home" replace />} />
      <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/home" replace />} />
      <Route path="/forgot-password" element={!user ? <ForgotPasswordPage /> : <Navigate to="/home" replace />} />

      {/* Protected Routes */}
      <Route path="/home" element={user ? <MainLayout><HomePage /></MainLayout> : <Navigate to="/login" replace />} />
      <Route path="/post-job" element={user ? <MainLayout><PostJobPage /></MainLayout> : <Navigate to="/login" replace />} />
      <Route path="/jobs" element={user ? <MainLayout><JobsPage /></MainLayout> : <Navigate to="/login" replace />} />
      <Route path="/messages" element={user ? <MainLayout><MessagesPage /></MainLayout> : <Navigate to="/login" replace />} />
      <Route path="/profile" element={user ? <MainLayout><ProfilePage /></MainLayout> : <Navigate to="/login" replace />} />
      <Route path="/change-password" element={user ? <MainLayout><ChangePasswordPage /></MainLayout> : <Navigate to="/login" replace />} />

      {/* Root redirect */}
      <Route path="/" element={user ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
