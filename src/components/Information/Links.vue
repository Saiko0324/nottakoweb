<template>
    <div class="links-container">
        <div class="links-logo">
            <a href="https://github.com/Saiko0324" target="_blank" rel="noopener noreferrer">
                <img :src="GitHub" alt="GitHub Logo" class="logo" />
            </a>
            <a href="https://www.linkedin.com/in/dickson-tio/" target="_blank" rel="noopener noreferrer">
                <img :src="LinkedIn" alt="LinkedIn Logo" class="logo" />
            </a>
        </div>
        <div class="intro-main-text">
            I don't have much, it's just these two for now.
        </div>
    </div>
</template>

<script setup>
import GitHub from '@/assets/img/Information/Links/GitHub_logo.webp'
import LinkedIn from '@/assets/img/Information/Links/LinkedIn-Logo.wine.png'
</script>

<style scoped>
.links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    user-select: none;
}

.links-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.logo {
    height: 7rem;
    width: auto;
    object-fit: contain;
    transition: transform 0.2s ease;
    cursor: pointer;
}

.logo:hover {
    transform: scale(1.1);
}

.intro-main-text {
    font-size: 1.2rem;
    font-weight: 600;
    border: 1px solid #958dfa;
    color: #958dfa;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    align-items: center;
    text-align: center;
}

@media (max-width: 768px) {
    .links-logo {
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .logo {
        height: 8rem;
    }
    
    .intro-main-text {
        font-size: 1.1rem;
    }
}
</style>
