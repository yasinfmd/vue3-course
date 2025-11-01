import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//createApp(App).mount('#app')
const appElement=document.getElementById('app')
createApp(App,{
    someData: 'This is some data passed to the root component'
}).mount(appElement)
