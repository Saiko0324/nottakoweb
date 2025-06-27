<template>
    <div class="links-container">
        <div class="scroll-cover"></div>
    </div>
</template>

<script setup>
import { IsMobile } from '../../utils/isMobile';

const MobileDevice = IsMobile();
</script>

<style scoped>
.links-container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    user-select: none;
}

.scroll-cover {
    position: absolute;
    left: 1rem;
    right: 1rem;
    bottom: 0;
    height: 1.5rem;
    background-color: white;
    pointer-events: none;
}

@media (max-width: 768px) {
    .intro-main-container {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 0;
    }

    .scroll-cover {
        height: 0.5rem;
    }
}
</style>