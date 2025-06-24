import { createApp } from 'vue'
import './style.css'
import Root from './Root.vue'

const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setVh();
window.addEventListener('resize', setVh);

createApp(Root).mount('#Root')
