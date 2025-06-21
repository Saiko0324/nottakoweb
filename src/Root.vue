<script setup>
import JustClick from './components/JustClick.vue'
import SpriteAnimator from './components/SpriteAnimator.vue';
import ScrollingBanner from './components/ScrollingBanner.vue';
import Background from './components/Background.vue';

</script>

<template>
    <ScrollingBanner />
    <Background :img1Count="3" :img2Count="3" :img3Count="3" style="z-index: -1;"/>
</template>

<style>

</style>
