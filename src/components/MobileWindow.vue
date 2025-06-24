<template>
    <transition name="slide-up">
        <div
        v-if="show"
        class="mobile-window-container"
        >
        <div class="mobile-window-header">
            <span class="mobile-window-title content">{{ title }}</span>
            <button class="close-button" @pointerdown.once.stop.prevent="emit('update:show', false)">&#10005;</button>
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
    show: {type: Boolean, default: false, required: true},
});

</script>

<style scoped>
.mobile-window-container {
    position: fixed;
    width: 100%;
    height: 90vh;
}

.mobile-window-header {
    position: relative;
    height: 3rem;
    background: #2d3748;
    display: flex;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    color: white;
    font-weight: bold;
}

.mobile-window-title {
    position: absolute;
    margin-left: 1rem;
    font-size: 1.2rem;
}

.close-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 100%;
    border-top-right-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    z-index: 2;
}

.mobile-window-body {
    height: calc(100% - 3rem);
    background-color: white;
    border: 2px solid #2d374875;
    overflow: hidden;
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
