import Layout from '../components/Layout';
import Button from '../components/Button';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Schedule,
  CheckCircle,
  LocalShipping,
  Message,
  LocationOn,
  ArrowForward
} from '@mui/icons-material';

const Dashboard = () => {
  const stats = [
    { label: 'Active Jobs', value: '03', icon: LocalShipping, color: '#2196f3' },
    { label: 'Completed Jobs', value: '08', icon: CheckCircle, color: '#4caf50' },
    { label: 'New Bids', value: '03', icon: Schedule, color: '#ff9800' },
    { label: 'New Messages', value: '03', icon: Message, color: '#9c27b0' },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Courier Job',
      location: 'Greenwich',
      type: 'courier',
      time: '2 hours ago',
      icon: '📦'
    },
    {
      id: 2,
      title: 'LGV Job',
      location: 'Greenwich',
      type: 'lgv',
      time: '3 hours ago',
      icon: '🚛'
    },
    {
      id: 3,
      title: 'HGV Job',
      location: 'Greenwich',
      type: 'hgv',
      time: '4 hours ago',
      icon: '🚚'
    },
    {
      id: 4,
      title: 'Recovery Trucks',
      location: 'Greenwich',
      type: 'recovery',
      time: '5 hours ago',
      icon: '🔧'
    },
    {
      id: 5,
      title: 'Household Removals',
      location: 'Greenwich',
      type: 'removals',
      time: '6 hours ago',
      icon: '📋'
    },
    {
      id: 6,
      title: 'Waste Manager',
      location: 'Greenwich',
      type: 'waste',
      time: '7 hours ago',
      icon: '♻️'
    }
  ];

  const messages = [
    {
      id: 1,
      name: 'Doris B',
      message: 'Hi, how are you?',
      time: '3:02 PM',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Todd S. Ertel',
      message: 'Hi, how are you?',
      time: '3:02 PM',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Abigail Baxter',
      message: 'Hi, how are you?',
      time: '3:02 PM',
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=50&h=50&fit=crop&crop=face'
    }
  ];

  return (
    <Layout>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {/* Hero Banner */}
        <Paper 
          sx={{ 
            background: 'linear-gradient(135deg, #212121 0%, #424242 100%)',
            color: 'white',
            p: 4,
            borderRadius: 3,
            mb: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  fontFamily: 'Manrope, sans-serif'
                }}
              >
                Need to send something? Post your first job for{' '}
                <Box component="span" sx={{ color: '#fafe11' }}>FREE!</Box>
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  opacity: 0.9,
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400
                }}
              >
                Find Drivers, Post Jobs, And Get Things Moving.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Box 
                sx={{ 
                  width: 100, 
                  height: 100, 
                  backgroundColor: '#fafe11', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  mx: 'auto'
                }}
              >
                🚚
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} lg={8}>
            {/* Quick Stats */}
            <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    fontFamily: 'Manrope, sans-serif'
                  }}
                >
                  Quick Stats
                </Typography>
                <Chip 
                  label="Last 7 days" 
                  size="small" 
                  sx={{ 
                    backgroundColor: '#f5f5f5',
                    fontFamily: 'Manrope, sans-serif'
                  }} 
                />
              </Box>
              <Grid container spacing={2}>
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <Grid item xs={6} md={3} key={stat.label}>
                      <Card 
                        sx={{ 
                          backgroundColor: '#212121',
                          color: 'white',
                          textAlign: 'center',
                          borderRadius: 2
                        }}
                      >
                        <CardContent sx={{ py: 3 }}>
                          <Icon sx={{ fontSize: 32, mb: 1, color: stat.color }} />
                          <Typography 
                            variant="h4" 
                            sx={{ 
                              fontWeight: 700, 
                              mb: 1,
                              fontFamily: 'Manrope, sans-serif'
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              opacity: 0.8,
                              fontFamily: 'Manrope, sans-serif'
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Paper>

            {/* Posted Jobs */}
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 3,
                  fontFamily: 'Manrope, sans-serif'
                }}
              >
                Posted Jobs
              </Typography>
              <Grid container spacing={2}>
                {jobs.map((job) => (
                  <Grid item xs={12} md={6} key={job.id}>
                    <Card 
                      sx={{ 
                        borderRadius: 2,
                        border: '1px solid #e0e0e0',
                        '&:hover': {
                          boxShadow: 3,
                          transform: 'translateY(-2px)',
                          transition: 'all 0.2s ease-in-out'
                        }
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar 
                              sx={{ 
                                backgroundColor: '#fafe11',
                                color: '#212121',
                                width: 48,
                                height: 48
                              }}
                            >
                              {job.icon}
                            </Avatar>
                            <Box>
                              <Typography 
                                variant="subtitle1" 
                                sx={{ 
                                  fontWeight: 600,
                                  fontFamily: 'Manrope, sans-serif'
                                }}
                              >
                                {job.title}
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <LocationOn sx={{ fontSize: 16, color: '#666' }} />
                                <Typography 
                                  variant="body2" 
                                  sx={{ 
                                    color: '#666',
                                    fontFamily: 'Manrope, sans-serif'
                                  }}
                                >
                                  {job.location}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <ArrowForward sx={{ color: '#666' }} />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} lg={4}>
            {/* Total Spend */}
            <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 3,
                  fontFamily: 'Manrope, sans-serif'
                }}
              >
                Total Spend
              </Typography>
              <Box sx={{ space: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    On Completed Jobs
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    $250.00
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    This Month
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    $120
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    Last Month
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    $90
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    Total
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600,
                      fontFamily: 'Manrope, sans-serif'
                    }}
                  >
                    $250
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Messages */}
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    fontFamily: 'Manrope, sans-serif'
                  }}
                >
                  Messages
                </Typography>
                <Button variant="text" size="small">
                  See All
                </Button>
              </Box>
              <List sx={{ p: 0 }}>
                {messages.map((message, index) => (
                  <Box key={message.id}>
                    <ListItem 
                      sx={{ 
                        px: 0,
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: '#f5f5f5'
                        }
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar src={message.avatar} alt={message.name} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography 
                              variant="subtitle2" 
                              sx={{ 
                                fontWeight: 600,
                                fontFamily: 'Manrope, sans-serif'
                              }}
                            >
                              {message.name}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: '#666',
                                fontFamily: 'Manrope, sans-serif'
                              }}
                            >
                              {message.time}
                            </Typography>
                          </Box>
                        }
                        secondary={
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: '#666',
                              fontFamily: 'Manrope, sans-serif'
                            }}
                          >
                            {message.message}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index < messages.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;