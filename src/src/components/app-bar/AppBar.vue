<template>
  <v-app-bar app>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <AppTitle />
      <v-spacer />
    </template>

    <AppSearch />

    <v-spacer />

    <AppTooltips />
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
