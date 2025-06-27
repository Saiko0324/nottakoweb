<template>
    <div class="mainmenu-container">
        <ul class="menu-list title">
            <li ref="aboutRef" @pointerdown="showAbout = !showAbout; bringToFront('About')">About</li>
            <li ref="worksRef" @pointerdown="showWorks = !showWorks; bringToFront('Works')">Works</li>
            <li ref="linksRef" @pointerdown="showLinks = !showLinks; bringToFront('Links')">Links</li>
            <li ref="othersRef" @pointerdown="showOthers = !showOthers; bringToFront('Others')">Others</li>
            <li ref="resumeRef" @pointerdown="showResume = !showResume; bringToFront('Resume')">Resume</li>
            <li ref="contactRef" @pointerdown="showContact = !showContact; bringToFront('Contact')">Contact</li>
            <li ref="artRef" @pointerdown="showArt = !showArt; bringToFront('Art')">Art</li>
            <!-- <li ref="controlsRef" @pointerdown="showControls = !showControls; bringToFront('Controls')">Controls</li> -->
        </ul>
    </div>
    <div class="dragwindow-container">
        <div v-if="MobileDevice">
            <MobileWindow v-model:show="showAbout" title="About">
                 <About />
            </MobileWindow>
            <MobileWindow v-model:show="showWorks" title="Works">
                <Works />
                <!-- <p class="content">Work in Progress...</p> -->
            </MobileWindow>
            <MobileWindow v-model:show="showLinks" title="Links">
                <p class="content">Work in Progress...</p>
            </MobileWindow>
            <MobileWindow v-model:show="showOthers" title="Others">
                <p class="content">Work in Progress...</p>
            </MobileWindow>
            <MobileWindow v-model:show="showResume" title="Resume">
                <p class="content">Work in Progress...</p>
            </MobileWindow>
            <MobileWindow v-model:show="showContact" title="Contact">
                <p class="content">Work in Progress...</p>
            </MobileWindow>
            <MobileWindow v-model:show="showArt" title="Art">
                <p class="content">Work in Progress...</p>
            </MobileWindow>
            <!-- <MobileWindow v-model:show="showControls" title="Controls">
                <p class="content">Controls</p>
            </MobileWindow> -->
        </div>
        <div v-else>
            <Window v-model:show="showAbout"
            title="About"
            :zIndex="zIndices.About" :initialX="initialPositions.About.x" :initialY="initialPositions.About.y"
            @pointerdown="bringToFront('About')" @bringToFront="bringToFront('About')">
                <About />
            </Window>
            <Window v-model:show="showWorks"
            title="Works"
            :zIndex="zIndices.Works" :initialX="initialPositions.Works.x" :initialY="initialPositions.Works.y"
            :windowSize="{ width: 'min(53rem, 100vw)', height: 'min(38rem, calc(var(--vh, 1vh) * 90))' }"
            @pointerdown="bringToFront('Works')" @bringToFront="bringToFront('Works')">
                <Works />
            </Window>
            <Window v-model:show="showLinks"
            title="Links"
            :zIndex="zIndices.Links" :initialX="initialPositions.Links.x" :initialY="initialPositions.Links.y"
            :windowSize="{ width: 'min(53rem, 100vw)', height: 'min(38rem, calc(var(--vh, 1vh) * 90))' }"
            @pointerdown="bringToFront('Links')" @bringToFront="bringToFront('Links')">
                <Links />
            </Window>
            <Window v-model:show="showOthers"
            title="Others"
            :zIndex="zIndices.Others" :initialX="initialPositions.Others.x" :initialY="initialPositions.Others.y"
            :windowSize="{ width: 'min(53rem, 100vw)', height: 'min(38rem, calc(var(--vh, 1vh) * 90))' }"
            @pointerdown="bringToFront('Others')" @bringToFront="bringToFront('Others')">
                <Others />
            </Window>
            <Window v-model:show="showResume"
            title="Resume"
            :zIndex="zIndices.Resume" :initialX="initialPositions.Resume.x" :initialY="initialPositions.Resume.y"
            :windowSize="{ width: 'min(53rem, 100vw)', height: 'min(38rem, calc(var(--vh, 1vh) * 90))' }"
            @pointerdown="bringToFront('Resume')" @bringToFront="bringToFront('Resume')">
                <Resume />
            </Window>
            <Window v-model:show="showContact"
            title="Contact"
            :zIndex="zIndices.Contact" :initialX="initialPositions.Contact.x" :initialY="initialPositions.Contact.y"
            :windowSize="{ width: 'min(53rem, 100vw)', height: 'min(38rem, calc(var(--vh, 1vh) * 90))' }"
            @pointerdown="bringToFront('Contact')" @bringToFront="bringToFront('Contact')">
                <Contact />
            </Window>
            <Window v-model:show="showArt"
            title="Art"
            :zIndex="zIndices.Art" :initialX="initialPositions.Art.x" :initialY="initialPositions.Art.y"
            :windowSize="{ width: 'min(53rem, 100vw)', height: 'min(38rem, calc(var(--vh, 1vh) * 90))' }"
            @pointerdown="bringToFront('Art')" @bringToFront="bringToFront('Art')">
                <Art />
            </Window>
            <!-- <Window v-model:show="showControls"
            title="Controls"
            :zIndex="zIndices.Controls" :initialX="initialPositions.Controls.x" :initialY="initialPositions.Controls.y"
            :windowSize="{ width: 'min(53rem, 100vw)', height: 'min(38rem, calc(var(--vh, 1vh) * 90))' }"
            @pointerdown="bringToFront('Controls')">
                <Controls />
            </Window> -->
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import { IsMobile } from '@/utils/IsMobile.js';
import Window from '@/components/Window.vue';
import MobileWindow from '@/components/MobileWindow.vue';
import About from '@/components/Information/About.vue';
import Works from '@/components/Information/Works.vue';
import Links from '@/components/Information/Links.vue';
import Others from '@/components/Information/Others.vue';
import Resume from '@/components/Information/Resume.vue';
import Contact from '@/components/Information/Contact.vue';
import Art from '@/components/Information/Art.vue';
// import Controls from '@/components/Controls.vue';

const MobileDevice = IsMobile();

const showAbout = ref(false);
const showWorks = ref(false);
const showLinks = ref(false);
const showOthers = ref(false);
const showResume = ref(false);
const showContact = ref(false);
const showArt = ref(false);
// const showControls = ref(false);

const zCounter = ref(1);
const zIndices = ref({
    About: 1,
    Works: 1,
    Links: 1,
    Others: 1,
    Resume: 1,
    Contact: 1,
    Art: 1,
    // Controls: 1,
});

function bringToFront(name) {
    zCounter.value++;
    zIndices.value[name] = zCounter.value;
}

const aboutRef = ref(null);
const worksRef = ref(null);
const linksRef = ref(null);
const othersRef = ref(null);
const resumeRef = ref(null);
const contactRef = ref(null);
const artRef = ref(null);
// const controlsRef = ref(null);

const initialPositions = reactive({
    About: { x: 0, y: 0 },
    Works: { x: 0, y: 0 },
    Links: { x: 0, y: 0 },
    Others: { x: 0, y: 0 },
    Resume: { x: 0, y: 0 },
    Contact: { x: 0, y: 0 },
    Art: { x: 0, y: 0 },
    // Controls: { x: 0, y: 0 },
});

onMounted(async () => {
    await nextTick();
    setInitialPositions();
});

function setInitialPositions() {
    const offset = 20
    const windowWidth = 425;
    
    if (aboutRef.value) {
        const rect = aboutRef.value.getBoundingClientRect();
        initialPositions.About = { x: rect.left + rect.width / 2 - windowWidth, y: rect.bottom + offset };
    }
    if (worksRef.value) {
        const rect = worksRef.value.getBoundingClientRect();
        initialPositions.Works = { x: rect.left + rect.width / 2 - windowWidth, y: rect.bottom + offset };
    }
    if (linksRef.value) {
        const rect = linksRef.value.getBoundingClientRect();
        initialPositions.Links = { x: rect.left + rect.width / 2 - windowWidth, y: rect.bottom + offset };
    }
    if (othersRef.value) {
        const rect = othersRef.value.getBoundingClientRect();
        initialPositions.Others = { x: rect.left + rect.width / 2 - windowWidth, y: rect.bottom + offset };
    }
    if (resumeRef.value) {
        const rect = resumeRef.value.getBoundingClientRect();
        initialPositions.Resume = { x: rect.left + rect.width / 2 - windowWidth, y: rect.bottom + offset };
    }
    if (contactRef.value) {
        const rect = contactRef.value.getBoundingClientRect();
        initialPositions.Contact = { x: rect.left + rect.width / 2 - windowWidth, y: rect.bottom + offset };
    }
    if (artRef.value) {
        const rect = artRef.value.getBoundingClientRect();
        initialPositions.Art = { x: rect.left + rect.width / 2 - windowWidth, y: rect.bottom + offset };
    }
    // if (controlsRef.value) {
    //     const rect = controlsRef.value.getBoundingClientRect();
    //     initialPositions.Controls = { x: rect.left + rect.width / 2 - windowWidth, y: rect.bottom + offset };
    // }
}
</script>

<style scoped>
.mainmenu-container {
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(var(--vh, 1vh) * 60);
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    z-index: 0;
}

.menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.menu-list li {
    font-size: min(max(calc(var(--vh, 1vh) * 3), 2.2rem), calc(var(--vh, 1vh) * 4));
    padding: calc(var(--vh, 1vh) * 1) 2vw;
    z-index: 1;
    cursor: pointer;
    user-select: none;
    pointer-events: auto;
}

.menu-list li:hover {
    transform: translateY(-0.2em);
    color: hwb(51 17% 7%);
    text-shadow: 0.1em 0.1em 0 #000;
    scale: 1.3;
    transition: transform 0.15s ease;
}

.dragwindow-container {
    position: fixed;
    width: 100%;
    /* top: calc(var(--vh, 1vh) * 10);
    height: calc(var(--vh, 1vh) * 90); */
    left: 0;
    top: 0;
    height: calc(var(--vh, 1vh) * 100);
    
    overflow: hidden;
    pointer-events: none;
}

.dragwindow-container>* {
    pointer-events: auto;
}
</style>
