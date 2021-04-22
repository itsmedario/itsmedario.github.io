<template>
  <div>
    <Game  :type="'Bridges'">
      <h2 slot="title">Brücken bauen</h2>
      <p slot="description">Baue so viele Brücken, dass man von jedem
         Landteil zu jedem anderen Landteil kommt.</p>
    </Game>
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

export default class BuildBridges extends Vue {}
</script>

<style scoped></style>
