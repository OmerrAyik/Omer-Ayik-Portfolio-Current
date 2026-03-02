import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
