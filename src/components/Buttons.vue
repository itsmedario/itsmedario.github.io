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

  <modal class="modal" v-if="showTutorial">
    <div class="tutorial">
      <div class="tutorial-box">
        <p>Dies ist eine Anleitung zum Spiel.</p>
        <button style="float:right;" @click="showTutorial = false">&times;</button>
      </div>
    </div>
  </modal>
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

.modal {
  width: 70%;
}

.tutorial {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.tutorial-box {
  display: table-cell;
  vertical-align: middle;
  width: 60%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

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
