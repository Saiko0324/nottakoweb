<template>
    <div
    ref="box"
    class="floaty-box"
    :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
    @mousedown.stop.prevent="StartDrag"
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

const update = () => {
    if (isDragging) {
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
    dragOffset.x = event.clientX - position.value.x
    dragOffset.y = event.clientY - position.value.y
    
    document.addEventListener('mousemove', Drag)
    document.addEventListener('mouseup', StopDrag)
}

const Drag = (event) => {
    if (!isDragging) return
    
    let newX = event.clientX - dragOffset.x
    let newY = event.clientY - dragOffset.y
    
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
    document.removeEventListener('mousemove', Drag)
    document.removeEventListener('mouseup', StopDrag)
}

onMounted(() => {
    animationFrameId = requestAnimationFrame(update)
})

onUnmounted(() => {
    cancelAnimationFrame(animationFrameId)
    document.removeEventListener('mousemove', Drag)
    document.removeEventListener('mouseup', StopDrag)
})
</script>

<style scoped>
.floaty-box {
    position: fixed;
    will-change: transform;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    z-index: 1;
}
</style>
