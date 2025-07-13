<template>
    <div class="setting-container">
        <h2>Work in progress...</h2>
        <p>Current plans include:</p>
        <ul class="plans-list">
            <li>Credits</li>
            <li>Light/Dark Mode</li>
            <li>Bilingual Texts</li>
            <li>SFX / BGM</li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style scoped>
.setting-container {
    position: fixed;
    top: calc(var(--vh, 1vh) * 16);
    width: 100%;
    padding: 2rem;
    z-index: 1;
    background-color: #f3f0ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
}

h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: bold;
}

p {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.plans-list {
    list-style: disc;
    padding-left: 1.5rem;
    font-size: 1rem;
}
</style>
