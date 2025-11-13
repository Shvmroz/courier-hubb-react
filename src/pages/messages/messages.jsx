import Button from '../../components/ui/Button';
import { MessageCircle } from 'lucide-react';

const MessagesPage = () => {
  return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text mb-2 font-manrope">
            Messages
          </h1>
          <p className="text-xl text-gray-600 font-manrope font-normal">
            Communicate with drivers and manage your conversations
          </p>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-sm text-center">
          <div className="w-20 h-20 bg-primary text-text rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 font-manrope">
            No Messages Yet
          </h2>
          <p className="text-gray-600 mb-8 font-manrope">
            Once you post jobs and connect with drivers, your conversations will appear here
          </p>
          <Button variant="contained" color="primary" size="large">
            Start a Conversation
          </Button>
        </div>
      </div>
  );
};

export default MessagesPage;