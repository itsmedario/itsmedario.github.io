<template>
  <div id="Game">
    <Buttons/>
    <div class="flex-center flex-row">
      <slot name="title">Unintentionally empty title!</slot>
      <slot name="description">Unintentionally empty description!</slot>
    </div>
    <component
      :is="this.type"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Buttons from '@/components/Buttons.vue';
import Towers from '@/components/towers/Towers.vue';
import Bridges from '@/components/bridges/Bridges.vue';

@Component({
  components: {
    Buttons,
    Towers,
    Bridges,
  },
})
export default class Game extends Vue {
  @Prop({ required: true })
  type!: string;

  get currentGameComponent() {
    return this.type;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
