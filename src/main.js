import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './assets/main.css'

import VueConfetti from 'vue-confetti'

  


let auth = getAuth()
onAuthStateChanged(auth, (user) => {
    const app = createApp(App)

    app.use(router)
    app.use(VueConfetti)

    app.mount('#app')

})

