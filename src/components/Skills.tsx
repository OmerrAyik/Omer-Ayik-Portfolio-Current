import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend_frameworks'),
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'jQuery'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: t('skills.styling_ui'),
      skills: ['Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: t('skills.react_ecosystem'),
      skills: ['React Hooks', 'useState', 'useEffect', 'State Management', 'Component Architecture'],
      color: 'from-cyan-400 to-teal-500',
    },
    {
      title: t('skills.backend_integration'),
      skills: ['REST API', 'API Integration', 'Asynchronous Data Fetching'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: t('skills.tools_design'),
      skills: ['Adobe Photoshop', 'Adobe InDesign', 'Responsive Design', 'WordPress', 'Elementor'],
      color: 'from-blue-400 to-cyan-400',
    },
    {
      title: t('skills.development_practices'),
      skills: ['Agile Methodology', 'Clean Code', 'Performance Optimization', 'Git', 'Code Review'],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t('skills.title_prefix')} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t('skills.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">{t('skills.core_competencies')}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>{t('skills.comp1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>{t('skills.comp2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>{t('skills.comp3')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>{t('skills.comp4')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>{t('skills.comp5')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>{t('skills.comp6')}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
