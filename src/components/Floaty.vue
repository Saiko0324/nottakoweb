<template>
    <div ref="container" class="floaty-container">
        <div
        ref="box"
        class="floaty-box"
        :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
        >
        <slot />
    </div>
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
const container = ref(null)

let animationFrameId

const update = () => {
    const containerEl = container.value
    const boxEl = box.value
    
    if (!containerEl || !boxEl) return
    
    const containerRect = containerEl.getBoundingClientRect()
    const boxRect = boxEl.getBoundingClientRect()
    
    position.value.x += velocity.value.x
    position.value.y += velocity.value.y
    
    const maxX = containerRect.width - boxRect.width
    const maxY = containerRect.height - boxRect.height
    
    if (position.value.x <= 0 || position.value.x >= maxX) {
        velocity.value.x *= -1
        position.value.x = Math.max(0, Math.min(position.value.x, maxX))
    }
    
    if (position.value.y <= 0 || position.value.y >= maxY) {
        velocity.value.y *= -1
        position.value.y = Math.max(0, Math.min(position.value.y, maxY))
    }
    
    animationFrameId = requestAnimationFrame(update)
}

onMounted(() => {
    animationFrameId = requestAnimationFrame(update)
})

onUnmounted(() => {
    cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
.floaty-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.floaty-box {
    position: absolute;
    will-change: transform;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
