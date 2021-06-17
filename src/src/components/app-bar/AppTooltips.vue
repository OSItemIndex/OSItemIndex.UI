<template>
  <span class="app-tooltips">
    <template v-if="$vuetify.breakpoint.smAndUp">
      <vertical-divider />
      <tooltip-btn
        icon="mdi-code-json"
        tooltip="Swagger UI"
        href="https://github.com/OSItemIndex/OSItemIndex"
        target="_blank"
      />
      <tooltip-btn
        icon="mdi-github"
        tooltip="GitHub"
        href="https://github.com/OSItemIndex/OSItemIndex"
        target="_blank"
      />
      <tooltip-btn
        icon="$vuetify.icons.kofi"
        tooltip="Buy me a coffee"
        href="https://ko-fi.com/twinki"
        target="_blank"
      />
    </template>

    <template v-else>
      <tooltip-btn
        icon="mdi-github"
        tooltip="GitHub"
        href="https://github.com/OSItemIndex/OSItemIndex"
        target="_blank"
      />
    </template>
  </span>
</template>

<script>
export default {
  name: "AppTooltips",
};
</script>
