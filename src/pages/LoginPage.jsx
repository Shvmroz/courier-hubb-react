import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { TextField } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Chrome, Apple, Facebook } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("temp@gmail.com");
  const [password, setPassword] = useState("temp@gmail.com");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
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
    <div className="min-h-screen flex font-manrope">
      {/* Left side - Logo */}
      <div className="hidden lg:flex w-1/2 bg-primary items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-text mb-4 font-manrope">
            CourierHubb.
          </h1>
          <h2 className="text-xl text-text opacity-80 font-manrope">
            Find Drivers, Post Jobs, And Get Things Moving
          </h2>
        </div>
      </div>

      {/* Right side - Sign in form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <img src="/sidebar_logo.jpg" alt="Logo" className="w-full" />
          </div>

          <div className="p-4 w-full">
            <h1 className="text-3xl font-bold text-text mb-2 font-manrope">
              Sign In
            </h1>
            <p className="text-gray-600 mb-6 font-manrope">
              Please sign in your account to continue.
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 font-manrope">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-4">
                <TextField
                  type="email"
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                />
              </div>

              <div className="mb-4">
                <TextField
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                />
              </div>

              <div className="flex justify-between items-center mb-6">
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

                <a
                  href="#"
                  className="text-sm text-red-500 hover:text-red-600 font-manrope no-underline"
                >
                  Forgot Password?
                </a>
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                size="large"
                className="mb-6"
              >
                {loading ? "Signing In..." : "Login"}
              </Button>
            </form>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-600 font-manrope">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <button
                type="button"
                className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Chrome className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Apple className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 font-manrope">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-text font-medium hover:text-gray-800 no-underline font-manrope"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
