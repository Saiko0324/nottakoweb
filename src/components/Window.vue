<template>
    <div class="dragwindow" ref="dragwindow" v-if="show" :style="`transform: translate(${position.x}px, ${position.y}px); z-index: ${zIndex};`" @mousedown.stop @mousedown.prevent="bringToFront">
        <div class="window-header content" @mousedown.prevent="StartDrag">
            <span class="window-title content font-bold text-lg">{{ title }}</span>
            <button class="close-button TrajanPro" @click="emit('update:show', false)">X</button>
        </div>
        <div class="window-body content">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

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

const position = ref({ x: 0, y: 0 })
const dragwindow = ref(null);
let isDragging = false;
let dragOffset = { x: 0, y: 0 };

const StartDrag = (event) => {
    isDragging = true;
    dragOffset.x = event.clientX - position.value.x
    dragOffset.y = event.clientY - position.value.y
    
    document.addEventListener('mousemove', Drag);
    document.addEventListener('mouseup', StopDrag);
};

const Drag = (event) => {
    if (!isDragging) return
    
    let newX = event.clientX - dragOffset.x
    let newY = event.clientY - dragOffset.y
    
    const windowEl = dragwindow.value
    if (!windowEl) return
    
    const windowRect = windowEl.getBoundingClientRect()
    const maxX = window.innerWidth - windowRect.width
    const maxY = window.innerHeight * 0.9 - windowRect.height
    
    newX = Math.min(Math.max(newX, 0), maxX)
    newY = Math.min(Math.max(newY, 0), maxY)
    
    position.value = { x: newX, y: newY }
};

const StopDrag = () => {
    isDragging = false;
    document.removeEventListener('mousemove', Drag);
    document.removeEventListener('mouseup', StopDrag);
};

onMounted(() => {
    position.value = { x: props.initialX, y: props.initialY };
});

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
.window-header {
    position: relative;
    height: 4vh;
    background-color: #2d3748;
    color: white;
    padding: 0 12px 0 16px;
    /* padding: 0.7rem; */
    /* padding-left: 1rem; */
    display: flex;
    /* justify-content: flex-end; */
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}

.window-title:hover {
    color: hwb(51 17% 7%);
    text-shadow: 2px 2px 0 #000;
    transition: transform 0.15s ease;
    cursor: default;
}

.close-button {
    /* margin-left: 0.5rem; */
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 100%;
    background-color: transparent;
    border-top-right-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.2s ease;
    z-index: 2;
}

.close-button:hover {
    background-color: hwb(0 20% 1%);
}

.window-body {
    background-color: white;
    color: black;
    padding: 1rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-left: 2px solid #2d374875;
    border-bottom: 2px solid #2d374875;
    border-right: 2px solid #2d374875;
}

.dragwindow {
    position: fixed;
    width: 850px;
    overflow: hidden;
}
</style>