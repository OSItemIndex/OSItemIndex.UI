<template>
  <v-app>
    <AppBar />
    <v-main>
      <IndexTable />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import AppBar from "./components/app-bar/AppBar.vue";
import IndexTable from "./components/content/IndexTable.vue";

@Component({
  components: {
    AppBar,
    IndexTable,
  },
})
export default class App extends Vue {}
</script>
