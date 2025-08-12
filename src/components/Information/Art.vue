<template>
    <div class="art-container">
        <img
        :src="Background"
        alt="Background"
        class="art-background"/>
        <img
        :src="Info"
        alt="Info"
        class="info"/>
        <div class="links-container">
            <div class="logo-wrapper">
                <a href="https://www.instagram.com/peng_jyun/" target="_blank" rel="noopener noreferrer">
                    <img :src="Instagram" alt="instagram" class="logo instagram" />
                </a>
            </div>
            <div class="logo-wrapper">
                <a href="https://ping912194.myportfolio.com/?fbclid=PAZXh0bgNhZW0CMTEAAae5ULR2i9kVklCFz1IJwmjeo727JgkIaPcYbo70le3PrRMyt2OEDrCMk2hZvw_aem_L-7iG5AayVHFmV494MeMVA" target="_blank" rel="noopener noreferrer">
                    <img :src="Portfolio" alt="portfolio" class="logo portfolio" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Background from '@/assets/img/Information/Art/background2.webp'
import Info from '@/assets/img/Information/Art/text.webp'
import Instagram from '@/assets/img/Information/Art/instagram2.webp'
import Portfolio from '@/assets/img/Information/Art/portfolio2.webp'
</script>

<style scoped>
.art-container {
    position: relative;
    width: 100%;
    height: 100%;
    user-select: none;
}

.art-background {
    position: absolute;
    top: 0.2rem;
    width: 100%;
    height: 100%;
    object-position: center 0%;
    object-fit: cover;
    z-index: 0;
    pointer-events: none;
}

.info {
    position: absolute;
    width: 20rem;
    height: auto;
    top: 35%;
    left: 51%;
    transform: translate(-50%, -50%);
}

.links-container {
    position: absolute;
    width: 100%;
    top: 49%;
    left: 55%;
    display: flex;
    flex-direction: column;
}

/* .logo-wrapper {
position: relative;
display: inline-block;
z-index: 1;
}

.logo-wrapper::after {
content: "";
position: absolute;
top: 0.5rem;
left: 0.5rem;
width: 14.5%;
height: 45%;
background-color: #00ffff;
filter: brightness(50) saturate(200);
transition: transform 0.2s ease;
z-index: 1;
pointer-events: none;
opacity: 0;
}

.logo-wrapper:hover::after {
opacity: 1;
} */

.logo {
    position: relative;
    height: 3rem;
    width: auto;
    object-fit: contain;
    transition: transform 0.2s ease;
    cursor: pointer;
    z-index: 2;
}

.logo:hover {
    transform: scale(1.1);
    /* filter: brightness(0); */
}

@media (max-width: 768px) {
    .art-background {
        top: 0;
    }
    
}
</style>