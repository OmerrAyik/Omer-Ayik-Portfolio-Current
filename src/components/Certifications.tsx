import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const certifications = [
    {
      title: 'English Language Proficiency (B2)',
      level: 'Upper Intermediate',
      institution: 'British Time Language Schools',
      description: 'Certified proficiency in English communication for professional and technical environments.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Advanced Web Development',
      level: 'Complete Course',
      institution: 'Udemy Platform',
      description: 'Comprehensive training from beginner to advanced level in modern web development technologies including JavaScript, jQuery, Bootstrap, HTML5, and CSS3.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Website Usability',
      institution: 'BTK Academy Platform',
      description: 'Specialized training in user experience, accessibility, and website usability best practices.',
      color: 'from-cyan-400 to-teal-500',
    },
    {
      title: 'Website Design Fundamentals',
      institution: 'METU (Middle East Technical University)',
      description: 'Foundational principles of web design, layout, and visual communication.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const references = [
    {
      name: 'Salih Enver Yurter',
      position: 'Founding Partner at Avsos.ai',
      email: 'enveryurter@gmail.com',
    },
    {
      name: 'Resul Çağdaş',
      position: 'IT Staff at Kağıthane Kaymakamlığı',
      email: 'resulcagdas@gmail.com',
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
    <section id="certifications" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
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
              {t('certifications.title')} & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{t('certifications.references')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-cyan-400 mb-10 flex items-center gap-3"
              >
                <Award className="w-8 h-8" />
                {t('certifications.professional_certifications')}
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                  >
                    <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>

                    <div className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} bg-opacity-10`}>
                          <CheckCircle className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-cyan-400 text-sm mb-2">{cert.level}</p>
                          <p className="text-gray-400 text-sm">{cert.institution}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{cert.description}</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {t('certifications.professional_references')}
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-8">
                {references.map((ref, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">{ref.name}</h4>
                    <p className="text-cyan-400 text-sm mb-4">{ref.position}</p>
                    <a
                      href={`mailto:${ref.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {ref.email}
                    </a>
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

export default Certifications;
