import Layout from '../components/Layout';
import Button from '../components/Button';
import {
  Box,
  Paper,
  Typography,
  Avatar
} from '@mui/material';
import { Work } from '@mui/icons-material';

const Jobs = () => {
  return (
    <Layout>
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
            My Jobs
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400
            }}
          >
            Manage your posted jobs and track their progress
          </Typography>
        </Box>

        <Paper sx={{ p: 6, borderRadius: 3, textAlign: 'center' }}>
          <Avatar 
            sx={{ 
              width: 80, 
              height: 80, 
              backgroundColor: '#fafe11',
              color: '#212121',
              mx: 'auto', 
              mb: 3,
              fontSize: '2rem'
            }}
          >
            <Work sx={{ fontSize: '2rem' }} />
          </Avatar>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            No Jobs Posted Yet
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#666', 
              mb: 4,
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            Start by posting your first job to find drivers in your area
          </Typography>
          <Button size="large">
            Post Your First Job
          </Button>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Jobs;