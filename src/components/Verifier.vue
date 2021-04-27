<template>
  <div id="tutorial-wrapper" v-if="showSolution" class="modal-mask"
   @mousedown.stop="showSolution = false; $emit('close-verifier')">
    <div class="modal-wrapper">
      <div class="modal-container"  @mousedown.stop>
        <div class="modal-header">
          <h3 v-if="correctSolution">Du hast die Aufgabe richtig gelöst!</h3>
          <h3 v-else>Das ist leider nicht richtig!</h3>
          <button class="exit-button" @click="showSolution = false;
           $emit('close-verifier')">
           &times;
           </button>
        </div>
        <div slot="body" class="flex-item flex-center flex-space-between flex-col">
          <div class="flex-item flex-center flex-space-between flex-row">
            <img v-if="correctSolution" :src="require('@/assets/beavers/correct.png')"/>
            <img v-else :src="require('@/assets/beavers/wrong.png')"/>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Verifier extends Vue {
  @Prop({ required: true })
  correctSolution!: boolean;

  @Prop({ required: true })
  showSolution!: boolean;
}
</script>

<style scoped>

.exit-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 6px;
  width: 2em;
  height: 2em;
  text-align: center;
  padding: 0;
  background: transparent;
  font-size: 1.7em;
  line-height: 1.7em;
  border-radius: 3px;
}

.description > p {
  margin: 1em;
  text-align: justify;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.tutorial-container {
  background-color: #fff;
}

.modal-container {
  position: relative;
  margin: 0px auto;
  width: 40%;
  padding: 20px 30px 40px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  padding-bottom: 30px;
}

.modal-header h3 {
  font-size: 1.4em;
}

.modal-body {
  margin: 20px 0;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
