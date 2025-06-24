<template>
    <div
    ref="box"
    class="floaty-box"
    :class="{ grabbing: isDragging }"
    :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
    @pointerdown.stop.prevent="StartDrag"
    >
    <slot />
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    initialX: { type: Number, default: 0 },
    initialY: { type: Number, default: 0 },
    velocityX: { type: Number, default: 2 },
    velocityY: { type: Number, default: 2 },
})

const position = ref({ x: props.initialX, y: props.initialY })
const velocity = ref({ x: props.velocityX, y: props.velocityY })

const box = ref(null)
let animationFrameId
let isDragging = false
let dragOffset = { x: 0, y: 0 }
const isHovered = ref(false)

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

const update = () => {
    if (isDragging || isHovered.value) {
        animationFrameId = requestAnimationFrame(update)
        return
    }
    
    const boxEl = box.value
    if (!boxEl) return
    
    const boxRect = boxEl.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    let newX = position.value.x + velocity.value.x
    let newY = position.value.y + velocity.value.y
    
    const maxX = viewportWidth - boxRect.width
    const maxY = viewportHeight * 0.9 - boxRect.height
    
    if (newX <= 0 || newX >= maxX) {
        velocity.value.x *= -1
        newX = Math.min(Math.max(newX, 0), maxX)
    }
    
    if (newY <= 0 || newY >= maxY) {
        velocity.value.y *= -1
        newY = Math.min(Math.max(newY, 0), maxY)
    }
    
    position.value = { x: newX, y: newY }
    
    animationFrameId = requestAnimationFrame(update)
}

const StartDrag = (event) => {
    isDragging = true
    const pos = getEventPosition(event)
    dragOffset.x = pos.x - position.value.x
    dragOffset.y = pos.y - position.value.y
    
    document.addEventListener('pointermove', Drag)
    document.addEventListener('pointerup', StopDrag)
}

const Drag = (event) => {
    if (!isDragging) return
    
    if (event.cancelable) event.preventDefault()
    
    const pos = getEventPosition(event)
    let newX = pos.x - dragOffset.x
    let newY = pos.y - dragOffset.y
    
    const boxEl = box.value
    if (!boxEl) return
    
    const boxRect = boxEl.getBoundingClientRect()
    const maxX = window.innerWidth - boxRect.width
    const maxY = window.innerHeight * 0.9 - boxRect.height
    
    newX = Math.min(Math.max(newX, 0), maxX)
    newY = Math.min(Math.max(newY, 0), maxY)
    
    position.value = { x: newX, y: newY }
}

const StopDrag = () => {
    isDragging = false
    document.removeEventListener('pointermove', Drag)
    document.removeEventListener('pointerup', StopDrag)
}

onMounted(() => {
    animationFrameId = requestAnimationFrame(update)
})

onUnmounted(() => {
    cancelAnimationFrame(animationFrameId)
    document.removeEventListener('pointermove', Drag)
    document.removeEventListener('pointerup', StopDrag)
})
</script>


<style scoped>
.floaty-box {
    position: fixed;
    will-change: transform;
    width: 100px;
    height: 100px;
    min-width: calc(var(--vh, 1vh) * 7);
    min-height: calc(var(--vh, 1vh) * 7);
    max-width: calc(var(--vh, 1vh) * 15);
    max-height: calc(var(--vh, 1vh) * 15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    z-index: 1;
    user-select: none;
    pointer-events: auto;
    touch-action: none;
}

.grabbing {
    cursor: grabbing;
    /* outline: 2px dashed #888;
    outline-offset: -3px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); */
}

</style>
