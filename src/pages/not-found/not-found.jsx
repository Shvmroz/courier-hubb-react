import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center text-text">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center">
          {/* Large 404 */}
          <h1 className="text-6xl font-bold mb-4  ">404</h1>

          {/* Error message */}
          <h2 className="text-2xl font-semibold mb-8  ">Page Not Found</h2>

          <div className="flex gap-4 justify-center">
            <Button 
              onClick={handleGoBack}
              variant="outlined"
              color="default"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            <Button 
              onClick={handleGoHome}
              variant="contained"
              color="primary"
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;