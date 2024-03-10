import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import firebaseDb from './firebase'

const app = createApp(App)

app.use(ElementPlus)
app.provide('$db', firebaseDb)

app.mount('#app')
