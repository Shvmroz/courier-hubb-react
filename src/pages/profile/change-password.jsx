import { Lock } from 'lucide-react';

const ChangePasswordPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text mb-2  ">
          Change Password
        </h1>
        <p className="text-xl text-gray-600   font-normal">
          Update your account password
        </p>
      </div>

      <div className="bg-white p-12 rounded-3xl shadow-sm text-center">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-10 h-10 text-gray-800" />
        </div>
        <h2 className="text-2xl font-semibold mb-4  ">
          Change Password
        </h2>
        <p className="text-gray-600 mb-8  ">
          Password change functionality coming soon
        </p>
      </div>
    </div>
  );
};

export default ChangePasswordPage;