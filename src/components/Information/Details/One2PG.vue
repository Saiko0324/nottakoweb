<template>
    <div class="project-content-wrapper">
        <div class="project-header">
            <div class="project-title">
                Worked with a teammate to create a puzzle game
            </div>
        </div>
        
        <div class="project-description">
            We designed and built a <span class="emphasis">cooperative</span> two player <span class="emphasis">puzzle game</span> in <span class="emphasis">Jack</span> (Programming language),
            <br/>
            where players move through/as different colors on the same map, creating unconventional <span class="emphasis">perspective shifts</span>,
            <br/>
            making the most of a strict <span class="emphasis">black and white</span> palette and <span class="emphasis">tile based logic</span>.
            <br/>
            I focused on <span class="emphasis">game design</span>, visual elements, object graphics, and <span class="emphasis">level creation</span>.
        </div>
        <!-- <div class="project-credits">
            <strong class="block">Credits:</strong>
            <a href="https://github.com/teammate1" target="_blank" rel="noopener noreferrer">Teammate 1</a>,  
            <a href="https://github.com/teammate2" target="_blank" rel="noopener noreferrer">Teammate 2</a>,  
            <a href="https://github.com/teammate3" target="_blank" rel="noopener noreferrer">Teammate 3</a>
        </div> -->
    </div>
</template>

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
