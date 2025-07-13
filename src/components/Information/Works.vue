<template>
    <div class="work-container">
        <div class="dev-skills-container">
            <div class="intro-sub-title DEVELOPMENT-SKILLS">DEVELOPMENT SKILLS</div>
            <div class="intro-main-text">
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
                        <span ref="CAGEDRef" @pointerdown="showCAGED = !showCAGED; bringsubToFront('CAGED')" class="detail-info">i</span>
                    </div>
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
                        <span ref="NOTRANSRef" @pointerdown="showNOTRANS = !showNOTRANS; bringsubToFront('NOTRANS')" class="detail-info">i</span>
                    </div>
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
                        <span ref="GEOguessrRef" @pointerdown="showGEOguessr = !showGEOguessr; bringsubToFront('GEOguessr')" class="detail-info">i</span>
                    </div>
                    
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
                        <span ref="One2PGRef" @pointerdown="showOne2PG = !showOne2PG; bringsubToFront('One2PG')" class="detail-info">i</span>
                    </div>
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
                        A personal passion project built to house my work, experiments, and the occasional strange ideas.
                    </div>
                    <div class="details">
                        <span>Details</span>
                        <span class="arrow">▶</span>
                        <span ref="ThisWebsiteRef" @pointerdown="showThisWebsite = !showThisWebsite; bringsubToFront('ThisWebsite')" class="detail-info">i</span>
                    </div>
                    <button class="play-btn github" @click="opennottakoweb">View on GitHub</button>
                    <div class="note">
                        Just keep making stuff, don't worry about it.
                    </div>
                </div>
            </div>

            <div class="intro-sub-section-final">
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
                        <span ref="StillHumanRef" @pointerdown="showStillHuman = !showStillHuman; bringsubToFront('StillHuman')" class="detail-info">i</span>
                    </div>
                    <button class="play-btn youtube" @click="openstillhuman">Watch on Youtube</button>
                    <div class="note">
                        A personal story about mental health, brought to life by a friend.
                    </div>
                </div>
            </div>
        </div>
        <div class="subwindow-container">
            <SubWindow v-model:showsub="showCAGED"
            title="CAGED"
            :subzIndex="subzIndices.CAGED" :subinitialX="subinitialPositions.CAGED.x" :subinitialY="subinitialPositions.CAGED.y"
            @pointerdown="bringsubToFront('CAGED')" @bringsubToFront="bringsubToFront('CAGED')">
                <CAGED />
            </SubWindow>
            <SubWindow v-model:showsub="showNOTRANS"
            title="No Translation!"
            :subzIndex="subzIndices.NOTRANS" :subinitialX="subinitialPositions.NOTRANS.x" :subinitialY="subinitialPositions.NOTRANS.y"
            @pointerdown="bringsubToFront('NOTRANS')" @bringsubToFront="bringsubToFront('NOTRANS')">
                <NOTRANS />
            </SubWindow>
            <SubWindow v-model:showsub="showGEOguessr"
            title="Geoguessr AI Bot"
            :subzIndex="subzIndices.GEOguessr" :subinitialX="subinitialPositions.GEOguessr.x" :subinitialY="subinitialPositions.GEOguessr.y"
            @pointerdown="bringsubToFront('GEOguessr')" @bringsubToFront="bringsubToFront('GEOguessr')">
                <GEOguessr />
            </SubWindow>
            <SubWindow v-model:showsub="showOne2PG"
            title="One2PlayerGame"
            :subzIndex="subzIndices.One2PG" :subinitialX="subinitialPositions.One2PG.x" :subinitialY="subinitialPositions.One2PG.y"
            @pointerdown="bringsubToFront('One2PG')" @bringsubToFront="bringsubToFront('One2PG')">
                <One2PG />
            </SubWindow>
            <SubWindow v-model:showsub="showThisWebsite"
            title="Not_Tako Web"
            :subzIndex="subzIndices.ThisWebsite" :subinitialX="subinitialPositions.ThisWebsite.x" :subinitialY="subinitialPositions.ThisWebsite.y"
            @pointerdown="bringsubToFront('ThisWebsite')" @bringsubToFront="bringsubToFront('ThisWebsite')">
                <ThisWebsite />
            </SubWindow>
            <SubWindow v-model:showsub="showStillHuman"
            title="Still Human"
            :subzIndex="subzIndices.StillHuman" :subinitialX="subinitialPositions.StillHuman.x" :subinitialY="subinitialPositions.StillHuman.y"
            @pointerdown="bringsubToFront('StillHuman')" @bringsubToFront="bringsubToFront('StillHuman')">
                <StillHuman />
            </SubWindow>
        </div>
        <div class="scroll-cover"></div>
    </div>
</template>
<script setup>
import SubWindow from '../../components/SubWindow.vue';
import CAGED from '../../components/Information/Details/CAGED.vue';
import NOTRANS from '../../components/Information/Details/NOTRANS.vue';
import GEOguessr from '../../components/Information/Details/GEOguessr.vue';
import One2PG from '../../components/Information/Details/One2PG.vue';
import ThisWebsite from '../../components/Information/Details/ThisWebsite.vue';
import StillHuman from '../../components/Information/Details/StillHuman.vue';

import { ref, onMounted } from 'vue'

const showCAGED = ref(false);
const showNOTRANS = ref(false);
const showGEOguessr = ref(false);
const showOne2PG = ref(false);
const showThisWebsite = ref(false);
const showStillHuman = ref(false);

const subzCounter = ref(3);
const subzIndices = ref({
    CAGED: 3,
    NOTRANS: 3,
    GEOguessr: 3,
    One2PG: 3,
    ThisWebsite: 3,
    StillHuman: 3,
});

function bringsubToFront(name) {
    subzCounter.value++;
    subzIndices.value[name] = subzCounter.value;
}

const CAGEDRef = ref(null);
const NOTRANSRef = ref(null);
const GEOguessrRef = ref(null);
const One2PGRef = ref(null);
const ThisWebsiteRef = ref(null);
const StillHumanRef = ref(null);

const subinitialPositions = ref({
    CAGED: { x: 0, y: 0 },
    NOTRANS: { x: 0, y: 0 },
    GEOguessr: { x: 0, y: 0 },
    One2PG: { x: 0, y: 0 },
    ThisWebsite: { x: 0, y: 0 },
    StillHuman: { x: 0, y: 0 },
});

function openCAGED() {
    window.open('https://fhvirus.itch.io/caged', '_blank', 'noopener, noreferrer');
}

function openNOTRANS() {
    window.open('https://github.com/Saiko0324/LAL_Final_Spring25', '_blank', 'noopener, noreferrer');
}

function openGEOguessr() {
    window.open('https://github.com/Saiko0324/Geoguess', '_blank', 'noopener, noreferrer');
}

function openOne2PG() {
    window.open('https://github.com/Saiko0324/One2PlayerGame', '_blank', 'noopener, noreferrer');
}

function opennottakoweb() {
    window.open('https://github.com/Saiko0324/nottakoweb', '_blank', 'noopener, noreferrer');
}

function openstillhuman() {
    window.open('https://www.youtube.com/watch?v=th_tsET5CQU&list=LL', '_blank', 'noopener, noreferrer');
}

onMounted(() => {
    const devSkills = document.querySelector('.dev-skills-container');
    const introSub = document.querySelector('.intro-sub-container');
    const workContainer = document.querySelector('.work-container');
    
    const updateScrollBehavior = () => {
        const threshold = window.innerHeight * 0.4;
        
        if (devSkills.offsetHeight >= threshold) {
            introSub.style.overflowY = 'hidden';
            introSub.style.flex = 'none';
            introSub.style.height = 'auto';
            
            workContainer.style.overflowY = 'auto';
            
        } else {
            introSub.style.overflowY = 'auto';
            introSub.style.flex = '1';
            
            workContainer.style.overflowY = 'hidden';
        }
    };
    
    updateScrollBehavior();
    
    new ResizeObserver(updateScrollBehavior).observe(devSkills);
});

</script>

<style>
.work-container {
    position: relative;
    height: 100%;
    max-height: calc(var(--vh, 1vh) * 100);
    overflow: hidden;
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
    flex-wrap: wrap;
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
    position: relative;
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
    padding: 0 0.5rem;
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

@media (max-width: 927px) {
    .TnT::before {
    right: 0;
    }

    .Doms::before {
        right: 0;
    }

    .dev-skills-container {
        padding: 1rem;
    }

    .DEVELOPMENT-SKILLS {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    .tag-row {
        justify-content: center;
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

@media (max-width: 768px) {

}

.subwindow-container {
    position: absolute;
    width: calc(100% + 0.5rem);
    height: calc(100% + 0.5rem);
    left: -0.25rem;
    top: -0.25rem;
    overflow: hidden;
    z-index: 10;
    pointer-events: none;
}

.subwindow-container > * {
    pointer-events: auto;
}

</style>