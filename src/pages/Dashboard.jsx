import Button from '../components/ui/Button';
import {
  Clock,
  CheckCircle,
  Truck,
  MessageCircle,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Active Jobs', value: '03', icon: Truck, color: '#2196f3' },
    { label: 'Completed Jobs', value: '08', icon: CheckCircle, color: '#4caf50' },
    { label: 'New Bids', value: '03', icon: Clock, color: '#ff9800' },
    { label: 'New Messages', value: '03', icon: MessageCircle, color: '#9c27b0' },
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
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 text-white p-8 rounded-3xl mb-8 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-manrope">
                Need to send something? Post your first job for{' '}
                <span className="text-primary">FREE!</span>
              </h1>
              <h2 className="text-xl opacity-90 font-manrope font-normal">
                Find Drivers, Post Jobs, And Get Things Moving.
              </h2>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-5xl mx-auto">
                🚚
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Quick Stats */}
            <div className="bg-white p-6 mb-6 rounded-3xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold font-manrope">
                  Quick Stats
                </h3>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-manrope">
                  Last 7 days
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="bg-text text-white text-center rounded-2xl p-6">
                      <Icon className="w-8 h-8 mb-2 mx-auto" style={{ color: stat.color }} />
                      <div className="text-3xl font-bold mb-2 font-manrope">
                            {stat.value}
                      </div>
                      <div className="text-sm opacity-80 font-manrope">
                            {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Posted Jobs */}
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6 font-manrope">
                Posted Jobs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary text-text rounded-full flex items-center justify-center text-xl">
                              {job.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold font-manrope">
                                {job.title}
                          </h4>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-500 font-manrope">
                                  {job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Total Spend */}
            <div className="bg-white p-6 mb-6 rounded-3xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6 font-manrope">
                Total Spend
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 font-manrope">
                    On Completed Jobs
                  </span>
                  <span className="font-semibold font-manrope">
                    $250.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 font-manrope">
                    This Month
                  </span>
                  <span className="font-semibold font-manrope">
                    $120
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 font-manrope">
                    Last Month
                  </span>
                  <span className="font-semibold font-manrope">
                    $90
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold font-manrope">
                    Total
                    </span>
                    <span className="font-semibold font-manrope">
                    $250
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold font-manrope">
                  Messages
                </h3>
                <Button variant="text" size="small" color="primary">
                  See All
                </Button>
              </div>
              <div className="space-y-0">
                {messages.map((message, index) => (
                  <div key={message.id}>
                    <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                      <img 
                        src={message.avatar} 
                        alt={message.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold text-sm font-manrope">
                              {message.name}
                          </h4>
                          <span className="text-xs text-gray-500 font-manrope">
                              {message.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 font-manrope">
                            {message.message}
                        </p>
                      </div>
                    </div>
                    {index < messages.length - 1 && <div className="border-t"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;