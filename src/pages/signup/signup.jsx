import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { Input } from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import PinInput from "../../components/ui/PinInput";
import { CheckCircle } from "lucide-react";
import { Icon } from "@iconify/react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [pinCode, setPinCode] = useState("");

  const { login } = useApp();
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the terms and conditions");
      setLoading(false);
      return;
    }

    // Simulate signup API call
    setTimeout(() => {
      setLoading(false);
      setShowVerification(true);
    }, 1500);
  };

  const handlePinComplete = (pin) => {
    setPinCode(pin);
    // Simulate verification
    setTimeout(() => {
      setShowVerification(false);
      setShowSuccess(true);
    }, 1000);
  };

  const handleVerificationSuccess = async () => {
    const userData = {
      id: "1",
      email: formData.email,
      name: formData.fullName,
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=100&h=100&fit=crop&crop=face",
    };

    await login(userData);
    navigate("/home");
  };

  const handleBackToForm = () => {
    setShowVerification(false);
    setPinCode("");
  };

  return (
    <div className="min-h-screen flex">
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

      {/* Right side - Sign up form or PIN verification */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-[90%]">
          <div className="p-4 w-full">
            {!showVerification ? (
              <>
                {/* Sign Up Form */}
                <h1 className="text-3xl font-bold text-text mb-2 font-manrope">
                  Sign Up for an Account
                </h1>
                <p className="text-gray-600 mb-4 font-semibold text-sm">
                  Create your account to get started.
                </p>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 font-manrope">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="">
                  <div className="mb-4">
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      required
                      fullWidth
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      fullWidth
                    />
                  </div>

                  <div className="mb-4">
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      required
                      fullWidth
                    />
                  </div>

                  <div className="mb-4">
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      required
                      fullWidth
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="peer appearance-none w-5 h-5 rounded-md border border-gray-300 
                           transition-all duration-200 cursor-pointer 
                           checked:bg-primary checked:border-primary"
                      />
                      <svg
                        className={`absolute left-0 top-0 w-5 h-5 p-[2px] pointer-events-none transition-all duration-200 
              ${agreeTerms ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#212121"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-800 font-manrope">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-text font-semibold hover:text-gray-600 no-underline"
                      >
                        Terms and Conditions
                      </a>
                    </span>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={loading}
                    size="large"
                  >
                    {loading ? "Creating Account..." : "Sign Up"}
                  </Button>
                </form>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full mx-6 border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <a
                    href="https://accounts.google.com/signin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <Icon icon="devicon:google" className="w-6 h-6" />
                  </a>

                  <a
                    href="https://www.apple.com/apple-id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <Icon icon="icomoon-free:appleinc" className="w-6 h-6" />
                  </a>

                  <a
                    href="https://www.facebook.com/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <Icon icon="logos:facebook" className="w-6 h-6" />
                  </a>
                </div>

                <p className="text-center text-sm text-gray-600 font-manrope">
                  Already have an account?{" "}
                  <button
                    onClick={() => navigate("/login")}
                    className="text-text font-bold hover:text-gray-600 no-underline font-manrope bg-transparent border-none cursor-pointer"
                  >
                    Sign In
                  </button>
                </p>
              </>
            ) : (
              <>
                {/* PIN Verification Form */}
                <h1 className="text-3xl font-bold text-text mb-2 font-manrope">
                  Account Verification
                </h1>
                <p className="text-gray-600 mb-8 font-semibold text-sm">
                  Enter OTP sent to your email to verify your account
                </p>

                <div className="mb-8">
                  <PinInput
                    length={6}
                    value={pinCode}
                    onChange={setPinCode}
                    onComplete={handlePinComplete}
                  />
                </div>

                <p className="text-center text-sm text-gray-500 mb-8 font-manrope">
                  I haven't received a code
                </p>

                <div className="space-y-4">
                  <Button
                    onClick={() => handlePinComplete(pinCode)}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    disabled={pinCode.length !== 6}
                  >
                    Confirm
                  </Button>

                  <Button
                    onClick={handleBackToForm}
                    variant="outlined"
                    color="default"
                    fullWidth
                    size="large"
                  >
                    Back to Sign Up
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        size="sm"
        hideFooter={true}
        hideHeader={true}
      >
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-text" />
          </div>
          <h3 className="text-xl font-bold mb-2 font-manrope">
            Verification Complete!
          </h3>
          <p className="text-gray-600 mb-6 font-manrope text-sm">
            Your account has been verified successfully
          </p>
          <Button
            onClick={handleVerificationSuccess}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            className="h-12"
          >
            Continue
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SignupPage;