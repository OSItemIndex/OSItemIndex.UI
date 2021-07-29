<template>
  <v-app-bar app>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <Title />
      <v-spacer />
      <Search />
      <v-spacer />
      <Tooltips />
    </template>
    <template v-else>
      <Search />
      <Tooltips />
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
