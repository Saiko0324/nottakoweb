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
    <!-- <div style="font-size: larger;">
        <p class="title" style="margin-top: 10vh;">A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z</p>
        <p class="content" style=" margin-top: 10vh;">A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z</p>
        <p style="font-family: CP; margin-top: 10vh;">A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z</p>
        <p style="font-family: hkr; margin-top: 10vh;">A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z</p>
        <p style="font-family: ur; margin-top: 10vh;">A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z</p>
        <p style="font-family: alegreya; margin-top: 10vh;">A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z</p>
    </div> -->
    <MainMenu />

</template>

<style>

</style>
