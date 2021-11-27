import { createApp } from 'vue'
import App from './App.vue' // App is the root component in which all other components are nested
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app') // CreateApp is mounted to the DOM (#app)
