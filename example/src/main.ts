import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mengUi from 'meng-ui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(mengUi)

app.mount('#app')

const env: string = import.meta.env.VITE_APP_NAME
console.log('env: ', env)
