<template>
    <div class="project-content-wrapper">
        <div class="project-header">
            <div class="project-title">
                Closest I'll get to being a writer
            </div>
        </div>
        
        <div class="project-description">
            Developed the <span class="emphasis">emotional arc</span>, themes, and tone to support a visual concept directed by a friend of mine.
            <br/>
            The script focuses on the silent conflict between <span class="emphasis">pain and persistence</span>,
            <br/>
            alongside the delicate balance between <span class="emphasis">isolation and hope</span>.
            <br/>
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
