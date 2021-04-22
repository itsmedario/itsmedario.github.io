<template>
<div>
  <img :src="require('/src/assets/maps/map1.png')" style="width:60%">
  <img :src="require('/src/assets/bridges/bridge_short.png')" style="width:6%">
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Bridges extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
