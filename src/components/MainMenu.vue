<template>
    <div class="mainmenu-container">
        <ul class="menu-list title">
            <li ref="aboutRef" @click="showAbout = !showAbout; bringToFront('About')">About</li>
            <li ref="worksRef" @click="showWorks = !showWorks; bringToFront('Works')">Works</li>
            <li ref="linksRef" @click="showLinks = !showLinks; bringToFront('Links')">Links</li>
            <li ref="othersRef" @click="showOthers = !showOthers; bringToFront('Others')">Others</li>
            <li ref="resumeRef" @click="showResume = !showResume; bringToFront('Resume')">Resume</li>
            <li ref="contactRef" @click="showContact = !showContact; bringToFront('Contact')">Contact</li>
            <li ref="artRef" @click="showArt = !showArt; bringToFront('Art')">Art</li>
            <!-- <li ref="controlsRef" @click="showControls = !showControls; bringToFront('Controls')">Controls</li> -->
        </ul>
    </div>
    <div class="dragwindow-container">
        <Window v-model:show="showAbout" title="About" :zIndex="zIndices.About" @mousedown="bringToFront('About')" :initialX="initialPositions.About.x" :initialY="initialPositions.About.y">
            <About />
            <!-- <p class="content">About</p> -->
        </Window>
        <Window v-model:show="showWorks" title="Works" :zIndex="zIndices.Works" @mousedown="bringToFront('Works')" :initialX="initialPositions.Works.x" :initialY="initialPositions.Works.y">
            <p class="content">Work in Progress...</p>
        </Window>
        <Window v-model:show="showLinks" title="Links" :zIndex="zIndices.Links" @mousedown="bringToFront('Links')" :initialX="initialPositions.Links.x" :initialY="initialPositions.Links.y">
            <p class="content">Work in Progress...</p>
        </Window>
        <Window v-model:show="showOthers" title="Others" :zIndex="zIndices.Others" @mousedown="bringToFront('Others')" :initialX="initialPositions.Others.x" :initialY="initialPositions.Others.y">
            <p class="content">Work in Progress...</p>
        </Window>
        <Window v-model:show="showResume" title="Resume" :zIndex="zIndices.Resume" @mousedown="bringToFront('Resume')" :initialX="initialPositions.Resume.x" :initialY="initialPositions.Resume.y">
            <p class="content">Work in Progress...</p>
        </Window>
        <Window v-model:show="showContact" title="Contact" :zIndex="zIndices.Contact" @mousedown="bringToFront('Contact')" :initialX="initialPositions.Contact.x" :initialY="initialPositions.Contact.y">
            <p class="content">Work in Progress...</p>
        </Window>
        <Window v-model:show="showArt" title="Art" :zIndex="zIndices.Art" @mousedown="bringToFront('Art')" :initialX="initialPositions.Art.x" :initialY="initialPositions.Art.y">
            <p class="content">Work in Progress...</p>
        </Window>
        <!-- <Window v-model:show="showControls" title="Controls" :zIndex="zIndices.Controls" @mousedown="bringToFront('Controls')" :initialX="initialPositions.Controls.x" :initialY="initialPositions.Controls.y">
            <p class="content">Controls</p>
        </Window> -->
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
import Window from '@/components/Window.vue';
import About from '@/components/About.vue';

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
    const offset = -20 - window.innerHeight * 0.1;
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
    height: 60vh;
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
    font-size: min(max(3vh, 2.2rem), 4vh);
    padding: 1vh 2vw;
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
    top: 10vh;
    left: 0;
    height: 90vh;
    overflow: hidden;
    pointer-events: none;
}

.dragwindow-container>* {
    pointer-events: auto;
}
</style>
