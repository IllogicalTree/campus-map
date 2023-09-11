import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from '/plugins/vuetify'

import App from './App.vue'
import router from './router'

const app = createApp(App) 

app.use(createPinia())
app.use(router) //web server

/*
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaWheelchair,
  MdElevator,
  MdStairs,
  BiBadgeWcFill
} from 'oh-vue-icons/icons'
*/

/*
addIcons(
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaWheelchair,
  MdElevator,
  MdStairs,
  BiBadgeWcFill
)
app.component('vue-icon', OhVueIcon)
*/

app.use(vuetify)

import { registerSW } from 'virtual:pwa-register'

registerSW({
  onOfflineReady() {
    console.log('App is offline ready')
  },
})

app.mount('#app')