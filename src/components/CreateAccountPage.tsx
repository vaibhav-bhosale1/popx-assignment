import React, { useState } from 'react';

interface CreateAccountPageProps {
  onNavigate: (page: number) => void;
}

const CreateAccountPage: React.FC<CreateAccountPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateAccount = () => {
    // Simulate account creation and navigate to account settings
    onNavigate(4);
  };

  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          Create your<br />
          PopX account
        </h1>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-1">
            Full Name*
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-1">
            Phone number*
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-1">
            Email address*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-1">
            Password*
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-1">
            Company name
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Marry Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div className="pb-4">
          <label className="block text-purple-600 text-sm font-medium mb-3">
            Are you an Agency?*
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleInputChange}
                className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              />
              <span className="ml-2 text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleInputChange}
                className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              />
              <span className="ml-2 text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>
        
        <div className="pt-4">
          <button
            onClick={handleCreateAccount}
            className="w-full bg-purple-600 text-white py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;