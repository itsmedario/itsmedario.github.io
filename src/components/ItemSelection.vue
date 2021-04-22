<template>
<div
    id="item-selection"
    class="flex-item flex-wrap flex-center-horizontally flex-row"
  >
    <div
      v-for="item in items"
      :id="`item-selection-${item.id}`"
      :key="item.id"
      :class="[
        {
          selected: item.type === selected,
        },
        item.class,
      ]"
      class="flex-item flex-wrap flex-center card clickable responsive"
      @click="$emit('selected', item.type)"
      draggable
      @dragstart="$emit('selected', item.type)"
      @dragover.prevent
      @dragend.prevent
      @drop.prevent
    >
      <img v-if="isPath(item.img)" :src="require('@/assets/' + item.img)" />
      <div v-else>{{ item.img }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export type item = {
  id: number;
  type: number;
  value: number;
  img: string;
};

@Component
export default class ItemSelection extends Vue {
  selected = null;

  @Prop({ required: true })
  items!: item[];

  static isPath(path: string): boolean {
    return path.includes('/');
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
