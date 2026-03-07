import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
    setIsMobileMenuOpen(false);
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="relative group">
                {/* Subtle Background Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-15"></div>
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-15" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-15" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Main Logo Container */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg border border-cyan-500/30 shadow-md shadow-cyan-500/15 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 rounded-lg"></div>

                  <div className="relative px-2.5 sm:px-3 py-1.5 sm:py-2">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded blur-sm opacity-30"></div>
                        <div className="relative bg-gray-900/80 rounded border border-white/10 px-1 sm:px-1.5 py-0.5 sm:py-1">
                          <div className="flex items-center gap-0.5">
                            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded flex items-center justify-center shadow-sm">
                              <span className="text-white font-bold text-[10px] sm:text-xs">Ö</span>
                            </div>
                            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center shadow-sm">
                              <span className="text-white font-bold text-[10px] sm:text-xs">A</span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-white font-bold text-sm sm:text-base bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">ÖMER</span>
                          <span className="text-cyan-400 font-bold text-sm sm:text-base bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AYIK</span>
                        </div>
                        <div className="text-[9px] sm:text-xs text-gray-500 font-light tracking-wider uppercase">Full Stack Developer</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-1.5, 1.5], rotate: [-4, 4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-40"
                ></motion.div>
                <motion.div
                  animate={{ y: [1.5, -1.5], rotate: [4, -4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
                ></motion.div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800'
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Right Side: Language + CTA + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Selector */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center bg-gray-800/50 rounded-lg p-0.5 sm:p-1"
              >
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${language === 'en'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-cyan-400'
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('tr')}
                  className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${language === 'tr'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-cyan-400'
                    }`}
                >
                  TR
                </button>
              </motion.div>

              {/* CTA Button - hidden on small mobile */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('contact')}
                className="hidden sm:block px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                {t('nav.get_in_touch')}
              </motion.button>

              {/* Hamburger Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800/50"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-gray-900/98 backdrop-blur-lg z-50 lg:hidden border-l border-gray-800 shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-800/50"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-base font-medium ${activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                      }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="px-4 mt-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-base"
                >
                  {t('nav.get_in_touch')}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
