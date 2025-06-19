<template>
  <div class="container">
    <p>In the meantime, here's a button for you to click on :)</p>
    <button @click="ButtonClick">Click</button>
    <div class="message" v-if="Clicked">
      Nice! You clicked it {{ ClickCount }} times.
    </div>
    <div class="nice-number" v-if="ClickCount === 69">
      Nice number hehe >:)
    </div>
    <div class="nice-number" v-if="ClickCount > 69">
      Nice number is over :(
    </div>
  </div>
</template>

<script>
export default {
  name: 'JustClick',
  data() {
    return {
      Clicked: false,
      ClickCount: 0
    };
  },
  methods: {
    ButtonClick() {
      this.Clicked = true;
      this.ClickCount++;
    }
  }
};
</script>

<style scoped>
.container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  max-width: 600px;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

.message {
  margin-top: 1rem;
  font-size: 1.1rem;
}

.nice-number {
  color: #e91e63;
  font-weight: bold;
  margin-top: 0.5rem;
}
</style>
