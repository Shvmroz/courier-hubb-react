import Button from '../components/ui/Button';
import { Briefcase } from 'lucide-react';

const Jobs = () => {
  return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text mb-2 font-manrope">
            My Jobs
          </h1>
          <p className="text-xl text-gray-600 font-manrope font-normal">
            Manage your posted jobs and track their progress
          </p>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-sm text-center">
          <div className="w-20 h-20 bg-primary text-text rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 font-manrope">
            No Jobs Posted Yet
          </h2>
          <p className="text-gray-600 mb-8 font-manrope">
            Start by posting your first job to find drivers in your area
          </p>
          <Button variant="contained" color="primary" size="large">
            Post Your First Job
          </Button>
        </div>
      </div>
  );
};

export default Jobs;