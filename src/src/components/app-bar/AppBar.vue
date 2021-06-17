<template>
  <v-app-bar app>
    <Title />
    <v-spacer />
    <Search />
    <v-spacer />
    <Tooltips />
  </v-app-bar>
</template>

<script>
import Vue from "vue";

import Title from "./Title.vue";
import Search from "./Search.vue";
import Tooltips from "./Tooltips.vue";

export default Vue.extend({
  name: "AppBar",
  components: {
    Title,
    Search,
    Tooltips,
  },
});
</script>
