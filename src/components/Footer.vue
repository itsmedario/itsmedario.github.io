<template>
  <footer>
    <div class="logo-ethz" style="float:right">
      <a href="https://ethz.ch" target="blank">
        <img _ngcontent-c1="" src="@/assets/ethz-logo.svg" style="width:150px;height:50px;"/>
      </a>
    </div>
    <div style="float:right"><h1 style="margin-left: 20px;margin-right: 20px">|</h1></div>
    <div class="logo-abz" style="float:right">
      <a href="http://abz.inf.ethz.ch/" target="blank">
        <img src="@/assets/abz-logo.png" style="width:150px;height:80px;"/>
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
