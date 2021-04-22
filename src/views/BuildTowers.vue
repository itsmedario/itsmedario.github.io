<template>
  <div>
    <Game :type="'Towers'">
      <h2 slot="title">Türme bauen</h2>
      <p slot="description">Setze die Türme so, dass man mit
         den Türmen alle Kanäle überwachen kann.</p>
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
