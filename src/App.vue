<template>
  <div id="app">
    <div id="nav">
      <div id="button-menu" class="flex-item flex-row flex-center flex-wrap">
        <router-link to="/">
          <button class="card clickable">Home</button>
        </router-link>
        <router-link  to="/about">
          <button class="card clickable">About</button>
        </router-link>
        <router-link to="/check-weights">
          <button class="card clickable">Check Weights</button>
        </router-link>
        <router-link to="/build-towers">
          <button class="card clickable">Build Towers</button>
        </router-link>
        <router-link to="/build-bridges">
          <button class="card clickable">Build Bridges</button>
        </router-link>
      </div>
    <hr>
    </div>
    <router-view id="container"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class App extends Vue {}
</script>

<style>
body{
  background-color: #926cff;
}

hr{
  border: 1px solid #000;
  margin: 1em;
}

button {
  color: black;
  padding: 10px;
  font-weight: bold;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
canvas {
  max-width: 100%;
  max-height: 100%;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 0 auto;
}

#container {
  width: 80%;
  margin: 2em 10%;
}

.card {
  border-radius: 10px;
  background: white;
  border: 3px solid #e7e7e7;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9);
  transition: 0.3s;
  padding: 0.5em;
  margin: 1em;
}
.clickable:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);
  cursor: pointer;
}
.clickable:active {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
  transform: scale(0.98);
}
.flex-item {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-center {
  align-items: center;
  justify-content: center;
}
.flex-center-horizontally {
  justify-content: center;
}
.flex-center-vertivally {
  align-items: center;
}
.flex-stretch {
  align-items: stretch;
}
.flex-space-between {
  justify-content: space-between;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-flex {
  flex: 1;
}
.dropzone {
  border: 2px dashed #324197;
  background: #4658c2;
  border-radius: 5px;
  min-height: 1em;
  min-width: 1em;
  margin: 1em;
}
.equal-space {
  flex: 1 1 0px;
}
.big-text {
  font-size: 2em;
}
.responsive > img,
video {
  box-sizing: border-box;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
}
.selected {
  background: #eeee4e !important;
  border: 3px solid #dbdb47;
}
.locked {
  background: lightgray !important;
  border: 3px solid #cccccc;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
