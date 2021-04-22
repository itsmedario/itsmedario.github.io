<template>
  <div>
    <Game>
      <h2 slot="title">Türme überprüfen</h2>
      <p slot="description">Überprüfe, ob man mit den
         Türmen alle Kanäle überwachen kann.</p>
    </Game>
    <img :src="require('/src/assets/maps/map3_empty.png')" style="padding-left:15px"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Buttons from '../components/Buttons.vue';
import Game from '../components/Game.vue';

@Component({
  components: {
    Buttons,
    Game,
  },
})

export default class CheckBridges extends Vue {}
</script>

<style scoped></style>
