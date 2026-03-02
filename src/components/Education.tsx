import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const education = [
    {
      degree: 'Bachelor of Management Information Systems',
      school: 'Istanbul Topkapı University',
      period: '2020 - 2024',
      gpa: '3.10 / 4.00',
      description: 'Comprehensive education in information systems management, software development, and business processes.',
      highlights: [
        'Management Information Systems',
        'Software Development',
        'Database Management',
        'System Analysis & Design',
      ],
    },
    {
      degree: 'Information Technologies',
      school: 'Edip İplik Vocational Technical High School',
      period: '2016 - 2020',
      gpa: '93.22 / 100',
      achievement: 'Graduated 1st in School',
      description: 'Specialized technical education in information technologies with focus on programming and web development.',
      highlights: [
        'Web Development',
        'Programming Fundamentals',
        'Network Technologies',
        'Database Systems',
      ],
    },
  ];

  const languages = [
    {
      language: 'English',
      level: 'B2 (Upper Intermediate)',
      institution: 'British Time Language Schools',
      description: 'Proficient in both written and spoken English. Capable of effective communication in professional environments including technical discussions and customer meetings.',
    },
    {
      language: 'Turkish',
      level: 'Native',
      description: 'Native speaker with excellent communication skills.',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('education.title')} & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t('education.languages')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-16">
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-cyan-400 mb-10 flex items-center gap-3"
              >
                <GraduationCap className="w-8 h-8" />
                {t('education.academic_background')}
              </motion.h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                          {edu.degree}
                        </h4>
                        <p className="text-cyan-400 font-semibold text-xl mb-3">{edu.school}</p>
                        <p className="text-gray-400 text-lg leading-relaxed">{edu.description}</p>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-3">
                        <div className="flex items-center gap-3 text-gray-400">
                          <Calendar className="w-5 h-5" />
                          <span className="text-sm font-medium">{edu.period}</span>
                        </div>
                        <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm font-bold">
                          GPA: {edu.gpa}
                        </div>
                        {edu.achievement && (
                          <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold">
                            <Award className="w-5 h-5" />
                            {edu.achievement}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-cyan-400 mb-10 flex items-center gap-3"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {t('education.languages')}
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-8">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">{lang.language}</h4>
                    <p className="text-cyan-400 text-sm mb-3">{lang.level}</p>
                    <p className="text-gray-400 text-sm mb-2">{lang.institution}</p>
                    <p className="text-gray-300 leading-relaxed">{lang.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
