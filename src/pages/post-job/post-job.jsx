import Button from '../../components/ui/Button';
import { Plus } from 'lucide-react';

const PostJobPage = () => {
  return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text mb-2  ">
            Post a Job
          </h1>
          <p className="text-xl text-gray-600   font-normal">
            Create a new job posting to find drivers
          </p>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-sm text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="w-10 h-10 text-gray-800" />
          </div>
          <h2 className="text-2xl font-semibold mb-4  ">
            Create New Job Posting
          </h2>
          <p className="text-gray-600 mb-8  ">
            Fill out the job details to connect with available drivers in your area
          </p>
          <Button variant="contained" color="primary" size="large">
            Start Creating Job
          </Button>
        </div>
      </div>
  );
};

export default PostJobPage;