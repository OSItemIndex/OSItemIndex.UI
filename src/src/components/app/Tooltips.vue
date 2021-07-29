<template>
  <span class="app-tooltips">
    <template v-if="$vuetify.breakpoint.smAndUp">
      <vertical-divider />
      <tooltip-btn
        v-for="tooltip in tooltips"
        :key="tooltip.label"
        :icon="tooltip.icon"
        :tooltip="tooltip.label"
        :href="tooltip.url"
        target="_blank"
      />
    </template>
    <template v-else>
      <tooltip-btn
        :icon="tooltips[0].icon"
        :tooltip="tooltips[0].label"
        :href="tooltips[0].url"
        target="_blank"
      />
    </template>
  </span>
</template>

<script lang="ts">
interface Tooltip {
  label: string;
  icon: string;
  url: string;
}

export default {
  name: "Tooltips",
  data(): { tooltips: Array<Tooltip> } {
    return {
      tooltips: [
        {
          label: "GitHub",
          icon: "mdi-github",
          url: "https://github.com/OSItemIndex/OSItemIndex",
        },
        { label: "Swagger UI", icon: "mdi-code-json", url: "./swagger" },
        {
          label: "Buy me a coffee",
          icon: "$vuetify.icons.kofi",
          url: "https://ko-fi.com/twinki",
        },
      ],
    };
  },
};
</script>
