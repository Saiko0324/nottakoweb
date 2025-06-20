<template>
	<div class="scroll-banner bg-white">
		<div v-for="item in activeImages" :key="item.id" class="scrolling-image" @animationend="removeImage(item.id)">
			<div class="image-wrapper">
				<SpriteAnimator v-if="item.type === 'sprite'" :spritesheet="item.src" :frame-count="item.frameCount" :frame-width="item.frameWidth" :frame-height="item.frameHeight" :duration="item.duration" :wrapper-width="WrapperHeightInPx" :wrapper-height="WrapperHeightInPx" :style="{ top: item.heightoffset + 'px', position: 'relative' }"/>
				<img v-else :src="item.src" alt="Scrolling item" />
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	ref,
	onMounted,
	onUnmounted
} from 'vue';
import SpriteAnimator from '@/components/SpriteAnimator.vue';

// import img1 from '@/assets/img/takodachi-ina.gif';
// import img2 from '@/assets/img/walking-going.gif';
import img3 from '@/assets/img/takodachi-ina-sprite.png';
import img4 from '@/assets/img/draw-sprite.png';

const images = [
		// type: 'gif',
		// src: img1
	// },
	// {
	// 	type: 'gif',
	// 	src: img2
	// },
	{
		type: 'sprite',
		src: img3,
		frameCount: 15,
		frameWidth: 200,
		frameHeight: 195,
		duration: 0.5,
		heightoffset: 0,
	},
	{
		type: 'sprite',
		src: img4,
		frameCount: 16,
		frameWidth: 1200,
		frameHeight: 1200,
		duration: 1,
		heightoffset: 15,
	},
];

const activeImages = ref([]);
let nextId = 0;
let timerId = null;

const WrapperHeightInPx = 10 * (window.innerHeight / 100);

function spawnImage() {
	const img = images[Math.floor(Math.random() * images.length)];

	activeImages.value.push({
		id: nextId++,
		...img
	});

	const delay = 2000 + Math.random() * 2000;
	timerId = setTimeout(spawnImage, delay);
}

function removeImage(id) {
	activeImages.value = activeImages.value.filter(img => img.id !== id);
}

onMounted(() => {
	spawnImage();
});

onUnmounted(() => {
	clearTimeout(timerId);
});
</script>

<style scoped>
.scroll-banner {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 10vh;
	overflow: visible;
	pointer-events: none;
	background-color: #e1d7ca;
}

.image-wrapper {
	height: 10vh;
	width: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}

.image-wrapper img {
	height: 100%;
	width: 100%;
	object-fit: contain;
}

.scrolling-image {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	animation: scroll-left linear forwards;
	animation-duration: 10s;
	will-change: right;
}

.scrolling-image img {
	height: 10vh;
	width: auto;
	object-fit: contain;
}

@keyframes scroll-left {
	0% {
		left: 100vw;
	}
	100% {
		left: -10rem;
	}
}
</style>
