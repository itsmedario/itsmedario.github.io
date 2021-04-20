<template>
  <div id="home">
    <Header/>
    <br/>
    <div>{{ items }}</div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import tasks from '@/views/Tasks';
import Buttons from '@/components/Buttons.vue';

@Component({
  components: {
    Header,
    Footer,
    Buttons,
  },
})
export default class Home extends Vue {
  static get items() {
    return tasks;
  }
}
</script>

<style scoped></style>
