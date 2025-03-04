import { createI18n } from 'vue-i18n'
import { messages } from './assets/locales'

const i18n = createI18n({
  locale: 'ru', // default language
  fallbackLocale: 'en',
  messages
})

export default i18n
