<template>
    <div class="dragwindow" ref="dragwindow" v-if="show" :style="`transform: translate(${position.x}px, ${position.y}px); z-index: ${zIndex};`" @mousedown.stop @mousedown.prevent="bringToFront">
        <div class="window-header content" @mousedown.prevent="StartDrag">
            <span class="content font-bold">{{ title }}</span>
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
    height: 4vh;
    background-color: #2d3748;
    color: white;
    padding: 0.5rem 1rem;
    display: flex;
    /* justify-content: flex-end; */
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}

/* .title {
position: absolute;
left: 50%;
transform: translateX(-50%);
font-weight: bold;
pointer-events: none;
font-size: 3vh;
} */

.close-button {
    margin-left: 0.5rem;
    color: white;
    transition: color 0.2s ease;
}

.close-button:hover {
    color: #f56565;
    /* Tailwind's text-red-400 */
}

.window-body {
    background-color: white;
    color: black;
    padding: 1rem;
    /* p-4 */
    border-bottom-left-radius: 0.5rem;
    /* rounded-b-lg = 0.5rem bottom corners */
    border-bottom-right-radius: 0.5rem;
    border-left: 2px solid #2d374875;
    /* add this line */
    border-bottom: 2px solid #2d374875;
    /* add this line */
    border-right: 2px solid #2d374875;
    /* add this line */
}

.dragwindow {
    position: fixed;
    width: 600px;
    overflow: hidden;
}
</style>