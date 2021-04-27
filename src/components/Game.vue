<template>
  <div id="Game">
    <Tutorial :show-modal=showTutorial @close-tutorial="showTutorial = false">
      <slot name="description" slot="description" />
      <slot name="video" slot="video" />
    </Tutorial>

    <Verifier :showSolution=showSolution :correctSolution="correctSolution"
     @close-verifier="showSolution = false; correctSolution = false" />

    <Buttons  @check-solution="checkSolution()" @show-tutorial="activateTutorial()"/>
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
import Tutorial from '@/components/Tutorial.vue';
import Verifier from '@/components/Verifier.vue';
import Buttons from '@/components/Buttons.vue';
import Towers from '@/components/towers/Towers.vue';
import Bridges from '@/components/bridges/Bridges.vue';
import Weights from '@/components/weights/Weights.vue';

@Component({
  components: {
    Tutorial,
    Verifier,
    Buttons,
    Towers,
    Bridges,
    Weights,
  },
})
export default class Game extends Vue {
  @Prop({ required: true })
  type!: string;

  showTutorial = false;

  correctSolution = false;

  showSolution = false;

  get currentGameComponent() {
    return this.type;
  }

  activateTutorial() {
    this.showTutorial = true;
  }

  checkSolution() {
    if (false) {
      this.correctSolution = true;
    }
    this.showSolution = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Game{
  margin-left: 90px;
}
</style>
