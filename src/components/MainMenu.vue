<template>
  <div class="mainmenu-container">
    <ul class="menu-list title">
      <li>About</li>
      <li>Works</li>
      <li>Links</li>
      <li>Others</li>
      <li>Resume</li>
      <li>Contact</li>
      <li>Art</li>
      <!-- <li style="show: hidden">Controls</li> -->
    </ul>
  </div>
</template>

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
  font-size: 3vh;
  padding: 1vh 2vw;
}
</style>
