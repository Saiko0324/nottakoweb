<script setup>
import JustClick from './components/JustClick.vue'
import SpriteAnimator from './components/SpriteAnimator.vue';
import ScrollingBanner from './components/ScrollingBanner.vue';
import Background from './components/Background.vue';
import MainMenu from './components/MainMenu.vue';


</script>

<template>
    <Background :img1Count="3" :img2Count="3" :img3Count="3"/>
    <ScrollingBanner />
    <MainMenu />
    
</template>

<style>

</style>
