import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import CompaniesPage from "../pages/CompaniesPage";
import OrganizationsPage from "../pages/OrganizationsPage";
import EventsPage from "../pages/EventsPage";
import EmailTemplatesPage from "../pages/EmailTemplatesPage";
import PaymentPlansPage from "../pages/PaymentPlansPage";
import TeamPage from "../pages/TeamPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import ConfigurationPage from "../pages/ConfigurationPage";
import EmailConfigurationPage from "../pages/EmailConfigurationPage";
import StripeConfigurationPage from "../pages/StripeConfigurationPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/organizations" element={<OrganizationsPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/email-templates" element={<EmailTemplatesPage />} />
      <Route path="/payment-plans" element={<PaymentPlansPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/configuration" element={<ConfigurationPage />} />
      <Route path="/configuration/email" element={<EmailConfigurationPage />} />
      <Route path="/configuration/stripe" element={<StripeConfigurationPage />} />

      {/* Redirect root → dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Catch-all route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
