import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/login/login";
import SignupPage from "../pages/signup/signup";
import SignupPage from "../pages/signup/signup";
import ForgotPasswordPage from "../pages/forgot-password/forgot-password";
import HomePage from "../pages/home/home";
import PostJobPage from "../pages/post-job/post-job";
import JobsPage from "../pages/jobs/jobs";
import MessagesPage from "../pages/messages/messages";
import ProfilePage from "../pages/profile/profile";
import ChangePasswordPage from "../pages/change-password/change-password";
import NotFoundPage from "../pages/not-found/not-found";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Protected Routes */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/post-job" element={<PostJobPage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/messages" element={<MessagesPage />} />
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