<template>
  <v-text-field
    dense
    solo
    hide-details
    outlined
    clearable
    autofocus
    placeholder="Item name or ID"
    label="Search the index... [press /]"
    prepend-inner-icon="mdi-magnify"
    ref="searchInput"
  >
  </v-text-field>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";

export default (
  Vue as VueConstructor<
    Vue & {
      $refs: {
        searchInput: HTMLElement;
      };
    }
  >
).extend({
  name: "ItemSearch",
  mounted() {
    document.addEventListener("keydown", this.onDocumentKeydown);
  },

  beforeDestroy() {
    document.removeEventListener("keydown", this.onDocumentKeydown);
  },

  methods: {
    onDocumentKeydown(event: KeyboardEvent) {
      if (
        event.key === "/" &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        event.target !== (this.$refs.searchInput as any).$refs.input
      ) {
        event.preventDefault();
        this.$refs.searchInput.focus();
      }
    },
  },
});
</script>
