<template>
  <div class="menu-items">
    <template v-for="genre in genresList" :key="genre">
      <div class="menu-item">
        <v-btn block color="secondary" elevation="2">{{ genre }}</v-btn>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { genresList } from '../const'
</script>

<style scoped>
  .menu-item {
    width: 100%;
    padding-bottom: 10px;
  }
</style>