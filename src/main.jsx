import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import global_en from './translation/en/global.json'
import global_ar from './translation/ar/global.json'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

i18next.init({
  lng: 'en',
  resources: {
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
