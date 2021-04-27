<template>
  <div id="home">
    <Header/>
    <br/>
    <div>{{ this.tasks }}</div>
    <div v-for="task in this.views" :key="task.id"
     class="flex-item flex-row flex-center flex-wrap card clickable">
      {{ task.title }}
      <img :src="require('@/assets/beavers/beaver.png')" style="padding:15px"/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import tasks from '@/views/Views';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class Home extends Vue {
  static get items() {
    return tasks;
  }

views: Array<{
  id: number;
  path: string;
  title: string;
  img: string;
  view: string;
  component: string;
}> = [
  {
    id: 1,
    path: '/weights/check',
    title: 'Ladungen überprüfen',
    img: 'transport/wood.png',
    view: 'CheckWeights',
    component: 'CheckWeights',
  },
  {
    id: 2,
    path: '/bridges/check',
    title: 'Brücken überprüfen',
    img: 'bridges/bridge_long.png',
    view: 'CheckWeights',
    component: 'CheckWeights',
  },
  {
    id: 3,
    path: '/towers/check',
    title: 'Türme überprüfen',
    img: 'bridges/tower.png',
    view: 'CheckTowers',
    component: 'CheckWeights',
  },
  {
    id: 4,
    path: '/boats/load',
    title: 'Boote laden',
    img: 'wood.png',
    view: 'LoadBoats',
    component: 'LoadBoats',
  },
  {
    id: 5,
    path: '/bridges/build',
    title: 'Brücken bauen',
    img: 'wood.png',
    view: 'BuildBridges',
    component: 'BuildBridges',
  },
  {
    id: 6,
    path: '/towers/build',
    title: 'Türme bauen',
    img: 'wood.png',
    view: 'BuildTowers',
    component: 'BuildTowers',
  },
];
}
</script>

<style scoped>
#home {
   background-image: url('/src/assets/logo.jpg');
}
</style>
