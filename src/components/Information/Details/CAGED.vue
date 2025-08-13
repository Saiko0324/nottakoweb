<template>
    <div class="project-content-wrapper">
        <div class="project-header">
            <img
            :src="Slime"
            alt="Slime from CAGED game"
            class="project-image"
            />
            <div class="project-title">
                Made from the ground up with a team of 6
            </div>
        </div>
        
        <div class="project-description">
            I mainly handled the <span class="emphasis">design</span> and <span class="emphasis">implementation</span> of core mechanics like player/enemy movement and attacks,
            <br/>
            helped <span class="emphasis">balance the game</span> after playtesting,
            <br/>
            and <span class="emphasis">managed our timeline</span> while coordinating the team's tasks.
            <br/>
            Also made an ad video to promote our game.
        </div>
        
        <div class="project-video">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/14E8PYnPyL4"
            title="CAGED advertisement Video" frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        <!-- <div class="project-credits">
            <strong class="block">Credits:</strong>
            <a href="https://github.com/teammate1" target="_blank" rel="noopener noreferrer">Teammate 1</a>,  
            <a href="https://github.com/teammate2" target="_blank" rel="noopener noreferrer">Teammate 2</a>,  
            <a href="https://github.com/teammate3" target="_blank" rel="noopener noreferrer">Teammate 3</a>
        </div> -->
    </div>
</template>

<script setup>
import Slime from '@/assets/img/Information/Works/Slime.webp'
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
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
}

.project-image {
    width: 100px;
    height: auto;
    border-radius: 0.5rem;
    flex-shrink: 0;
}

.project-title {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.4;
}

.project-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-top: -0.5rem;
}

.project-video {
    padding: 0 1rem;
}

.project-video iframe {
    border-radius: 0.5rem;
    width: 100%;
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
