<template>
  <div id="Game">
    <Buttons/>
    <div class="flex-center flex-row">
      <slot name="title">Unintentionally empty title!</slot>
      <slot name="description">Unintentionally empty description!</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Buttons from '@/components/Buttons.vue';

@Component({
  components: {
    Buttons,
  },
})
export default class Game extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
