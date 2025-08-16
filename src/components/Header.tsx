import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/public/ChatGPT_Image_14_de_ago._de_2025__17_40_00-removebg-preview.png" 
                alt="Job Matching AI Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold text-gray-900">Job Matching AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t('nav.features')}
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t('nav.about')}
            </a>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              {t('nav.login')}
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105">
              {t('nav.signup')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">
                {t('nav.features')}
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">
                {t('nav.pricing')}
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 font-medium">
                {t('nav.about')}
              </a>
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-gray-600 font-medium">Language</span>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
              </div>
              <div className="px-3 py-2 space-y-2">
                <button className="w-full text-left text-gray-600 hover:text-gray-900 font-medium">
                  {t('nav.login')}
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all">
                  {t('nav.signup')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;