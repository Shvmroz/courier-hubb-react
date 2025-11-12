import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, ArrowBack } from "@mui/icons-material";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          {/* Large 404 */}
          <Typography variant="h3">404</Typography>

          {/* Error message */}
          <Typography variant="subtitle">Page Not Found</Typography>

  
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
