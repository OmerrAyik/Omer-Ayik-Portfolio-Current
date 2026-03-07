import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const { t, language } = useLanguage();
  const fullText = language === 'tr' ? 'Front-End Geliştirici' : 'Front-End Developer';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-cyan-400 text-lg md:text-xl mb-4 font-light tracking-wider"
            >
              {t('hero.greeting')}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
            >
              ÖMER AYIK
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                {typedText}
              </span>
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="ml-1 text-cyan-400"
                >
                  |
                </motion.span>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                {t('hero.view_projects')}
              </button>
              <a
                href="/cv.pdf"
                download="Omer-Ayik-CV.pdf"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                {t('hero.download_cv')}
              </a>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="flex justify-center lg:justify-start items-center gap-6"
            >
              <motion.a
                href="https://github.com/OmerrAyik"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ömer-ayik-140042235"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-shrink-0 relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>

            {/* Spinning gradient border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-75"
              style={{ padding: '3px' }}
            ></motion.div>

            {/* Photo container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-cyan-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-full"></div>
              <img
                src="/1000053l613.jpg"
                alt="Ömer Ayık"
                className="relative w-full h-full object-cover pr-10"
                style={{ transform: 'scale(1.8)', objectPosition: '20% 20%' }}
              />
              {/* Subtle overlay gradient at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </motion.div>

            {/* Decorative floating dots */}
            <motion.div
              animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
            ></motion.div>
            <motion.div
              animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
            ></motion.div>
            <motion.div
              animate={{ y: [-3, 7, -3], x: [-2, 4, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
            ></motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
