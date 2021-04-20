<template>
  <div>
    <Game>
      <h2 slot="title">Ladungen überprüfen</h2>
      <p slot="description">Überprüfe, ob alle Gewichte verteilt wurden, und für jedes Boot,
         ob es nicht zu schwer beladen ist.</p>
    </Game>
    <img :src="require('/src/assets/transport/boats.png')" style="padding-left:15px"/>
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

export default class CheckWeights extends Vue {
  x = 'Test';
}
</script>

<style scoped></style>
