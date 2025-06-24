<template>
    <div class="dragwindow" v-if="show" :style="`transform: translate(${position.x}px, ${position.y}px); z-index: ${zIndex};`" @pointerdow.stop.prevent="bringToFront">
        <div class="window-header" ref="dragwindowheader" @pointerdown.stop.prevent="StartDrag">
            <span class="window-title content">{{ title }}</span>
            <button class="close-button" @pointerdown.once.stop.prevent="emit('update:show', false)">&#10005;</button>
        </div>
        <div class="window-body content">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const emit = defineEmits(['update:show']);

const props = defineProps({
    title: { type: String, default: 'Window' },
    show: { type: Boolean, default: false, required: true },
    zIndex: { type: Number, default: 1 },
    initialX: { type: Number, default: 100 },
    initialY: { type: Number, default: 100 },
    x: { Number, default: -1},
    y: { Number, default: -1},
});

const getEventPosition = (event) => {
    if (event.touches && event.touches.length > 0) {
        return {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        }
    }
    return {
        x: event.clientX,
        y: event.clientY
    }
}

const position = ref({ x: 0, y: 0 })
const dragwindowheader = ref(null);
let isDragging = false;
let dragOffset = { x: 0, y: 0 };

const StartDrag = (event) => {
    isDragging = true;
    const pos = getEventPosition(event);
    dragOffset.x = pos.x - position.value.x;
    dragOffset.y = pos.y - position.value.y;

    document.addEventListener('pointermove', Drag);
    document.addEventListener('pointerup', StopDrag);
};

const Drag = (event) => {
    if (!isDragging) return;

    if (event.cancelable) event.preventDefault();

    const pos = getEventPosition(event);
    let newX = pos.x - dragOffset.x;
    let newY = pos.y - dragOffset.y;

    const windowEl = dragwindowheader.value;
    if (!windowEl) return;

    const windowRect = windowEl.getBoundingClientRect();
    const maxX = window.innerWidth - windowRect.width;
    const maxY = window.innerHeight * 0.9 - windowRect.height;

    newX = Math.min(Math.max(newX, 0), maxX);
    newY = Math.min(Math.max(newY, 0), maxY);

    position.value = { x: newX, y: newY };
};
const StopDrag = () => {
    isDragging = false;
    document.removeEventListener('pointermove', Drag);
    document.removeEventListener('pointerup', StopDrag);
};

onMounted(() => {
    position.value = { x: props.initialX, y: props.initialY };
});

onUnmounted(() => {
    document.removeEventListener('pointermove', Drag);
    document.removeEventListener('pointerup', StopDrag);
})

let initialized = false;

watch(
() => [props.initialX, props.initialY, props.show],
([newX, newY, isVisible]) => {
    if (isVisible && !initialized) {
        position.value = { x: newX, y: newY };
        initialized = true;
    }
}, { immediate: true }
);
</script>

<style scoped>
.dragwindow {
    position: fixed;
    width: min(53rem, 100vw);
    height: min(38rem, 90vh);
}

.window-header {
    position: relative;
    height: 4.5vh;
    background-color: #2d3748;
    display: flex;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    color: white;
    font-weight: bold;
    touch-action: none
}

.window-title {
    position: absolute;
    margin-left: 1rem;
    font-size: 1.2rem;
}

.window-title:hover {
    scale: 1.1;
    color: hwb(51 17% 7%);
    text-shadow: 2px 2px 0 #000;
    transition: transform 0.15s ease;
    cursor: default;
}

.close-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 100%;
    background-color: transparent;
    border-top-right-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.2s ease;
    z-index: 2;
}

.close-button:hover {
    background-color: hwb(0 20% 1%);
}

.window-body {
    height: calc(100% - 4vh);
    background-color: white;
    border: 2px solid #2d374875;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    overflow: hidden;
}

</style>