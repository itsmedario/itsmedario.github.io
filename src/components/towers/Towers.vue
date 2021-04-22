<template>
<div>
  <img :src="require('/src/assets/maps/map3_empty.png')" style="width:60%">
  <img :src="require('/src/assets/bridges/tower.png')" style="width:4%">
  <ItemSelection :items="items"/>

  <div id="row" class="flex-item flex-center">
      <table>
        <tbody>
          <tr>
            <!-- left view -->
            <td id="left-view" class="card tree-view ">
              {{ leftView }}
            </td>
            <!-- values -->
            <td
              v-for="field in values"
              :id="`field-${field.id}`"
              :key="`field-${field.id}`"
              class="dropzone tree-field responsive"
              @click="moveTree($event, field.id)"
              draggable
              @dragstart="moveTree($event, field.id)"
              @dragover.prevent
              @dragend.prevent
              @drop.stop.prevent="moveTree($event, field.id)"
            >
              />
            </td>
            <!-- right view -->
            <td id="right-view" class="card tree-view ">
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
<style scoped></style>
