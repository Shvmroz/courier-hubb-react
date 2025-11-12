import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "../components/ui/Input";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import { Mail } from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 1500);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex font-manrope bg-gray-100">
      {/* Left side - Logo */}
      <div className="hidden lg:flex w-1/2 bg-primary items-center justify-center p-8">
        <div className="w-full max-w-md">
          <img 
            src="/login_logo.jpg" 
            alt="CourierHubb Logo" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Right side - Forgot Password form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <img 
              src="/login_logo.jpg" 
              alt="CourierHubb Logo" 
              className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="p-4 w-full">
            <h1 className="text-3xl font-bold text-text mb-2 font-manrope">
              Forgot Password
            </h1>
            <p className="text-gray-600 mb-8 font-manrope">
              Forgot your password? No worries! Enter your email to reset it instantly.
            </p>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-6">
                <TextField
                  type="email"
                  placeholder="Samu@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  className="h-12"
                />
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                size="large"
                className="mb-6 h-12"
              >
                {loading ? "Sending..." : "Send Password Reset Link"}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600 font-manrope">
              Remember your password?{" "}
              <button
                onClick={handleBackToLogin}
                className="text-text font-medium hover:text-gray-800 no-underline font-manrope bg-transparent border-none cursor-pointer"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Check Your Email"
        size="sm"
        hideFooter={true}
      >
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-text" />
          </div>
          <h3 className="text-lg font-semibold mb-2 font-manrope">
            Check Your Email
          </h3>
          <p className="text-gray-600 mb-6 font-manrope text-sm">
            Password reset link has been sent on your email address! Password reset link has been sent on your email address!
          </p>
          <Button
            onClick={handleBackToLogin}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            className="h-12"
          >
            Back to Login
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPasswordPage;