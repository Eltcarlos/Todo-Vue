<template>
  <div class="pokemon-container">
    <img :src="imgSrc" alt="Pokemon" class="hidden-pokemon" />
    <img v-if="showPokemon" :src="imgSrc" alt="Pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
