<template>
  <h2>{{ title }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
    <button v-on:click="increase">+1</button>
    <button v-on:click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      validator(value) {
        return value > 100;
      },
    },
  },
  name: "Patito",
  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter = this.counter - 1;
    },
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
  },
};
</script>

<style>
button {
  background-color: #64b687;
  margin: 0 5px;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
