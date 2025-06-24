import { ref, onMounted, onUnmounted } from 'vue';

export function IsMobile() {
  const isMobile = ref(false);

  const check = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  onMounted(() => {
    check();
    window.addEventListener('resize', check);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', check);
  });

  return isMobile;
}