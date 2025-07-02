<template>
    <div class="dragwindow" v-if="show"
    :style="[windowSize, { transform: `translate(${position.x}px, ${position.y}px)`, zIndex }]">
        <div class="window-header" ref="dragwindowheader" @pointerdown.stop.prevent="StartDrag">
            <span class="window-title sub-title-bold">{{ title }} 
                <img v-if="img" :src="img" alt="header-image" class="header-img" :style="{ transform: `translateY(${imgYOffset})` }"/>
            </span>
            <button class="close-button" @pointerdown.once.stop.prevent="emit('update:show', false)">&#10005;</button>
        </div>
        <div class="window-body content">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const emit = defineEmits(['update:show', 'bringToFront']);

const props = defineProps({
    title: { type: String, default: 'Window' },
    img: { type: String, default: '@/assets/img/Information/About_Tako.webp' },
    imgYOffset: { type: String, default: '-45%' },
    show: { type: Boolean, default: false, required: true },
    zIndex: { type: Number, default: 1 },
    initialX: { type: Number, default: 100 },
    initialY: { type: Number, default: 100 },
    x: { Number, default: -1},
    y: { Number, default: -1},
    windowSize: { type: Object, default: () => ({}) },
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
    emit('bringToFront');
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
    const maxY = window.innerHeight - windowRect.height;

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
    position: absolute;
    width: min(50rem, 100vw);
    height: min(42rem, calc(var(--vh, 1vh) * 90));
    border: 0.35rem solid #958dfa;
    border-radius: 0.5rem;
    box-shadow: 0.4rem 0.4rem#cccccc;
}

.window-header {
    position: relative;
    height: 3.5rem;
    color: white;
    background-color: #958dfa;
    margin: -0.2rem;
    border-top-left-radius: 0.8rem;
    touch-action: none;
    box-sizing: border-box;
}

.window-title {
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
    left: 100%;
    height: 100%;
    width: auto;
}

.close-button {
    position: absolute;
    top: -1.5rem;
    right: -1.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    cursor: pointer;
    font-size: 1.7rem;
    font-weight: 900;
    background-color: #ffdc17;
    transition: background-color 0.2s ease;
    z-index: 1;
}

.window-body {
    height: calc(100% - 3.1rem);
    background-color: white;
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    overflow: hidden;
    box-sizing: border-box;
}

</style>

@media (max-width: 768px) {
  .intro-main-container {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }

  .icon {
    width: 100px;
    height: 100px;
  }

  .intro-main {
    flex-direction: column;
    font-size: 2rem;
    gap: 0.5rem;
    text-align: center;
    padding: 0;
  }

  .intro-main::before {
    content: none;
  }

  .roles-container {
    padding: 0 1rem 1.5rem 1rem;
  }

  .intro-main-text {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
    font-size: 1.1rem;
  }

  .column {
    align-items: center;
    padding: 0;
    border: none;
  }

  .column + .column {
    padding-top: 1rem;
    border-top: 1px solid #ffdc17;
  }

  .intro-sub-container {
    padding: 0 1rem 2rem 1rem;
  }

  .intro-sub-title {
    font-size: 1.3rem;
    text-align: center;
  }

  .intro-sub-text {
    font-size: 1rem;
    text-align: center;
    padding-left: 0;
    margin-top: 0.5rem;
  }

  .note {
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }

  .fun-facts-list {
    padding-left: 1.2rem;
    text-align: left;
  }

  .fun-facts-list li {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  .scroll-cover {
    height: 1rem;
  }
}