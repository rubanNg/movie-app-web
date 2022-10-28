<template>
  <v-app>
    <v-col>
      <div search>
        <app-search />
      </div>
      <v-col>
        <v-row>
          <div menu>
            <app-menu />
          </div>
          <div content>content</div>
        </v-row>
      </v-col>
    </v-col>
  </v-app>
</template>

<script>
import AppMenu from './components/AppMenu.vue'
import AppSearch from './components/AppSearch.vue'

export default {
  name: 'App',
  components: {
    AppMenu,
    AppSearch,
  },
  data: () => ({}),
}
</script>

<style>
  html, body {
    height: 100vh !important;
    width: 100vw !important;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
  }
  * {
    box-sizing: border-box !important;
  }
</style>

<style scoped>

  .v-application {
    background-color: #100e19 !important;
  }
  [search] {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  [menu] {
    width: 20%;
    padding: 20px;
    padding-bottom: 0px;
    padding-top: 0px;
    height: calc(100vh - 90px);
    overflow: auto;
  }
  [content] {
    flex: 1;
    padding: 20px;
  }
</style>
