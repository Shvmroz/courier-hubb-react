import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
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
    <div className="min-h-screen flex   bg-gray-100">
      {/* Left side - Logo */}
      <div className="hidden lg:flex w-1/2 bg-white p-8 items-center justify-center">
        <div className="w-full h-full bg-primary rounded-3xl flex items-center justify-center">
          <img
            src="/login_logo.jpg"
            alt="CourierHubb Logo"
            className="max-w-sm max-h-full object-contain"
          />
        </div>
      </div>

      {/* Right side - Forgot Password form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-[90%]">
          <div className="p-4 w-full flex flex-col space-y-3">
            <h1 className="text-3xl font-bold text-text  ">
              Forgot Password
            </h1>

            <p className="text-gray-600 font-semibold text-sm">
            Forgot your password? No worries! Enter your email <br/> below to receive a reset link.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Samu@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                className="h-12"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                size="large"
                className="h-12"
              >
                {loading ? "Sending..." : "Send Password Reset Link"}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600  ">
              Remember your password?{" "}
              <button
                onClick={handleBackToLogin}
                className="text-text font-medium hover:text-gray-800 no-underline   bg-transparent border-none cursor-pointer"
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
        size="sm"
        hideFooter={true}
      >
        <div className="text-center py-4">
          <div className="flex items-center justify-center mb-2 w-[120px] h-[120px] mx-auto">
            <img
              src="/mail_sent.svg"
              alt="CourierHubb Logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <h3 className="text-lg font-[800] mb-2  ">
            Check Your Email
          </h3>
          <p className="text-gray-600 mb-6   text-sm">
            Password reset link has been sent on your email address.
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