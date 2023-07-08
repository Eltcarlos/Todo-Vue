<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h1>MapState</h1>
  <h2>{{ count }}</h2>
  <button @click="increment">1</button>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Counter-app",
  computed: mapState(["count"]),
  //   computed: countComputed(){
  //     return this.$store.state.count
  //   },
  //   ...mapState(['count'])
  //   ...mapState({
  //     count : state => state.count
  //   })
  methods: {
    increment() {
      this.$store.commit("increment");
      this.$store.dispatch("incrementRandomInt");
    },
    ...mapActions(["incrementRandomInt"]),
  },
};
</script>
