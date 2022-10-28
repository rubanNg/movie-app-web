<template>
  <div container>
    <div class="search">
      <input type="text" />
    </div>
    <v-btn color="secondary" elevation="2">Искать</v-btn>
  </div>
</template>

<script setup>

</script>

<style scoped>
  [container] {
    width: 70%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 100%;
    height: 100%;
  }
  input:focus {
    outline: none;
  }
  input:focus-visible {
    outline: none;
  }
  .search {
    width: 70%;
    height: 36px;
    border-radius: 5px;
    border: 2px solid #1a5672;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    margin-right: 20px;
    background-color: #c5c5c5;
  }
</style>