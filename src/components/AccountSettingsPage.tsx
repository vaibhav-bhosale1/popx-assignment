import React from 'react';

interface AccountSettingsPageProps {
  onNavigate: (page: number) => void;
}

const AccountSettingsPage: React.FC<AccountSettingsPageProps> = ({ onNavigate }) => {
  return (
    <div className="p-8 h-full">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Account Settings
        </h1>
        
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Marry Doe
            </h2>
            <p className="text-gray-600 text-sm">
              Marry@Gmail.Com
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-gray-600 text-sm leading-relaxed">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing 
          Elit, Sed Diam Nonumy Nibh Tempor Invidunt Ut 
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettingsPage;