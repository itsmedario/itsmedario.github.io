<template>
  <div>
    <!-- <Buttons/> -->
    <img :src="require('/src/assets/transport/boats.png')" style="padding-left:15px"/>
    <h1>{{ x }}</h1>
    <div>Description of the task</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Buttons from '../components/Buttons.vue';

@Component({
  components: {
    Buttons,
  },
})
export default class CheckWeights extends Vue {
  x = 'Hey alltogether';
}
</script>

<style scoped>
</style>
