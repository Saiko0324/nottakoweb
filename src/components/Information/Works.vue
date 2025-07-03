<template>
    <div class="work-container">
        <div class="dev-skills-container">
            <div class="intro-sub-title">DEVELOPMENT SKILLS</div>
            <div class="intro-main-text" v-if="!MobileDevice">
                <div class="column">
                    <div class="dev-skill PL">Programming Languages</div>
                    <div class="tag-row">
                        <span class="tag">C</span>
                        <span class="tag">C++</span>
                        <span class="tag">C#</span>
                        <span class="tag">Python</span>
                        <span class="tag">JavaScript</span>
                        <span class="tag">HTML/CSS</span>
                    </div>
                </div>
                <div class="column">
                    <div class="dev-skill TnT">Technologies & Tools</div>
                    <div class="tag-row">
                        <span class="tag">Git</span>
                        <span class="tag">GitHub</span>
                        <span class="tag">Unity</span>
                        <span class="tag">Visual Studio Code</span>
                        <span class="tag">Vue.js</span>
                        <span class="tag">Vite</span>
                    </div>
                </div>
                <div class="column">
                    <div class="dev-skill Doms">Domains</div>
                    <div class="tag-row">
                        <span class="tag">Game Dev</span>
                        <span class="tag">Web Dev</span>
                        <span class="tag">Game Design</span>
                    </div>
                </div>
            </div>
            <div class="intro-main-text" v-else>
                <div class="column">
                    <div class="dev-skill PL">Programming Languages</div>
                    <div class="tag-row">
                        <span class="tag">C</span>
                        <span class="tag">C++</span>
                        <span class="tag">C#</span>
                        <span class="tag">Python</span>
                        <span class="tag">JavaScript</span>
                        <span class="tag">HTML/CSS</span>
                    </div>
                </div>
                <div class="column">
                    <div class="dev-skill TnT">Technologies & Tools</div>
                    <div class="tag-row">
                        <span class="tag">Git</span>
                        <span class="tag">GitHub</span>
                        <span class="tag">Unity</span>
                        <span class="tag">Visual Studio Code</span>
                        <span class="tag">Vue.js</span>
                        <span class="tag">Vite</span>
                    </div>
                </div>
                <div class="column">
                    <div class="dev-skill Doms">Domains</div>
                    <div class="tag-row">
                        <span class="tag">Game Dev</span>
                        <span class="tag">Web Dev</span>
                        <span class="tag">Game Design</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="intro-sub-container">
            <div class="intro-sub-section">
                <div class="intro-sub-title">GAMES</div>
                <div class="intro-sub-text">
                    <div class="project-name CAGED">CAGED</div>
                    <br/>
                    <strong>
                        Team Project - Unity | 1-month dev cycle
                    </strong>
                    <div>
                        It's a game with rhythm we made (not a rhythm game)! 
                        Play as a slime and dissolve toilet paper to save your kids!
                    </div>
                    <div class="details">
                        <span>Details</span>
                        <span class="arrow">▶</span>
                        <span class="detail-info">i</span>
                    </div>
                    <!-- <SubWindow>

                    </SubWindow> -->
                    
                    <button class="play-btn itchio" @click="openCAGED">Play CAGED on Itch.io</button>
                    <div class="note">
                        Forever grateful to my incredible teammates, couldn't have done it without them!
                    </div>
                </div>
                <div class="intro-sub-text">
                    <div class="project-name NOTRANS">No Translation!</div>
                    <br/>
                    <strong>
                        Team Project - Flask + Gemini API | 3-week dev cycle
                    </strong>
                    <div>
                        A language learning game forcing you to converse with a chatbot and learn their language?
                    </div>
                    <div class="details">
                        <span>Details</span>
                        <span class="arrow">▶</span>
                        <span class="detail-info">i</span>
                    </div>
                    <!-- <SubWindow>

                    </SubWindow> -->
                    
                    <button class="play-btn github" @click="openNOTRANS">View on GitHub</button>
                    <div class="note">
                        Huge thanks to my team, I had fun building this one!
                    </div>
                </div>
                <div class="intro-sub-text">
                    <div class="project-name GEOguessr">Geoguessr AI Bot</div>
                    <br/>
                    <strong>
                        Team Project - Vue + Firebase + Gemini API | 3-week dev cycle
                    </strong>
                    <div>
                        We like to play Geoguessr, and some people have no friends, so we integrated AI players to play with us.
                    </div>
                    <div class="details">
                        <span>Details</span>
                        <span class="arrow">▶</span>
                        <span class="detail-info">i</span>
                    </div>
                    <!-- <SubWindow>

                    </SubWindow> -->
                    
                    <button class="play-btn github" @click="openGEOguessr">View on GitHub</button>
                    <div class="note">
                        This was more tiring than I expected ngl :')
                    </div>
                </div>
                <div class="intro-sub-text">
                    <div class="project-name One2PG">One2PlayerGame</div>
                    <br/>
                    <strong>
                        Team Project - Jack (Nand2Tetris) | 2-week dev cycle
                    </strong>
                    <div>
                        One2PlayerGame is one two player game, utilizing the restrictions of black and white to create a visually trippy puzzle game.
                    </div>
                    <div class="details">
                        <span>Details</span>
                        <span class="arrow">▶</span>
                        <span class="detail-info">i</span>
                    </div>
                    <!-- <SubWindow>

                    </SubWindow> -->
                    
                    <button class="play-btn github" @click="openOne2PG">View on GitHub</button>
                    <div class="note">
                        This was my first ever game project, and I'm thinking of making a new rendition :D
                    </div>
                </div>
            </div>
            
            <div class="intro-sub-section">
                <div class="intro-sub-title" style="letter-spacing: 0.15rem;">WEB</div>
                <div class="intro-sub-text">
                    <div class="project-name ThisWebsite">This Website</div>
                    <br/>
                    <strong>
                        Solo Project - Vue + Tailwind(?) | Summer 2025
                    </strong>
                    <div>
                        A passion project built to house my work, experiments, and the occasional strange ideas.
                    </div>
                    <div class="details">
                        <span>Details</span>
                        <span class="arrow">▶</span>
                        <span class="detail-info">i</span>
                    </div>
                    <!-- <SubWindow>

                    </SubWindow> -->
                    
                    <button class="play-btn github" @click="opennottakoweb">View on GitHub</button>
                    <div class="note">
                        "Just keep making stuff, Don't worry about it." — PirateSoftware (probably)
                    </div>
                </div>
            </div>

            <div class="intro-sub-section">
                <div class="intro-sub-title" style="letter-spacing: 0.15rem;">BONUS: WRITING</div>
                <div class="intro-sub-text">
                    <div class="project-name StillHuman">Still Human</div>
                    <br/>
                    <strong>
                        Solo Work - Narrative Writing | Short Film Project
                    </strong>
                    <div>
                        Wrote the story and treatment for a short film centered on the internal experiences of depression.
                    </div>
                    <div class="details">
                        <span>Details</span>
                        <span class="arrow">▶</span>
                        <span class="detail-info">i</span>
                    </div>
                    <!-- <SubWindow>

                    </SubWindow> -->
                    
                    <button class="play-btn youtube" @click="openstillhuman">Watch on Youtube</button>
                    <div class="note">
                        A personal story about mental health, brought to life by a friend.
                    </div>
                </div>
            </div>
        </div>
        
        <div class="scroll-cover"></div>
    </div>
</template>


<script setup>
import { IsMobile } from '../../utils/isMobile';
import SubWindow from '../../components/SubWindow.vue';

import { ref } from 'vue'



function openCAGED() {
    window.open('https://fhvirus.itch.io/caged', '_blank');
}

function openNOTRANS() {
    window.open('https://github.com/Saiko0324/LAL_Final_Spring25', '_blank');
}

function openGEOguessr() {
    window.open('https://github.com/Saiko0324/Geoguess', '_blank');
}

function openOne2PG() {
    window.open('https://github.com/Saiko0324/One2PlayerGame', '_blank');
}

function opennottakoweb() {
    window.open('https://github.com/Saiko0324/nottakoweb', '_blank');
}

function openstillhuman() {
    window.open('https://www.youtube.com/watch?v=th_tsET5CQU&list=LL', '_blank');
}

const MobileDevice = IsMobile();

</script>

<style scoped>
.work-container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    user-select: none;
}

.dev-skills-container {
    padding: 3rem 2rem 1.5rem 3rem;
}

.intro-main-text {
    font-size: 1.2rem;
    display: flex;
    gap: 1rem;
    min-height: 5rem;
    margin-top: 1.5rem;
}

.column {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: left;
    white-space: nowrap;
}

.dev-skill {
    position: relative;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    z-index: 1;
    padding-bottom: 0.3rem;
}

.column + .column {
    padding-left: 1.5rem;
}

.tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
}

.tag {
    background-color: #7e7e7e;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 0.1rem 0.9rem 0.2rem 0.9rem;
    border-radius: 0.2rem;
}

.tag:hover {
    scale: 1.1;
}

.intro-sub-container {
    flex: 1;
    overflow-y: auto;
    padding: 1rem 3rem 2rem 4rem;
}

.intro-sub-section {
    margin-bottom: 2rem;
}

.intro-sub-section-final {
    margin-bottom: 0;
}

.intro-sub-title {
    font-family: PixelM;
    display: inline-block;
    color: white;
    background-color: #958dfa;
    font-size: 1.7rem;
    padding: 0.2rem 1.5rem;
    border-radius: 0.5rem;
}

.project-name {
    position: relative;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin-top: 1.5rem;
    z-index: 1;
}

.intro-sub-text {
    font-size: 1.2rem;
    padding-left: 1rem;
    line-height: 2rem;
}
.arrow {
    color: #ffdc17;
    padding: 0.5rem;
    font-size: 1rem;
}

.detail-info {
    width: 2rem;
    height: 2rem;
    background-color: #958dfa;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1rem;
}

.detail-info:hover {
    scale: 1.1;
    background-color: #ffdc17;
    cursor: pointer;
}

.play-btn {
    display: block;
    background-color: #7e7e7e;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    cursor: pointer;
}

.itchio {
    background-color: #fa5c5c;
}

.youtube {
    background-color: #ff0033;
}

.play-btn:hover {
    scale: 1.1;
}

.note {
    display: inline-block;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    border: 0.1rem solid #958dfa;
    padding: 0.2rem;
    border-radius: 0.3rem;
    color: #958dfa;
}

.note:hover {
    scale: 1.1;
    color: black;
    transition: ease-in-out 0.2s;
}


.scroll-cover {
    position: absolute;
    left: 1rem;
    right: 1rem;
    bottom: 0;
    height: 1.5rem;
    background-color: white;
    pointer-events: none;
}

.PL::before,
.TnT::before,
.Doms::before,
.CAGED::before,
.NOTRANS::before,
.GEOguessr::before,
.One2PG::before,
.ThisWebsite::before,
.StillHuman::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 1.2rem;
    height: 0.5rem;
    background-color: #ffdc17;
    z-index: -1;
}

.TnT::before {
    right: 1.8rem;
}
.Doms::before {
    right: 9.8rem;
}

.CAGED::before {
    top: 1.4rem;
}

@media (min-width: 541px) and (max-width: 768px) {
    .dev-skills-container {
        padding: 1rem;
    }
    
    .intro-main-text {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 0.5rem;
    }
    
    .column {
        align-items: center;
        white-space: nowrap;
        padding-right: 1rem;
    }
    
    .intro-sub-container {
        padding: 1rem 2rem;
    }
    
    .scroll-cover {
        height: 0;
    }
}

@media (max-width: 540px) {
    
    .column {
        align-items: center;
        white-space: nowrap;
        padding-right: min(1rem, 10vw);
    }
    
    .column + .column {
        padding-left: min(2rem, 20vw);
    }
    
    .intro-sub-container {
        padding: 0 1rem 1rem 1rem;
    }
    
    .intro-sub-title {
        font-size: 1.4rem;
    }
    
    .intro-sub-text {
        font-size: 1rem;
    }
    
    .note {
        font-size: 0.7rem;
    }
    .scroll-cover {
        height: 0;
    }
}
</style>