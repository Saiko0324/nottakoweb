const app = Vue.createApp({
  data() {
    return {
      Clicked: false,
      ClickCount: 0,
    };
  },
  methods: {
    ButtonClick() {
      this.Clicked = true;
      this.ClickCount++;
    }
  },
  template: `
    <div class="container">
      <p>In the meantime, here's a button for you to click on :)</p>
      <button @click="ButtonClick">Click</button>
      <div class="message" v-if="Clicked">
        Nice! You clicked it {{ ClickCount }} times.
      </div>
      <div class="nice-number" v-if="ClickCount === 69">
        Nice number hehe >:)
      </div>
    </div>
  `
});

app.mount('#JustClick');
