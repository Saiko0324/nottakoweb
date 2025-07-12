<template>
    <div class="art-container">
        <img
        :src="Background"
        alt="Background"
        class="art-background"/>
        <div class="artist-name">
            <div class="sub-title emphasis">
                Peng Jyun
            </div>
        </div>
        <div class="intro-main-container">
            <div>Motion Designer</div>
            <div>Illustrator</div>
        </div>
        <div class="links-container">
            <a href="https://www.instagram.com/peng_jyun/" target="_blank" rel="noopener noreferrer">
                <img :src="Instagram" alt="instagram" class="logo" />
            </a>
            <a href="https://ping912194.myportfolio.com/?fbclid=PAZXh0bgNhZW0CMTEAAae5ULR2i9kVklCFz1IJwmjeo727JgkIaPcYbo70le3PrRMyt2OEDrCMk2hZvw_aem_L-7iG5AayVHFmV494MeMVA" target="_blank" rel="noopener noreferrer">
                <img :src="Portfolio" alt="portfolio" class="logo" />
            </a>
        </div>
    </div>
</template>

<script setup>
import Background from '@/assets/img/Information/Art/background.webp'
import Instagram from '@/assets/img/Information/Art/instagram.webp'
import Portfolio from '@/assets/img/Information/Art/portfolio.webp'
</script>

<style scoped>
.art-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
}

.art-background {
    position: absolute;
    top: 0.2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    opacity: 0.6;
}

.artist-name {
    position: absolute;
    font-size: 3rem;
    top: 25%;
    letter-spacing: 0.05rem;
}

.emphasis {
    position: relative;
    padding: 0 0.3rem;
    z-index: 0;
}

.emphasis::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 1.1rem;
    width: 100%;
    height: 0.7rem;
    background: #ffdc17;
    opacity: 0.8;
    z-index: -1;
}

.intro-main-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    gap: 0.5rem;
    font-size: 1.5rem;
}

.intro-main-container div:hover {
    padding: 0 0.5rem;
    background: white;
}

.links-container {
    position: absolute;
    display: flex;
    width: 100%;
    top: 63%;
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
}

.logo {
    height: 5rem;
    width: auto;
    object-fit: contain;
    transition: transform 0.2s ease;
    cursor: pointer;
}

.logo:hover {
    transform: scale(1.1);
}

@media (max-width: 768px) {
}
</style>