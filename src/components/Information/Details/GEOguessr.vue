<template>
    <div class="project-content-wrapper">
        <div class="project-header">
            <img
            :src="Logo"
            alt="Logo of Geoguesser"
            class="project-image"
            />
            <div class="project-title">
                Created a custom variation of
                <br/>
                GeoGuessr with a team of 6
            </div>
        </div>
        
        <div class="project-description">
            Extended an <span class="emphasis">open source</span> GeoGuessr clone by adding a <span class="emphasis">real-time AI bot</span> that competes against human players using Gemini's image analysis.
            <br/>
            I implemented the <span class="emphasis">API layer</span> that connects the bot's logic with game state,
            <br/>
            <span class="emphasis">built the interface</span> for adjusting bot count, handled real-time read/write of bot data to <span class="emphasis">Firebase</span>,
            <br/>
            and integrated bot guesses into the <span class="emphasis">frontend UI</span> and scoreboard.
        </div>
    </div>
</template>

<script setup>
import Logo from '@/assets/img/Information/Works/geoguessLogo.png'
</script>

<style scoped>
.project-content-wrapper {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5rem;
}

.project-image {
    width: 100%;
    height: auto;
    flex-shrink: 0;
}

.project-title {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.4;
}

.project-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-top: -0.5rem;
}

.emphasis {
    position: relative;
    font-weight: 600;
    padding: 0 0.3rem;
}

.emphasis::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.1rem;
    width: 100%;
    height: 0.3rem;
    background: #ffdc17;
    opacity: 0.5;
    z-index: -1;
}

.project-credits a {
    color: #958dfa;
    text-decoration: none;
    margin-right: 0.5rem;
}

.project-credits a:hover {
    text-decoration: underline;
}
</style>
