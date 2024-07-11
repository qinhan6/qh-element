import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MyElement from 'my-element';

createApp(App).use(MyElement).mount('#app')
