import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'



export default function Hero() {
  const { t, i18n} = useTranslation('global')
  

  const lang = i18n.language
  const textdir = lang === 'ar' ? 'right' : 'left';
  console.log(lang, textdir)

  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] flex items-center justify-center bg-olive-dark px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className={`flex flex-col gap-5 w-full max-w-4xl items-${textdir}`}>
        <h2 className={`text-3xl sm:text-4xl md:text-6xl font-semibold text-white text-${textdir}`}>
          {t("hero.header")}
        </h2>

        <p className={`text-lg md:text-2xl text-goldleaf-light text-${textdir}`}>
          {t("hero.text")}
        </p>

        <div className={`flex justify-${textdir === 'left' ? 'start' : 'end'}`}>
          <a
            href="#products"
            className="block bg-goldleaf text-darkolive font-medium py-2 px-4 rounded hover:opacity-90 transition text-sm sm:text-base"
          >
            {t('hero.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
