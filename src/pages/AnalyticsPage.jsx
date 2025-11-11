import { Box, Typography, Paper } from '@mui/material';
import { BarChart3 } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700, 
            color: '#212121', 
            mb: 1,
            fontFamily: 'Manrope, sans-serif'
          }}
        >
          Analytics
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#666',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 400
          }}
        >
          View detailed analytics and insights
        </Typography>
      </Box>

      <Paper sx={{ p: 6, borderRadius: 3, textAlign: 'center' }}>
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <BarChart3 className="w-10 h-10 text-gray-800" />
        </div>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 600, 
            mb: 2,
            fontFamily: 'Manrope, sans-serif'
          }}
        >
          Analytics Dashboard
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#666', 
            mb: 4,
            fontFamily: 'Manrope, sans-serif'
          }}
        >
          Comprehensive analytics and reporting tools coming soon
        </Typography>
      </Paper>
    </Box>
  );
};

export default AnalyticsPage;