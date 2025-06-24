<template>
    <div class="about-container">
        <div class="intro-main-container">
            <img :src="currentIcon" alt="icon-image" class="icon" @mouseenter="to_alt_icon" @mouseleave="to_normal_icon"/>
            <div class="intro-main">
                <div class="intro-main-greet"><span class="WAH">Hey!</span> I'm <span class="name">Dickson</span></div>
                <div class="intro-main-text">
                    <div class="column">
                        <div> Malaysian </div>
                        <div> Coding Enjoyer </div>
                        <div>  </div>
                    </div>
                    <div class="column">
                        <div> CS Student </div>
                        <div> Linux Enthusiast </div>
                        <div>  </div>
                    </div>
                    <div class="column">
                        <div> Future Game Dev </div>
                        <div> Web Dev Learner </div>
                        <div>  </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="intro-sub-container">
            <div class="intro-sub-section">
                <div class="intro-sub-title">Introduction</div>
                <div class="intro-sub-text">
                    I like books, games, and creating fun (weird) projects. <br>
                    Currently learning front-end web development.
                </div>
            </div>
            <div class="intro-sub-section">
                <div class="intro-sub-title">Education</div>
                <div class="intro-sub-text">
                    I'm a senior at <strong>National Taiwan University</strong>, pursuing a Bachelor's degree in the
                    Department of Computer Science and Information Engineering.
                </div>
            </div>
            <div class="intro-sub-section">
                <div class="intro-sub-title">Language Proficiency</div>
                <div class="intro-sub-text">
                    Natively fluent in <strong>Chinese</strong> and <strong>English</strong>. <br>
                    Basic comprehension in Japanese and Malay.
                    <div class="note">
                        <div>Yes you read that right, I'm a Malaysian who's not good at Malay :(</div>
                    </div>
                </div>
            </div>
            <div class="intro-sub-section-final">
                <div class="intro-sub-title">Personal Stuff</div>
                <div class="intro-sub-text">
                    <div>I'm 23 years old, born in 2002</div>
                    <div>I like books and coffee :D</div>
                    <div>I hate cockroaches >:(</div>
                    <div>I'm very poor :(</div>
                    <div>Give me your money >:)</div>
                </div>
            </div>
        </div>
        <div class="scroll-cover"></div>
    </div>
</template>

<script setup>
import Icon from '@/assets/img/Information/icon2_crop.jpg';
import HoverIcon from '@/assets/img/Information/icon_alt.jpg'

import { ref } from 'vue'
const currentIcon = ref(Icon)

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
    gap: 2rem;
    align-items: flex-start;
    padding: 2rem;
}

.intro-main-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 2rem;
  right: 2rem;
  height: 1.5px;
  background-color: #ccc;
}

.icon {
    height: 170px;
    width: 170px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
    flex-shrink: 0;
}

.intro-main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
}

.intro-main-greet {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.WAH {
    position: relative;
    display: inline-block;
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
    color: hwb(51 17% 7%);
    opacity: 0;
}

.name:hover {
    color: transparent;
}

.name:hover::after {
    opacity: 1;
}

.intro-main-text {
    font-size: 1.2rem;
    color: #444;
    display: flex;
    gap: 1rem;
}

.column {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.column + .column {
    border-left: 1px solid #ccc;
    padding-left: 1rem;
}

.intro-sub-container {
    flex: 1;
    overflow-y: auto;
    padding: 1rem 2.5rem 1.5rem 2.5rem;
    border-bottom-right-radius: 1rem;
}

.intro-sub-section {
    margin-bottom: 1.5rem;
}

.intro-sub-section-final {
    margin-bottom: 0;
}

.intro-sub-title {
    font-size: 1.7rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5rem;
    color: black;
}

/* .intro-sub-title:hover {
    color: hwb(51 17% 7%);
    font-size: 2rem;
} */

.intro-sub-text {
    font-size: 1.2rem;
    color: #444;
    margin-top: 0.5rem;
}

.note {
    font-size: 1rem;
    margin-top: 0.5rem;
}

.scroll-cover {
    position: absolute;
    left: 1rem;
    right: 1rem;
    bottom: 0;
    height: 1.5rem;
    background-color: rgba(255, 255, 255);
    pointer-events: none;
}
</style>