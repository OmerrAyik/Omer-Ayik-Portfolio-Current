import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.job1_title'),
      company: t('experience.job1_company'),
      period: t('experience.job1_period'),
      location: t('experience.job1_location'),
      responsibilities: [
        t('experience.job1_resp1'),
        t('experience.job1_resp2'),
        t('experience.job1_resp3'),
        t('experience.job1_resp4'),
        t('experience.job1_resp5'),
      ],
    },
    {
      title: t('experience.job2_title'),
      company: t('experience.job2_company'),
      period: t('experience.job2_period'),
      location: t('experience.job2_location'),
      responsibilities: [
        t('experience.job2_resp1'),
        t('experience.job2_resp2'),
        t('experience.job2_resp3'),
        t('experience.job2_resp4'),
      ],
    },
    {
      title: t('experience.job3_title'),
      company: t('experience.job3_company'),
      period: t('experience.job3_period'),
      location: t('experience.job3_location'),
      responsibilities: [
        t('experience.job3_resp1'),
        t('experience.job3_resp2'),
        t('experience.job3_resp3'),
      ],
    },
    {
      title: t('experience.job4_title'),
      company: t('experience.job4_company'),
      period: t('experience.job4_period'),
      location: t('experience.job4_location'),
      responsibilities: [
        t('experience.job4_resp1'),
        t('experience.job4_resp2'),
        t('experience.job4_resp3'),
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
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
              {t('experience.title_prefix')} <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t('experience.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent sm:transform sm:-translate-x-1/2"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                    }`}
                >
                  <div className="absolute left-4 sm:left-1/2 top-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900 sm:transform sm:-translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50 -translate-x-1/2"></div>

                  <div className={`ml-10 sm:ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-5 sm:p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                      <div className="flex items-center gap-3 text-cyan-400 mb-4">
                        <Calendar className="w-5 h-5" />
                        <span className="text-base font-semibold">{exp.period}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>

                      <div className="flex items-center gap-3 text-gray-400 mb-4">
                        <Briefcase className="w-5 h-5" />
                        <span className="text-lg font-medium">{exp.company}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 mb-4">
                        <MapPin className="w-5 h-5" />
                        <span className="text-base">{exp.location}</span>
                      </div>

                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-3">
                            <span className="text-cyan-400 mt-1.5 flex-shrink-0 text-lg">•</span>
                            <span className="text-base leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
