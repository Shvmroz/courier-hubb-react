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
    <div className="min-h-[100vh] flex items-center justify-center bg-primary text-text">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center">
          {/* Large 404 */}
          <h1 className="text-6xl font-bold mb-4  ">404</h1>

          {/* Error message */}
          <h2 className="text-lg font-semibold mb-8  ">Page Not Found</h2>

          <div className="flex gap-4 justify-center">
            <Button 
              onClick={handleGoBack}
              variant="text"
              color="default"
              className="flex items-center gap-2 hover:bg-primary-dark"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;