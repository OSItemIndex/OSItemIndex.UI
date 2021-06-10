<template>
  <v-app-bar app>
    <v-app-bar-title>OSItemIndex</v-app-bar-title>
    <v-spacer />
    <ItemSearch />
    <v-spacer />
    <v-btn> test</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import ItemSearch from "@/components/ItemSearch.vue";

export default Vue.extend({
  name: "AppBar",

  components: {
    ItemSearch,
  },
});
</script>
