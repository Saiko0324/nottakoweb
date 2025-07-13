<template>
    <ScrollingBanner />
    <div class="content-container">
        <div class="navigations" v-if="!MobileDevice">
            <div class="choice home"
            :style="{ zIndex: getZIndex(0) }"
            @click="selectedIndex = 0">
                <svg viewBox="0 0 200 100" preserveAspectRatio="none" width="100%" height="100%">
                    <polygon
                    points="0,0 160,0 200,100 0,100"
                    :fill="getFillColor(0)"/>
                    <text x="80" y="50" text-anchor="middle" dominant-baseline="middle"
                    class="label sub-title">
                    HOME
                    </text>
                </svg>
            </div>
            <div class="choice menu"
            :style="{ zIndex: getZIndex(1) }"
            @click="selectedIndex = 1">
                <svg viewBox="0 0 200 100" preserveAspectRatio="none" width="100%" height="100%">
                    <polygon
                    points="40,0 160,0 200,100 0,100"
                    :fill="getFillColor(1)"/>
                    <text x="100" y="50" text-anchor="middle" dominant-baseline="middle"
                    class="label sub-title">
                    MENU
                    </text>
                </svg>
            </div>
            <div class="choice setting"
            :style="{ zIndex: getZIndex(2) }"
            @click="selectedIndex = 2">
                <svg viewBox="0 0 200 100" preserveAspectRatio="none" width="100%" height="100%">
                    <polygon
                    points="40,0 160,0 200,100 0,100"
                    :fill="getFillColor(2)"/>
                    <text x="100" y="50" text-anchor="middle" dominant-baseline="middle"
                    class="label sub-title">
                    SETTING
                    </text>
                </svg>
            </div>
        </div>
        <div
        style="position: relative; z-index: 2;"
        :style="{ display: (MobileDevice || selectedIndex === 0) ? 'block' : 'none' }">
            <Background :img1Count="4" :img2Count="4" :img3Count="4" />
        </div>
        <div
        style="position: relative; z-index: 2;"
        :style="{ display: (MobileDevice || selectedIndex === 1) ? 'block' : 'none' }">
            <MainMenu />
        </div>
        <div
        style="position: relative; z-index: 2;"
        :style="{ display: (!MobileDevice && selectedIndex === 2) ? 'block' : 'none' }">
            <Setting />
        </div>
    </div>
</template>

<script setup>
import ScrollingBanner from '@/components/ScrollingBanner.vue';
import Background from '@/components/Background.vue';
import MainMenu from '@/components/MainMenu.vue';
import Setting from '@/components/Setting.vue';

import { IsMobile } from '@/utils/IsMobile.js';
const MobileDevice = IsMobile();

import { ref } from 'vue';

const selectedIndex = ref(0);
const colors = ['#f3f0ff', '#e0d0ff', '#958dfa', '#7F78E2'];
const getFillColor = (index) => {
    const dist = Math.abs(selectedIndex.value - index);
    return colors[dist] || '#dddddd';
};

const getZIndex = (index) => {
    const baseZ = 5;
    const dist = Math.abs(selectedIndex.value - index);
    return baseZ - dist;
};
</script>

<style>
.content-container {
    position: fixed;
    left: 0;
    top: calc(var(--vh, 1vh) * 10);
    height: calc(var(--vh, 1vh) * 90);
    width: 100%;
    background: #f3f0ff;
}

.navigations {
    position: relative;
    top: 0;
    left: 0;
    height: calc(var(--vh, 1vh) * 6);
    width: 100%;
    background: #ffe13a;
    z-index: 0;
}

.choice {
    position: absolute;
    height: 100%;
    width: 12rem;
    cursor: pointer;
    user-select: none;
    transform: translateY(0.6px);
}

.menu {
    left: 10rem;
}

.setting {
    left: 20rem;
}

.label {
    fill: black;
    font-size: 2.2rem;
    font-weight: bold;
    pointer-events: none;
    transition: transform 0.15s ease, fill 0.15s ease, text-shadow 0.15s ease;
    transform-origin: center;
}

.choice:hover .label {
    fill: #ffe13a;
    text-shadow: 0.2rem 0.2rem 0 #000;
    transform: scale(1.1) translateY(-0.2rem);
}

</style>
