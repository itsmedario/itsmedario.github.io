<template>
  <div class="home">
    <Header/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <br/>
    <div>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
      </ul>
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
export default class Home extends Vue {}
</script>
