import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Compact Elegant Logo */}
            <div className="relative group">
              {/* Subtle Background Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute top-1 left-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-15"></div>
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-15" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-15" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Main Logo Container */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg border border-cyan-500/30 shadow-md shadow-cyan-500/15 backdrop-blur-sm overflow-hidden">
                {/* Inner Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 rounded-lg"></div>
                
                {/* Logo Content */}
                <div className="relative px-3 py-2">
                  <div className="flex items-center gap-2">
                    {/* Compact Icon */}
                    <div className="relative">
                      {/* Icon Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded blur-sm opacity-30"></div>
                      
                      {/* Icon Container */}
                      <div className="relative bg-gray-900/80 rounded border border-white/10 px-1.5 py-1">
                        <div className="flex items-center gap-0.5">
                          {/* Letter O */}
                          <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded flex items-center justify-center shadow-sm">
                            <span className="text-white font-bold text-xs">Ö</span>
                          </div>
                          
                          {/* Letter A */}
                          <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center shadow-sm">
                            <span className="text-white font-bold text-xs">A</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Icon Glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                    </div>
                    
                    {/* Logo Typography */}
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-white font-bold text-base bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">ÖMER</span>
                        <span className="text-cyan-400 font-bold text-base bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AYIK</span>
                      </div>
                      <div className="text-xs text-gray-500 font-light tracking-wider uppercase">Full Stack Developer</div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-1.5, 1.5], 
                  rotate: [-4, 4] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-40"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [1.5, -1.5], 
                  rotate: [4, -4] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
              ></motion.div>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center bg-gray-800/50 rounded-lg p-1"
            >
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'tr'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                TR
              </button>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              {t('nav.get_in_touch')}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
