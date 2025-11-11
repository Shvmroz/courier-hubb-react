import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  Box,
  Paper,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  Alert,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Google, Apple, Facebook } from '@mui/icons-material';
import { Button } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', fontFamily: 'Manrope, sans-serif' }}>
      {/* Left side - Logo */}
      {!isMobile && (
        <Box 
          sx={{ 
            width: '50%', 
            backgroundColor: '#fafe11', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800, 
                color: '#212121', 
                mb: 2,
                fontFamily: 'Manrope, sans-serif'
              }}
            >
              CourierHubb.
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#212121', 
                opacity: 0.8,
                fontFamily: 'Manrope, sans-serif'
              }}
            >
              Find Drivers, Post Jobs, And Get Things Moving
            </Typography>
          </Box>
        </Box>
      )}

      {/* Right side - Sign in form */}
      <Box 
        sx={{ 
          width: isMobile ? '100%' : '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          p: 3 
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          {/* Mobile logo */}
          {isMobile && (
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Paper 
                sx={{ 
                  display: 'inline-block', 
                  backgroundColor: '#fafe11', 
                  borderRadius: 4, 
                  p: 3, 
                  mb: 2 
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 800, 
                    color: '#212121',
                    fontFamily: 'Manrope, sans-serif'
                  }}
                >
                  CourierHubb.
                </Typography>
              </Paper>
            </Box>
          )}

          <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                color: '#212121', 
                mb: 1,
                fontFamily: 'Manrope, sans-serif'
              }}
            >
              Sign In
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#666', 
                mb: 3,
                fontFamily: 'Manrope, sans-serif'
              }}
            >
              Please sign in your account to continue.
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
              <TextField
                fullWidth
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ 
                  mb: 2,
                  '& .MuiInputLabel-root': { fontFamily: 'Manrope, sans-serif' },
                  '& .MuiInputBase-input': { fontFamily: 'Manrope, sans-serif' }
                }}
              />

              <TextField
                fullWidth
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{ 
                  mb: 2,
                  '& .MuiInputLabel-root': { fontFamily: 'Manrope, sans-serif' },
                  '& .MuiInputBase-input': { fontFamily: 'Manrope, sans-serif' }
                }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      sx={{ color: '#fafe11' }}
                    />
                  }
                  label={
                    <Typography sx={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem' }}>
                      Remember me
                    </Typography>
                  }
                />
                <Link 
                  href="#" 
                  sx={{ 
                    color: '#f44336', 
                    textDecoration: 'none',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.875rem'
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                sx={{ py: 1.5, mb: 3 }}
              >
                {loading ? 'Signing In...' : 'Login'}
              </Button>
            </Box>

            <Divider sx={{ mb: 3 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#666',
                  fontFamily: 'Manrope, sans-serif'
                }}
              >
                Or continue with
              </Typography>
            </Divider>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={4}>
                <IconButton 
                  fullWidth 
                  sx={{ 
                    border: '1px solid #ddd', 
                    borderRadius: 2, 
                    py: 1.5,
                    '&:hover': { backgroundColor: '#f5f5f5' }
                  }}
                >
                  <Google />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <IconButton 
                  fullWidth 
                  sx={{ 
                    border: '1px solid #ddd', 
                    borderRadius: 2, 
                    py: 1.5,
                    '&:hover': { backgroundColor: '#f5f5f5' }
                  }}
                >
                  <Apple />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <IconButton 
                  fullWidth 
                  sx={{ 
                    border: '1px solid #ddd', 
                    borderRadius: 2, 
                    py: 1.5,
                    '&:hover': { backgroundColor: '#f5f5f5' }
                  }}
                >
                  <Facebook />
                </IconButton>
              </Grid>
            </Grid>

            <Typography 
              variant="body2" 
              sx={{ 
                textAlign: 'center', 
                color: '#666',
                fontFamily: 'Manrope, sans-serif'
              }}
            >
              Don't have an account?{' '}
              <Link 
                href="#" 
                sx={{ 
                  color: '#212121', 
                  fontWeight: 500, 
                  textDecoration: 'none',
                  fontFamily: 'Manrope, sans-serif'
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;