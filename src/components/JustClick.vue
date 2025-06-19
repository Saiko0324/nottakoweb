<template>
  <div class="bg-white p-8 rounded-xl shadow-md max-w-xl w-full text-center mt-8 mx-auto">
    <p class="text-gray-700">In the meantime, here's a button for you to click on :)</p>
    <button
      @click="ButtonClick"
      class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Click
    </button>

    <div v-if="Clicked" class="mt-4 text-lg text-gray-800">
      Nice! You clicked it {{ ClickCount }} times.
    </div>

    <div v-if="ClickCount === 69" class="text-pink-600 font-bold mt-2">
      Nice number hehe >:)
    </div>

    <div v-if="ClickCount > 69" class="text-pink-600 font-bold mt-2">
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
