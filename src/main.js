import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App) 

app.use(createPinia())
app.use(router) //instructing the app to load in the router module (ie index.js)

app.mount('#app') //mounts the js onto the div with id 'app' in index.html.. ie the whole app 
