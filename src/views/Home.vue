<template>
  <div id="home">
    <Header/>
    <br/>
    <div class="cards card clickable">
        <div v-for="task in items" :key="task.id">{{ task.name }}</div>
        <li>Hi</li>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import tasks from '@/views/Tasks';
import Buttons from '@/components/Buttons.vue';

@Component({
  components: {
    Header,
    HelloWorld,
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
