<template>
    <div class="background-container">
        <Floaty
        v-for="(image, index) in images"
        :key="index"
        :initialX="randomPositions[index].x"
        :initialY="randomPositions[index].y"
        :velocityX="randomVelocities[index].x"
        :velocityY="randomVelocities[index].y"
        >
            <div class="image-wrapper">
                <img :src="image" class="floating-image" alt="floaty takodachi"/>
            </div>
        </Floaty>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Floaty from '@/components/Floaty.vue'

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
    return (Math.random() < 0.5)? getRandom(-2.5, -0.1) || 1 : getRandom(0.1, 2.5)
}


const randomPositions = images.value.map(() => ({
    x: getRandom(0, window.innerWidth),
    y: getRandom(0, window.innerHeight * 0.9),
}))

const randomVelocities = images.value.map(() => ({
    x: getVelocity(),
    y: getVelocity(),
}))

</script>

<style scoped>
.background-container {
    position: absolute;
    width: 100%;
    top: 10vh;
    left: 0;
    height: 90vh;
    overflow: hidden;
}

.image-wrapper {
    position: absolute;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.floating-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 30%;
}

</style>
