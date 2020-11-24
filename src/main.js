import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import './assets/styles.css'
import { auth } from './firebase/firebase'

createApp(App).use(store).use(router).mount('#app')