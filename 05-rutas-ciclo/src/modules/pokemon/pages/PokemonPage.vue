<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((r) => r.json());
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push("/");
      }
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>
