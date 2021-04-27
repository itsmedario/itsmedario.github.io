<template>
  <div>
    <table>
      <tr>
        <td>
          <h3  style="display: inline-block">Boot 1</h3>
          <img src="@/assets/transport/boat1.png" alt="Boote"  style="display: inline-block">
        </td>
        <td class="dropzone responsive"></td>
        <td class="dropzone responsive"></td>
        <td class="dropzone responsive"></td>
      </tr>
      <tr>
        <td>
          <h3>Boot 2</h3>
          <img src="@/assets/transport/boat2.png" alt="Boote">
        </td>
        <td class="dropzone responsive"></td>
        <td class="dropzone responsive"></td>
        <td class="dropzone responsive"></td>
      </tr>
      <tr>
        <td>
          <h3>Boot 3</h3>
          <img src="@/assets/transport/boat3.png" alt="Boote">
        </td>
        <td class="dropzone responsive"></td>
        <td class="dropzone responsive"></td>
        <td class="dropzone responsive"></td>
      </tr>
    </table>

    <div v-for="i in numbers" :key="i">
      <img :src="require('@/assets/weights/tree' + i + '.png')">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Towers extends Vue {
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

tr h3, img {
  display: inline-block;
  margin: 0.5em;
}

</style>
