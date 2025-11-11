import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowBack } from '@mui/icons-material';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          {/* Large 404 */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '8rem', md: '12rem' },
              fontWeight: 800,
              fontFamily: 'Manrope, sans-serif',
              lineHeight: 0.8,
              mb: 2,
              color: '#212121',
              textShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            404
          </Typography>

          {/* Error message */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: 'Manrope, sans-serif',
              mb: 2,
              color: '#212121',
            }}
          >
            Page Not Found
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontFamily: 'Manrope, sans-serif',
              mb: 4,
              color: '#212121',
              opacity: 0.8,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </Typography>

          {/* Action buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<Home />}
              onClick={handleGoHome}
              sx={{
                px: 4,
                py: 1.5,
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
              }}
            >
              Go Home
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBack />}
              onClick={handleGoBack}
              sx={{
                px: 4,
                py: 1.5,
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                borderColor: '#212121',
                color: '#212121',
                '&:hover': {
                  borderColor: '#212121',
                  backgroundColor: 'rgba(33, 33, 33, 0.08)',
                },
              }}
            >
              Go Back
            </Button>
          </Box>

          {/* Decorative element */}
          <Box
            sx={{
              mt: 6,
              fontSize: '4rem',
              opacity: 0.6,
            }}
          >
            🚚💨
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;