import React, { useState } from 'react';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import AccountSettingsPage from './components/AccountSettingsPage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    { id: 1, component: WelcomePage },
    { id: 2, component: LoginPage },
    { id: 3, component: CreateAccountPage },
    { id: 4, component: AccountSettingsPage },
  ];

  
  const CurrentPageComponent = pages[currentPage - 1].component;

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= 4) {
      setCurrentPage(pageNumber);
    }
  };

  const goHome = () => setCurrentPage(1);
  const goNext = () => goToPage(currentPage + 1);
  const goPrevious = () => goToPage(currentPage - 1);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Mobile App Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="h-[600px] flex flex-col">
            {/* Page Content */}
            <div className="flex-1 overflow-y-auto">
              <CurrentPageComponent onNavigate={goToPage} />
            </div>
            
            {/* Navigation Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="flex items-center justify-center space-x-6">
                <button
                  onClick={goHome}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <Home size={20} />
                </button>
                
                <button
                  onClick={goPrevious}
                  disabled={currentPage === 1}
                  className="p-2 text-gray-500 hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <span className="text-sm text-gray-600 font-medium min-w-[60px] text-center">
                  {currentPage} of 4
                </span>
                
                <button
                  onClick={goNext}
                  disabled={currentPage === 4}
                  className="p-2 text-gray-500 hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;