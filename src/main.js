import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import iconSetMdiV7 from 'quasar/icon-set/mdi-v7'
import router from './router'
import App from './App.vue'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import 'quasar/src/css/index.sass'
import './css/app.css'

const app = createApp(App)
app.use(router)
app.use(Quasar, {
  lang: quasarLang,
  iconSet: iconSetMdiV7,
  plugins: {}
})
app.mount('#app')
