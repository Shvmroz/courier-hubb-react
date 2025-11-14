import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { Input } from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import PinInput from "../../components/ui/PinInput";
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
      setShowSuccess(true);
    }, 1000);
  };

  const handleVerificationSuccess = async () => {
    navigate("/home");
    setPinCode("");
  };

  const handleResendCode = () => {
    setShowSuccess(false);
    setPinCode("");
    // You can show a small toast or alert if you want
    alert("A new verification code has been sent to your email.");
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
                <h1 className="text-3xl font-bold text-text mb-2  ">
                  Sign Up for an Account
                </h1>
                <p className="text-gray-600 mb-4 font-semibold text-sm">
                  Create your account to get started.
                </p>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6  ">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="">
                  <div className="mb-4">
                    <Input
                      type="text"
                      placeholder="Full name"
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
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
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
                    <Checkbox
                      text={
                        <span className="text-gray-500">
                          I agree to the <a href="#">Terms and Conditions</a>
                        </span>
                      }
                      checked={agreeTerms}
                      onChange={setAgreeTerms}
                    />
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

                <p className="text-center text-sm text-gray-600  ">
                  Already have an account?{" "}
                  <button
                    onClick={() => navigate("/login")}
                    className="text-text font-bold hover:text-gray-600 no-underline   bg-transparent border-none cursor-pointer"
                  >
                    Log In
                  </button>
                </p>
              </>
            ) : (
              <>
                {/* PIN Verification Form */}
                <div className="text-center mb-10">
                  <h1 className="text-3xl font-bold text-text mb-2  ">
                    Account Verification
                  </h1>
                  <p className="text-gray-600 mb-[2.5rem] text-sm">
                    Enter OTP sent to your email to verify your account
                  </p>

                  <div className="mb-6">
                    <PinInput
                      length={5}
                      value={pinCode}
                      onChange={setPinCode}
                      onComplete={handlePinComplete}
                    />
                  </div>

                  <span
                    onClick={() => handleResendCode()}
                    className="text-center text-sm bg-[#f1f4fb] py-2 px-6 rounded-full hover:bg-[#e8ecf1] cursor-pointer"
                  >
                    I haven't received a code
                  </span>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => handlePinComplete(pinCode)}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    disabled={pinCode.length !== 5}
                  >
                    Confirm
                  </Button>
                  <div className="flex justify-end">
                    <Button
                      onClick={handleBackToForm}
                      variant="text"
                      color="default"
                      size="small"
                    >
                      Back to Sign Up
                    </Button>
                  </div>
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
          <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center mx-auto mb-4">
           <img src="/verification.png" alt="verification Logo" className="max-w-sm max-h-full object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2  ">
            Verification Complete!
          </h3>
          <p className="text-gray-600 mb-6   text-sm">
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
