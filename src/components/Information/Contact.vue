<template>
    <div class="contact-container">
        <div class="intro-main-text">
            The easiest way to contact me is through email for now
        </div>
        <img
        :src="KDTD"
        alt="contact-image"
        class="contact-image"
        @click="playRandomWAH"/>
        <div class="contact-info">
            <div class="email-info">
                Email me at
                <button
                class="email-copy-button emphasis"
                :class="{ copied }"
                @click="copyEmail">
                dicksontio02@gmail.com
                <img 
                :src="Star"
                alt="Star"
                class="star"/>
            </button>
        </div>
        <div>or tap the button below</div>
        <a class="email-button" href="mailto:dicksontio02@gmail.com"><span class="email-text">Email Me</span></a>
    </div>
</div>
</template>

<script setup>
import KDTD from '@/assets/img/Background/KDTD.webp'
import Star from '@/assets/img/Information/Star.webp'
import WAH1 from '@/assets/audio/ina-not-tako(reduced).mp3'
import WAH2 from '@/assets/audio/ina-wah_echo.mp3'
import WAH3 from '@/assets/audio/ina-wah-1.mp3'
import WAH4 from '@/assets/audio/ina-wah-2.mp3'
import WAH5 from '@/assets/audio/ina-wah-question.mp3'
import { ref } from 'vue'

const email = 'dicksontio02@gmail.com'
const copied = ref(false)

const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(email)
        copied.value = true
        setTimeout(() => copied.value = false, 10000)
    } catch (err) {
        console.error('Failed to copy email: ', err)
    }
}

const WAHs = [WAH1, WAH2, WAH3, WAH4, WAH5]
let currentAudio = null

const playRandomWAH = () => {
    const randomIndex = Math.floor(Math.random() * WAHs.length)
    
    if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
    }
    
    currentAudio = new Audio(WAHs[randomIndex])
    currentAudio.play().catch(e => console.error('Sound play error:', e))
}

</script>


<style scoped>
.contact-container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    margin: 1rem;
    padding: 1rem;
    gap: 0.5rem;
}

.intro-main-text {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin: 0.5rem 0;
    padding: 0;
    min-height: 2rem;
}

.contact-image {
    height: 100%;
    border-radius: 0.5rem;
    max-height: 150px;
    cursor: pointer;
    user-select: none;
}

.emphasis {
    position: relative;
    font-weight: 600;
    padding: 0 0.3rem;
    z-index: 0;
}

.emphasis::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.1rem;
    width: 100%;
    height: 0.3rem;
    background: #ffdc17;
    opacity: 0.8;
    z-index: -1;
    transition: all 0.3s ease;
}

.emphasis:hover::before {
    height: 1.1rem;
}

.contact-info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.star {
    position: absolute;
    bottom: 0;
    right: -0.5rem;
    width: 3rem;
    z-index: -1;
    opacity: 0;
}

.email-copy-button:hover .star {
    opacity: 1;
}

.email-copy-button {
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    padding: 0;
}

.email-copy-button:hover::after {
    content: 'copy?';
    position: absolute;
    white-space: nowrap;
    font-size: 1rem;
    color: #958dfa;
    margin-left: 0.3rem;
}

.email-copy-button.copied:hover::after {
    content: 'copied!';
}

.email-button {
    margin-top: 0.5rem;
    padding: 0.75rem 1.5rem;
    background-color: #958dfa;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.15s ease;
}

.email-button:hover {
    background-color: #7F78E2;
}

.email-button:hover .email-text::after {
    content: '!!!';
    opacity: 1;
    margin-left: 0.25rem;
}

@media (max-width: 768px) {
    .contact-container {
        gap: 2rem;
        padding: 2rem;
    }
    
    .intro-main-text {
        font-size: 1.1rem;
    }
    
    .email-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .email-button {
        width: 100%;
        text-align: center;
    }
}
</style>