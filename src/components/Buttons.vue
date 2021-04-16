<template>
  <div id="buttons" style="float:left">
    <router-link to="/"  class="flex-item flex-center card clickable responsive">
      <img :src="require('/src/assets/icons/back.png')"/>
      <h3>Zurück</h3>
    </router-link>
    <router-link to="/"  class="flex-item flex-center card clickable responsive">
      <img :src="require('/src/assets/icons/back.png')"/>
      <h3>Zurück</h3>
    </router-link>
    <router-link to="/"  class="flex-item flex-center card clickable responsive">
      <img :src="require('/src/assets/icons/back.png')"/>
      <h3>Zurück</h3>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Buttons extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
