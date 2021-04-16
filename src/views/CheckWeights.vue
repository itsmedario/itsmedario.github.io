<template>
  <div>
    <Buttons/>
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
export default class CheckWeights extends Vue {}
</script>

<style scoped>
</style>
