<template>
    <div class="project-content-wrapper">
        <div class="project-header">
            <div class="project-title">
                Built from late nights, caffeine, and a lot of curiosity.
            </div>
        </div>
        
        <div class="project-description">
            Built everything <span class="emphasis">from scratch</span> with a focus on <span class="emphasis">responsiveness interaction</span> and <span class="emphasis">modular design</span>.
            <br/>
            Visuals were designed by <span class="emphasis artist">Pjun</span>,
            <br/>
            and I coded it all out by hand cause I like suffering.
            <br/>
            It's <span class="emphasis">static</span> for now, but I'm planning to hook it up with <span class="emphasis">backend</span> in the future.
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

.artist {
    color: #7F78E2;
    font-size: 1.2rem;
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
