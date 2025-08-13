<template>
    <!-- <div class="hidden-scroll-banner-message title"> WAH </div> -->
    <div class="scroll-banner" :style="{ height: bannerHeight }">
        <div
        v-for="item in activeImages"
        :key="item.id"
        class="scrolling-image"
        @animationend="removeImage(item.id)"
        >
        <div class="image-wrapper">
            <img
            :src="item.src"
            alt="Scrolling takodachi"
            loading="eager"
            fetchpriority="low"
            :style="{ top: `calc(var(--vh) * ${item.heightoffset})`, position: 'relative' }"
            />
        </div>
    </div>
</div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { IsMobile } from '@/utils/CheckMobile.js';
// import SpriteAnimator from '@/components/SpriteAnimator.vue';
import tako from '@/assets/img/ScrollingBanner/tako-spin-lineart.webp'
// import img1 from '@/assets/img/ScrollingBanner/takodachi-spin-compressed-100.webp';
// import img2 from '@/assets/img/ScrollingBanner/takodachi-spin.webp'

const images = [{
    type: 'webp',
    src: tako,
    heightoffset: 0.8,
},
// {
//     type: 'webp',
//     src: img1,
//     heightoffset: 0.8,
// },
// {
// 	type: 'sprite',
// 	src: img2,
// 	frameCount: 18,
// 	frameWidth: 1200,
// 	frameHeight: 1200,
// 	duration: 1.5,
// 	heightoffset: 10,
// },
// {
// 	type: 'sprite',
// 	src: img3,
// 	frameCount: 15,
// 	frameWidth: 200,
// 	frameHeight: 195,
// 	duration: 0.5,
// 	heightoffset: 0,
// },
// {
// 	type: 'sprite',
// 	src: img4,
// 	frameCount: 16,
// 	frameWidth: 1200,
// 	frameHeight: 1200,
// 	duration: 1,
// 	heightoffset: 15,
// },
];

const activeImages = ref([]);
let nextId = 0;
let timerId = null;
// let idx = 0;

// const WrapperHeightInPx = 10 * (window.innerHeight / 100);

function spawnImage() {
    // const img = images[idx];
    // idx = (idx + 1) % images.length;
    // const img = images[Math.floor(Math.random() * images.length)];
    const img = images[0];
    activeImages.value.push({
        id: nextId++,
        ...img
    });
    
    // const delay = 1000 + Math.random() * 3000;
    const delay = 2500;
    timerId = setTimeout(spawnImage, delay);
}

function removeImage(id) {
    activeImages.value = activeImages.value.filter(img => img.id !== id);
}

const bannerHeight = ref('');
const MobileDevice = IsMobile();
function updateBannerHeight() {
    bannerHeight.value = MobileDevice.value? 'calc(var(--vh, 1vh) * 10)' : 'calc(var(--vh, 1vh) * 15)';
}

onMounted(() => {
    updateBannerHeight();
    window.addEventListener('resize', updateBannerHeight);
    setTimeout(() => {
        spawnImage();
    }, 2000);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateBannerHeight);
    clearTimeout(timerId);
});

</script>

<style scoped>
.scroll-banner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: calc(var(--vh, 1vh) * 10);
    overflow: visible;
    background-color: #ffe13a;
    pointer-events: none;
    user-select: none;
    /* background-color: hwb(246 71% 0%); */
    /* background-color: hwb(263 76% 0%); */
    /* display: none; */
}

.scroll-banner > * {
    pointer-events: auto;
}

.image-wrapper {
    height: calc(var(--vh, 1vh) * 10);
    width: calc(var(--vh, 1vh) * 10);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.image-wrapper img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.scrolling-image {
    position: absolute;
    animation: scroll-left linear forwards;
    animation-duration: 10s;
    will-change: right;
}

@keyframes scroll-left {
    0% {
        transform: translateX(100vw);
    }
    100% {
        transform: translateX(-10rem);
    }
}

.hidden-scroll-banner-message {
    position: fixed;
    top: 0;
    padding: 0;
    margin: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: calc(var(--vh, 1vh) * 10);
    z-index: 0;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
    display: flex;
    align-items: center;
    height: calc(var(--vh, 1vh) * 10);
    overflow: hidden;
}
</style>
