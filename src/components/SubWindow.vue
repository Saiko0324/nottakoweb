<template>
    <div class="subwindow" 
    v-if="showsub"
    :style="{ transform: `translate(${position.x}px, ${position.y}px)`, zIndex: subzIndex }">
        <div class="subwindow-header" ref="dragsubwindowheader" @pointerdown.stop.prevent="StartDrag">
            <span class="subwindow-title">{{ title }}</span>
            <button class="close-button" @pointerdown.once.stop.prevent="emit('update:showsub', false)">&#10005;</button>
        </div>
        <div class="subwindow-body content">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const emit = defineEmits(['update:showsub', 'bringsubToFront'])

const props = defineProps({
    title: { type: String, default: 'SubWindow' },
    showsub: { type: Boolean, default: false},
    subzIndex: { type: Number, default: 1 },
    subinitialX: { type: Number, default: 0 },
    subinitialY: { type: Number, default: 0 }
})

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

const position = ref({ x: props.subinitialX, y: props.subinitialY })
const dragsubwindowheader = ref(null);
let isDragging = false
let dragOffset = { x: 0, y: 0 }

let containerEl = null

const StartDrag = (event) => {
    emit('bringsubToFront');
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

    const windowEl = dragsubwindowheader.value;
    if (!windowEl || !containerEl) return;

    const containerRect = containerEl.getBoundingClientRect();
    const subwindowRect = windowEl.getBoundingClientRect();

    const maxX = containerRect.width - subwindowRect.width;
    const maxY = containerRect.height - subwindowRect.height;

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
    containerEl = document.querySelector('.subwindow-container');
    position.value = { x: props.subinitialX, y: props.subinitialY };
});

onUnmounted(() => {
    document.removeEventListener('pointermove', Drag);
    document.removeEventListener('pointerup', StopDrag);
})

let initialized = false;

watch(
() => [props.subinitialX, props.subinitialY, props.showsub],
([newX, newY, isVisible]) => {
    if (isVisible && !initialized) {
        position.value = { x: newX, y: newY };
        initialized = true;
    }
}, { immediate: true }
);

</script>

<style scoped>
.subwindow {
    position: absolute;
    width: 25rem;
    height: 20rem;
    background: white;
    border: 0.25rem solid #958dfa;
    border-radius: 0.5rem;
    box-shadow: 0.3rem 0.3rem#cccccc;
    z-index: 10;
}

.subwindow-header {
    position: relative;
    height: 2.5rem;
    color: white;
    background-color: #7F78E2;
    margin: -0.2rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    font-weight: bold;
    touch-action: none;
    box-sizing: border-box;
}

.subwindow-title {
    position: absolute;
    font-size: 1.1rem;
    top: 50%;
    left: 0.7rem;
    transform: translateY(-50%);
}


.close-button {
    position: absolute;
    font-size: 1.2rem;
    top: 50%;
    right: 0.35rem;
    transform: translateY(-50%);
    width: 1.8rem;
    height: 1.8rem;
}

.close-button:hover {
    background-color: #ffdc17;
    border-radius: 0.2rem;
    transition: background-color 0.2s ease;
}

.subwindow-body {
    margin: 0.5rem 0;
    padding: 0 0.5rem;
    height: calc(100% - 2.7rem);
    overflow: auto;
}
</style>
