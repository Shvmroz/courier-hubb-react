import { Button } from '@mui/material';
import {
  Box,
  Paper,
  Typography,
  Avatar
} from '@mui/material';
import { Plus } from 'lucide-react';

const PostJobPage = () => {
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
            Post a Job
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400
            }}
          >
            Create a new job posting to find drivers
          </Typography>
        </Box>

        <Paper sx={{ p: 6, borderRadius: 3, textAlign: 'center' }}>
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-10 h-10 text-gray-800" />
          </div>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            Create New Job Posting
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#666', 
              mb: 4,
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            Fill out the job details to connect with available drivers in your area
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Start Creating Job
          </Button>
        </Paper>
      </Box>
  );
};

export default PostJobPage;