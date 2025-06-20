<template>
    <div class="sprite-wrapper" :style="{
                      width: wrapperWidth + 'px',
                      height: wrapperHeight + 'px',
                      overflow: 'hidden',
                    }">
        <div class="sprite" :style="{
                        width: wrapperWidth * frameCount + 'px',
                        height: wrapperHeight + 'px',
                        backgroundImage: `url(${spritesheet})`,
                        backgroundSize: wrapperWidth * frameCount + 'px ' + wrapperHeight + 'px',
                        animationDuration: duration + 's',
                        '--frame-count': frameCount,
                        '--frame-width': wrapperWidth,
                      }"></div>
    </div>
</template>

<script setup>
const props = defineProps({
    spritesheet: {
        type: String,
        required: true,
    },
    frameCount: {
        type: Number,
        required: true,
    },
    frameWidth: {
        type: Number,
        required: true,
    },
    frameHeight: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        default: 1,
    },
    wrapperWidth: {
        type: Number,
        required: true,
    },
    wrapperHeight: {
        type: Number,
        required: true,
    },
});

</script>

<style scoped>
.sprite {
    background-repeat: no-repeat;
    animation-name: play-sprite;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-timing-function: steps(var(--frame-count));
}

@keyframes play-sprite {
    from {
        background-position-x: 0;
    }
    to {
        background-position-x: calc(var(--frame-width) * -1px * var(--frame-count));
    }
}
</style>