import { Button as MuiButton } from '@mui/material';

const Button = ({ 
  children, 
  variant = 'contained', 
  size = 'medium', 
  className = '', 
  sx = {},
  ...props 
}) => {
  const customSx = {
    backgroundColor: variant === 'contained' ? '#fafe11' : 'transparent',
    color: '#212121',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: variant === 'contained' ? '#e8e50f' : 'rgba(250, 254, 17, 0.1)',
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
    ...sx
  };

  return (
    <MuiButton
      variant={variant}
      size={size}
      className={className}
      sx={customSx}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;