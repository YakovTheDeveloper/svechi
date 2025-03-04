import '@/app/assets/styles/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './providers'
import { vMaska } from 'maska/vue'
import { loadIcons } from '@/shared/utils/icons.ts'
import App from './App.vue'
import i18n from './i18n'

loadIcons()

const app = createApp(App)

app.use(createPinia()).use(i18n).use(router).directive('maska', vMaska).mount('#app')
