<template>
    <transition name="slide-up">
        <div
        v-if="show"
        class="mobile-window-container"
        >
        <div class="mobile-window-header">
            <span class="mobile-window-title sub-title-bold">{{ title }}</span>
            <img v-if="img" :src="img" alt="header-image" class="header-img" :style="{ transform: `translateY(${imgYOffset})` }"/>
            <button class="close-button" @pointerdown.once.stop.prevent="emit('update:show', false)">▼</button>
        </div>
        <div class="mobile-window-body content">
            <slot />
        </div>
    </div>
</transition>
</template>

<script setup>
const emit = defineEmits(['update:show']);

const props = defineProps({
    title: { type: String, default: 'Mobile Window' },
    img: { type: String, default: '@/assets/img/Information/About_Tako.webp' },
    imgYOffset: { type: String, default: '-45%' },
    show: {type: Boolean, default: false, required: true},
    showing: { type: Boolean, default: false },
});

</script>

<style scoped>
.mobile-window-container {
    position: absolute;
    left: 0;
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
}

.mobile-window-header {
    position: relative;
    height: 3.5rem;
    color: white;
    background: #958dfa;
}

.mobile-window-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 0.5rem;
    font-size: 2.5rem;
    display: inline-block;
}

.header-img {
    position: absolute;
    top: 50%;
    left: 0;
    height: 100%;
    width: auto;
}


.close-button {
    position: absolute;
    top: 0;
    right: 1rem;
    height: 100%;
    font-size: 1rem;
    color: #ffdc17;
    z-index: 1;
}

.mobile-window-body {
    height: calc(100% - 3.5rem);
    background-color: white;
    /* border: 2px solid #2d374875; */
    overflow: hidden;
    box-sizing: border-box;
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
}
</style>
