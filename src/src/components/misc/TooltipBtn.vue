<template>
  <span class="v-tooltip-btn d-inline-block">
    <v-tooltip bottom content-class="v-tooltip-btn__content" open-delay="200">
      <template #activator="{ on }">
        <v-btn
          icon
          v-bind="$attrs"
          v-on="{
            ...on,
            ...$listeners,
          }"
        >
          <slot v-if="$slots.icon" name="icon" />
          <v-icon v-else v-text="icon" />
        </v-btn>
      </template>
      <span v-text="tooltip"></span>
    </v-tooltip>
  </span>
</template>

<script lang="ts">
export default {
  name: "TooltipBtn",
  inheritAttrs: false,
  props: {
    icon: String,
    tooltip: String,
  },
};
</script>
