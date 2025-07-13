<template>
    <div class="about-container">
        <div class="intro-main-container">
            <img :src="currentIcon" alt="icon-image" class="icon" @mouseenter="to_alt_icon" @mouseleave="to_normal_icon" @pointerdown="to_alt_icon" @pointerup="to_normal_icon"/>
            <div class="intro-main sub-title">
                <span class="WAH" :class="{ active: wahActive }" @pointerdown="wahActive = true" @pointerup="wahActive = false">Hi, </span>
                <span> I'm </span>
                <span class="name" :class="{ active: nameActive }" @pointerdown="nameActive = true" @pointerup="nameActive = false">Dickson.</span>
            </div>
        </div>
        <div class="roles-container">
            <div class="intro-main-text" v-if="!MobileDevice">
                <div class="column">
                    <div> Malaysian </div>
                    <div> Coding Enjoyer </div>
                </div>
                <div class="column">
                    <div> CS Student </div>
                    <div> Linux Enthusiast </div>
                </div>
                <div class="column">
                    <div> Future Game Dev </div>
                    <div> Web Dev Learner </div>
                </div>
            </div>
            <div class="intro-main-text" v-else>
                <div class="column">
                    <div> Malaysian </div>
                    <div> Coding Enjoyer</div>
                    <div> Web Dev Learner</div>
                </div>
                <div class="column">
                    <div> CS Student </div>
                    <div> Linux Enthusiast </div>
                    <div> Future Game Dev </div>
                </div>
            </div>
        </div>
        <div class="intro-sub-container">
            <div class="intro-sub-section">
                <div class="intro-sub-title">INTRODUCTION</div>
                <div class="intro-sub-text">
                    I like books, games, and creating fun (weird) projects. <br>
                    Currently learning front-end web development.
                </div>
            </div>
            <div class="intro-sub-section">
                <div class="intro-sub-title">EDUCATION</div>
                <div class="intro-sub-text">
                    I'm a senior at <strong>National Taiwan University</strong>, pursuing a Bachelor's degree in the
                    Department of <strong>Computer Science and Information Engineering</strong>.
                </div>
            </div>
            <div class="intro-sub-section">
                <div class="intro-sub-title">LANGUAGE PROFICIENCY</div>
                <div class="intro-sub-text">
                    Natively fluent in <strong>Chinese</strong> and <strong>English</strong>. <br>
                    Basic comprehension in <strong>Japanese</strong> and <strong>Malay</strong>.
                    <div class="note">
                        <div>Yes you read that right, I'm a Malaysian who's not good at Malay :(</div>
                    </div>
                </div>
            </div>
            <div class="intro-sub-section-final">
                <div class="intro-sub-title">PERSONAL STUFF</div>
                <div class="intro-sub-text">
                    <ul class="fun-facts-list">
                        <li>I'm 23 years old, born in 2002</li>
                        <li>I like coffee :D</li>
                        <li>I hate cockroaches >:(</li>
                        <li>I'm very poor :(</li>
                        <li>Give me your money >:)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="scroll-cover"></div>
    </div>
</template>

<script setup>
import Icon from '@/assets/img/Information/icon2_crop.jpg';
import HoverIcon from '@/assets/img/Information/icon_alt.jpg'
import { IsMobile } from '../../utils/isMobile';

import { ref } from 'vue'

const MobileDevice = IsMobile();
const currentIcon = ref(Icon)
const wahActive = ref(false);
const nameActive = ref(false);

const to_alt_icon = () => currentIcon.value = HoverIcon
const to_normal_icon = () => currentIcon.value = Icon
</script>

<style scoped>
.about-container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    user-select: none;
}

.intro-main-container {
    position: relative;
    flex-shrink: 0;
    display: flex;
    gap: 6.5rem;
    padding: 1.5rem 3rem 1.5rem 5rem;
}

.icon {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #cccccc;
    flex-shrink: 0;
}

.intro-main {
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.intro-main::before {
    content: "";
    position: absolute;
    left: calc(150px + 11.5rem);
    align-items: center;
    transform: translateY(140%);
    right: 6.64rem;
    height: 0.5rem;
    background-color: #ffdc17;
    z-index: 0;
}

.intro-main span {
    position: relative;
    z-index: 1;
}

.WAH {
    position: relative;
    display: inline-block;
    letter-spacing: 0.3rem;
}

.WAH::after {
    content: "WAH";
    position: absolute;
    left: 0;
    top: 0;
    color: #9572E2;
    opacity: 0;
}

.WAH:hover {
    color: transparent;
}

.WAH:hover::after {
    opacity: 1;
}

.name {
    position: relative;
    display: inline-block;
}

.name::after {
    content: "Not_Tako";
    position: absolute;
    left: 0;
    top: 0;
    color: #9572E2;
    opacity: 0;
}

.name:hover {
    color: transparent;
}

.name:hover::after {
    opacity: 1;
}

.roles-container {
    padding: 0 5rem 1.5rem 5.5rem;
}

.intro-main-text {
    font-size: 1.2rem;
    display: flex;
    min-height: 5rem;
}

.column {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: left;
}

.column + .column {
    border-left: 0.15rem solid #ffdc17;
    padding-left: 2rem;
}

.intro-sub-container {
    flex: 1;
    overflow-y: auto;
    padding: 1rem 4.5rem 2rem 4.5rem;
}

.intro-sub-section {
    margin-bottom: 1rem;
}

.intro-sub-section-final {
    margin-bottom: 0;
}

.intro-sub-title {
    font-family: PixelM;
    display: inline-block;
    color: white;
    background-color: #958dfa;
    font-size: 1.5rem;
    padding: 0rem 1rem;
    border-radius: 0.5rem;
}

.intro-sub-text {
    font-size: 1.1rem;
    margin-top: 1rem;
    padding-left: 1rem;
}

.fun-facts-list li {
    position: relative;
    padding-left: 1rem;
}

.fun-facts-list li::before {
    content: "▼";
    position: absolute;
    left: 0;
    top: 0.4rem;
    color: #ffdc17;
    font-size: 0.6rem;
}

.note {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    padding: 0 0.5rem;
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

@media (min-width: 541px) and (max-width: 768px) {
    .intro-main-container {
        gap: 1rem;
        padding: 2.5rem;
        justify-content: space-between;
        padding-bottom: 0;
    }

    .intro-main {
        font-size: 2.5rem;
        margin-left: auto;
        border-top: 0.2rem solid #ffdc17;
        border-bottom: 0.2rem solid #ffdc17;
    }
    
    .intro-main::before {
        background-color: transparent;
    }

    .roles-container {
        padding: 1rem;
    }
    
    .intro-main-text {
        flex-direction: row;
        justify-content: space-around;
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
    .intro-main-container {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        padding-bottom: 0;
    }
    
    .intro-main {
        font-size: min(10vw, 2.5rem);
        justify-content: center;
        padding-left: 1rem;
        border-left: 0.2rem solid #ffdc17;
        border-right: 0.2rem solid #ffdc17;
    }

    .intro-main::before {
        background-color: transparent;
    }

    .icon {
        width: 120px;
        height: 120px;
    }

    .roles-container {
        padding: 1rem;
    }

    .intro-main-text {
        justify-content: center;
        flex-wrap: nowrap;
        font-size: 1rem;
    }
    
    .column {
        align-items: center;
        white-space: nowrap;
        padding-right: min(1rem, 5vw);
    }
    
    .column + .column {
        padding-left: min(2rem, 10vw);
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