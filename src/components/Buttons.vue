<template>
<div>
  <div class="buttons">
    <router-link to="/"><button class="flex-item flex-center card clickable responsive">
      <h3>Zurück</h3>
      <img :src="require('/src/assets/icons/back.png')"/></button>
    </router-link>

    <button class="flex-item flex-center card clickable responsive" @click="emitNewStart()">
      <h3>Nächste Aufgabe</h3>
      <img :src="require('/src/assets/icons/skip.png')"/>
    </button>

    <button class="flex-item flex-center card clickable responsive" @click="$emit('new-start')">
      <h3>Neu starten</h3>
      <img :src="require('/src/assets/icons/restart.png')"/>
    </button>

    <button class="flex-item flex-center card clickable responsive" @click="check()">
      <h3>Überprüfen</h3>
      <img :src="require('/src/assets/icons/check.png')"/>
    </button>

    <button class="flex-item flex-center card clickable responsive" @click="showTutorial = true">
      <h3>Anleitung: {{ counter }}x</h3>
      <img :src="require('/src/assets/icons/help.png')"/>
    </button>
  </div>

</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Buttons extends Vue {
  counter = 0;

  showTutorial = false;

  increaseCounter() {
    this.counter += 1;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.buttons {
  position: absolute;
  left: 0;
  font-size: 20px;
}

.buttons a{
  text-decoration: none;
}

.buttons button{
  padding: 20px;
}

.buttons button img{
  width: 55px;
}

.buttons h3{
  margin-right: 10px;
  display: none;
}

.buttons button:hover h3 {
  display: block;
}

</style>
