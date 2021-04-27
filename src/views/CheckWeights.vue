<template>
  <div>
    <Game :type="'Weights'">
      <h2 slot="title">Ladungen überprüfen</h2>
      <p slot="description">Überprüfe, ob alle Gewichte korrekt verteilt wurden</p>
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

export default class CheckWeights extends Vue {
  x = 'Test';
}
</script>

<style scoped></style>
