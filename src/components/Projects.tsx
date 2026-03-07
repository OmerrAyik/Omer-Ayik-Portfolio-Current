import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.erikliteknik_title'),
      description: t('projects.erikliteknik_desc'),
      technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3'],
      link: 'https://erikliteknik.com',
      features: [
        t('projects.erikliteknik_feature1'),
        t('projects.erikliteknik_feature2'),
        t('projects.erikliteknik_feature3'),
        t('projects.erikliteknik_feature4'),
        t('projects.erikliteknik_feature5'),
      ],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: t('projects.alparslantekno_title'),
      description: t('projects.alparslantekno_desc'),
      technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3'],
      link: 'https://alparslantekno.com',
      features: [
        t('projects.alparslantekno_feature1'),
        t('projects.alparslantekno_feature2'),
        t('projects.alparslantekno_feature3'),
        t('projects.alparslantekno_feature4'),
        t('projects.alparslantekno_feature5'),
      ],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: t('projects.digitalev_title'),
      description: t('projects.digitalev_desc'),
      technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3'],
      link: 'https://digitalevin.com',
      features: [
        t('projects.digitalev_feature1'),
        t('projects.digitalev_feature2'),
        t('projects.digitalev_feature3'),
        t('projects.digitalev_feature4'),
        t('projects.digitalev_feature5'),
      ],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'E-Commerce Clothing Website',
      description: 'A modern, component-based e-commerce platform built with React featuring product listing, shopping cart management, and dynamic content rendering.',
      technologies: ['React', 'JavaScript', 'REST API', 'Responsive Design'],
      features: [
        'Component-based e-commerce interface',
        'Product listing with dynamic data',
        'Add/remove items from cart',
        'Total price calculation',
        'User-friendly shopping experience',
      ],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'English Vocabulary Learning App',
      description: 'An engaging web-based application designed to help children learn English vocabulary through interactive word cards and voice pronunciation features.',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Audio API'],
      features: [
        'Dynamic UI components for word cards',
        'Learning flow management',
        'Voice pronunciation feature',
        'Mobile and desktop responsive',
        'Interactive learning experience',
      ],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'SteamCraft SF',
      description: 'A professional business website featuring modern design and responsive layouts.',
      technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3'],
      link: 'https://steamcraftsf.com/',
      features: [
        'Custom responsive design',
        'Modern UI/UX',
        'Cross-browser compatibility',
        'Performance optimized',
      ],
      gradient: 'from-cyan-400 to-teal-500',
    },
    {
      title: 'Demirhan Law & Consultancy',
      description: 'A professional law firm website with elegant design and comprehensive service information.',
      technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3'],
      link: 'https://demirhanhukukvedanismanlik.com/',
      features: [
        'Professional business website',
        'Responsive design',
        'Clean and elegant interface',
        'SEO optimized',
      ],
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Yağız Cattle Farming',
      description: 'A business website for agricultural services with modern design and user-friendly interface.',
      technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'HTML5', 'CSS3'],
      link: 'https://yagizbesicilik.com/',
      features: [
        'Business showcase website',
        'Responsive layout',
        'Modern design',
        'Fast loading performance',
      ],
      gradient: 'from-blue-400 to-cyan-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {t('projects.title_prefix')} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t('projects.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title.includes('Agency') || project.title.includes('Ajansı') ? (
                      <>
                        Digital Evin <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {project.title.includes('Agency') ? 'Agency' : 'Ajansı'}
                        </span>
                      </>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">{t('projects.key_features')}</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 text-gray-300 rounded-lg text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="flex gap-3 mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('projects.view_project')}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/OmerrAyik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              {t('projects.view_github')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
