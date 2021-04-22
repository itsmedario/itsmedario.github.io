<template>
  <div>
    <Game>
      <h2 slot="title">Brücken überprüfen</h2>
      <p slot="description">Überprüfe, ob man von jedem Landteil
         zu jedem anderen Landteil kommt.</p>
    </Game>
    <img :src="require('/src/assets/maps/map1.png')"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Game from '../components/Game.vue';

@Component({
  components: {
    Game,
  },
})

export default class CheckBridges extends Vue {}
</script>

<style scoped></style>
