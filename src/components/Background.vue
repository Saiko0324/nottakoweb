<template>
    <div class="background-container" :style="{ top: ContainerTop, height: ContainerHeight }">
        <Floaty
        v-for="(image, index) in images"
        :key="index"
        :initialX="randomPositions[index].x"
        :initialY="randomPositions[index].y"
        :velocityX="randomVelocities[index].x"
        :velocityY="randomVelocities[index].y"
        >
            <img :src="image" class="floating-image" alt="floaty takodachi"/>
        </Floaty>
    </div>
</template>

<script setup>
import { ref, onMounted,  onUnmounted } from 'vue'
import Floaty from '@/components/Floaty.vue'
import { IsMobile } from '@/utils/IsMobile.js'

import img1 from '@/assets/img/Background/takodachi1.png'
import img2 from '@/assets/img/Background/takodachi2.png'
import img3 from '@/assets/img/Background/takodachi3.png'

const props = defineProps({
    img1Count: { type: Number, default: 1 },
    img2Count: { type: Number, default: 1 },
    img3Count: { type: Number, default: 1 },
})

const images = ref([
...Array(props.img1Count).fill(img1),
...Array(props.img2Count).fill(img2),
...Array(props.img3Count).fill(img3),
])

const getRandom = (min, max) => Math.random() * (max - min) + min

const getVelocity = () => {
    if (IsMobile()) {
        return (Math.random() < 0.5)? getRandom(-1, -0.1) || 1 : getRandom(0.1, 1)
    }
    else return (Math.random() < 0.5)? getRandom(-2.5, -0.1) || 1 : getRandom(0.1, 2.5)
}


const randomPositions = images.value.map(() => ({
    x: getRandom(0, window.innerWidth),
    y: getRandom(0, window.innerHeight * 0.9),
}))

const randomVelocities = images.value.map(() => ({
    x: getVelocity(),
    y: getVelocity(),
}))

const ContainerTop = ref('');
const ContainerHeight = ref('');
const MobileDevice = IsMobile();
function updateContainerSize() {
    ContainerTop.value = MobileDevice.value? 'calc(var(--vh, 1vh) * 10)' : 'calc(var(--vh, 1vh) * 16)';
    ContainerHeight.value = MobileDevice.value? 'calc(var(--vh, 1vh) * 90)' : 'calc(var(--vh, 1vh) * 84)';
}

onMounted(() => {
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateContainerSize);
});

</script>

<style scoped>
.background-container {
    position: fixed;
    width: 100%;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
}

.floating-image {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 30%;
    z-index: 0;
}

</style>
