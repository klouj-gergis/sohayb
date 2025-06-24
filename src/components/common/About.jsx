
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation('global');
  const lang = i18n.language;
  const textdir = lang === 'en' ? 'left' : 'right';

  return (
    <motion.section
      id='about'
      className="bg-white flex flex-col lg:flex-row items-center p-4 md:p-8 w-full min-h-[80vh] gap-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut'}}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="w-full lg:w-6/12 flex items-center justify-center">
        <div className="relative w-[80vw] h-[40vh] sm:w-[70vw] md:w-[60vw] lg:w-[60vh] lg:h-[40vh] bg-olive-dark ">
          <motion.img
            src="/images/about-us.jpg"
            alt="olive tree"
            className="absolute w-full -top-3 -left-3 object-cover h-full"
            initial={{ top: 0 , left: 0 }}
            whileInView={{ top: -10, left: -10 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-6/12 p-2 sm:p-4 flex flex-col gap-4 text-center lg:text-left">
        <h3 className={`text-olive text-3xl sm:text-4xl font-semibold text-${textdir}`}>{t("about.header")}</h3>
        <p className={`text-warmbrown text-base sm:text-lg md:text-xl text-${textdir}`}>
          {t("about.text")}
        </p>
      </div>
    </motion.section>
  );
}
