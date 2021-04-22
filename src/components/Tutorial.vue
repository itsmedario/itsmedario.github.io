<template>
<div>
  <modal class="modal" v-if="showTutorial">
    <div class="tutorial" onclick="showTutorial = false">
      <div class="tutorial-box">
        <p>Dies ist eine Anleitung zum Spiel.</p>
        <button style="float:right;" @click="showTutorial = false">&times;</button>
    </div>
  </modal>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Tutorial extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
