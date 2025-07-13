import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue';

export function IsMobile() {
    const isMobile = ref(window.innerWidth <= 768);
    
    const check = () => {
        isMobile.value = window.innerWidth <= 768;
    };
    
    const instance = getCurrentInstance();
    if (instance) {
        onMounted(() => {
            window.addEventListener('resize', check);
        });
        
        onUnmounted(() => {
            window.removeEventListener('resize', check);
        });
    }
    
    return isMobile;
}