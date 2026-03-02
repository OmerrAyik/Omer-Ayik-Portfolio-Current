import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t('about.paragraph1')}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t('about.paragraph2')}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('about.paragraph3')}
                </p>
              </div>

              <motion.a
                href="#"
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                {t('about.download_cv')}
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">{t('about.contact_info')}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{t('about.location_label')}</p>
                      <p className="text-gray-200">{t('about.location_value')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{t('about.phone_label')}</p>
                      <a href="tel:+905331992489" className="text-gray-200 hover:text-cyan-400 transition-colors">
                        {t('about.phone_value')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{t('about.email_label')}</p>
                      <a href="mailto:ayik3456@gmail.com" className="text-gray-200 hover:text-cyan-400 transition-colors break-all">
                        {t('about.email_value')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
