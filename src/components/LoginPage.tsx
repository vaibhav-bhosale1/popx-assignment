import React, { useState } from 'react';

interface LoginPageProps {
  onNavigate: (page: number) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
  };

  const handleLogin = () => {
    // Simulate login and navigate to account settings
    onNavigate(4);
  };

  return (
    <div className="p-8 h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Signin to your<br />
          PopX account
        </h1>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-purple-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={handleLogin}
          className="w-full bg-gray-400 text-white py-4 rounded-lg font-medium hover:bg-gray-500 transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;