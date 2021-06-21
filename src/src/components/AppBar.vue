<template>
  <v-app-bar app>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <Title />
      <v-spacer />
    </template>
    <Search />
    <v-spacer />
    <Tooltips />
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
