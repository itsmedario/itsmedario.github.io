<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br/>
    <p>Author: Dario Naepfer</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Buttons from '@/components/Buttons.vue';

export default class About extends Vue {}
</script>

<style scoped>
</style>
