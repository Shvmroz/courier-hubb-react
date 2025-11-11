import Layout from '../components/Layout';
import Button from '../components/Button';
import {
  Box,
  Paper,
  Typography,
  Avatar
} from '@mui/material';
import { Message } from '@mui/icons-material';

const Messages = () => {
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
            Messages
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400
            }}
          >
            Communicate with drivers and manage your conversations
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
            <Message sx={{ fontSize: '2rem' }} />
          </Avatar>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 2,
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            No Messages Yet
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#666', 
              mb: 4,
              fontFamily: 'Manrope, sans-serif'
            }}
          >
            Once you post jobs and connect with drivers, your conversations will appear here
          </Typography>
          <Button size="large">
            Start a Conversation
          </Button>
        </Paper>
      </Box>
    </Layout>
  );
};

export default Messages;