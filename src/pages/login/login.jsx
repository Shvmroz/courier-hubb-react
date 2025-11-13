import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { Input } from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Chrome, Apple, Facebook } from "lucide-react";
import { Icon } from "@iconify/react";

const LoginPage = () => {
  const [email, setEmail] = useState("temp@gmail.com");
  const [password, setPassword] = useState("temp@gmail.com");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(email, password);

    if (result.success) {
      navigate("/home");
    } else {
      setError(result.error);
    }

    setLoading(false);
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

      {/* Right side - Sign in form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-[90%]">
          <div className="p-4 w-full">
            <h1 className="text-3xl font-bold text-text mb-2 font-manrope">
              Sign In
            </h1>
            <p className="text-gray-600 mb-4 font-semibold text-sm">
              Please sign in your account to continue.
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 font-manrope">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="">
              <div className="mb-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                />
              </div>

              <div className="mb-6">
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                />
              </div>

              <div className="flex justify-between items-center my-6">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="peer appearance-none w-5 h-5 rounded-md border border-gray-300 
                         transition-all duration-200 cursor-pointer 
                         checked:bg-primary checked:border-primary"
                    />
                    <svg
                      className={`absolute left-0 top-0 w-5 h-5 p-[2px] pointer-events-none transition-all duration-200 
            ${rememberMe ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
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
                    Remember me
                  </span>
                </label>

                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm text-rose-500 hover:text-rose-700 font-semibold no-underline"
                >
                  Forgot Password?
                </button>
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                size="large"
              >
                {loading ? "Signing In..." : "Login"}
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
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-text font-bold hover:text-gray-600 no-underline font-manrope bg-transparent border-none cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;