import React from 'react';

interface WelcomePageProps {
  onNavigate: (page: number) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      {/* Logo/Badge */}
      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-8">
        1
      </div>
      
      {/* Welcome Text */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="w-full space-y-3">
        <button
          onClick={() => onNavigate(3)}
          className="w-full bg-purple-600 text-white py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
        
        <button
          onClick={() => onNavigate(2)}
          className="w-full bg-purple-200 text-purple-700 py-4 rounded-lg font-medium hover:bg-purple-300 transition-colors"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;