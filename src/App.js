import React from 'react'

import BasketProvider from './context/BasketContext'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationAZ from './locales/az.json';
import AppProvider from './context/AppContext'
import NavigationContainer from './navigation/NavigationContainer'


const resources = {
  en: {
    translation: translationEN
  },
  az: {
    translation: translationAZ
  }
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'az',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
const App = () => {



  return (
    <AppProvider>
      <BasketProvider>
        <NavigationContainer />

      </BasketProvider>
    </AppProvider>

  )
}

export default App
