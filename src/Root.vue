<script setup>
import JustClick from './components/JustClick.vue'
import ScrollingBanner from './components/ScrollingBanner.vue';
import SpriteAnimator from './components/SpriteAnimator.vue';
import TakodachiSprite from '@/assets/img/takodachi-ina-sprite.png'

</script>

<template>
<ScrollingBanner />
<br>
<br>
<br>
<!-- <SpriteAnimator v-if="item.type === 'sprite'" :spritesheet="item.src" :frame-count="item.frameCount" :duration="item.duration" wrapper-width="10vh" wrapper-height="10vh" /> -->
				
<!-- <SpriteAnimator :spritesheet="TakodachiSprite" :frame-count="15" :frame-width="200" :frame-height="195" :duration="0.5" wrapper-width="100" wrapper-height="100"/> -->
<!-- <JustClick/> -->
</template>

<style>

</style>
