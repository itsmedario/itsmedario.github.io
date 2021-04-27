<template>
<div>
  <div class="tower-game">
    <div class="img-background">
      <table>
        <tr>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
        </tr>
        <tr>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
        </tr>
        <tr>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
        </tr>
      </table>
    </div>
  </div>

  <div id="container">
    <img :src="require('/src/assets/maps/map3_empty.png')" draggable="false">
    <div class="overlay">
      <table :style="{'background-image':'url(/src/assets/maps/map3_empty.png)'}">
        <tr>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
        </tr>
        <tr>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
        </tr>
        <tr>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
          <td class="dropzone tower-field responsive"></td>
        </tr>
      </table>
    </div>
  </div>

  <img :src="require('/src/assets/maps/map3_empty.png')" style="width:60%"
   draggable="false" usemap="#workmap">
  <map name="workmap">
    <area shape="rect" coords="80,10,133,60" alt="Build" href="/about">
    <area shape="rect" coords="255,10,310,70" alt="Build" href="/about">
  </map>

  <img :src="require('/src/assets/bridges/tower.png')" style="width:4%">
  <ItemSelection :items="items"/>

  <div id="row" class="flex-item flex-center">
      <table>
        <tbody>
          <tr>
            <!-- left view -->
            <td id="left-view" class="card tower-view ">
              {{ leftView }}
            </td>
            <!-- values -->
            <td
              v-for="field in values"
              :id="`field-${field.id}`"
              :key="`field-${field.id}`"
              class="dropzone tower-field responsive"
              @click="movetower($event, field.id)"
              draggable
              @dragstart="movetower($event, field.id)"
              @dragover.prevent
              @dragend.prevent
              @drop.stop.prevent="movetower($event, field.id)"
            >
              />
            </td>
            <!-- right view -->
            <td id="right-view" class="card tower-view ">
              {{ rightView }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ItemSelection from '@/components/ItemSelection.vue';

const items = [
  {
    id: 3,
    type: 3,
    value: 3,
    img: 'bridges/tower.png',
  },
];

const values = [
  {
    id: 3,
    path: '/towers/check',
    title: 'Türme überprüfen',
    img: 'bridges/tower.png',
    view: 'CheckTowers',
    component: 'CheckWeights',
  },
];

@Component({
  components: {
    ItemSelection,
  },
})

export default class Towers extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tower-game {
  display: flex;
  justify-content: center;
  width: 100%;
}

.img-background {
  content: url("../../assets/maps/map3_empty.png");
  background-repeat: no-repeat;
  position: relative;
}

.container {
  position: relative;
}

.overlay {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
}

.tower-field {
  height: 15% !important;
  width: 5% !important;
}

.tower-game table {
  position: absolute;
  top:0;
  left: 0;
  align-content:center;
  align-self: center;
  border-spacing: 50px;
  padding: 1em;
  width: 60%;
  z-index: 2;
}

tr {
  padding: 1em;
}

td {
  padding: 1em;
}

</style>
