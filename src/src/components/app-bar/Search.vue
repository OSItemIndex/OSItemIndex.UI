<template>
  <v-text-field
    ref="searchInput"
    placeholder="Item name or ID"
    v-model="indexSearchString"
    :label="label"
    :autofocus="!$vuetify.breakpoint.mobile"
    prepend-inner-icon="mdi-magnify"
    dense
    solo
    hide-details
    outlined
    clearable
  >
  </v-text-field>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Ref } from "vue-property-decorator";

const IN_BROWSER = typeof window !== "undefined";

@Component
export default class Search extends Vue {
  @Ref() readonly searchInput!: HTMLInputElement;
  static readonly searchKey = "/";
  static readonly blurKey = "Escape";
  searchLabel = "Search the index..";
  indexSearchString = "";

  get label(): string {
    if (!this.$vuetify.breakpoint.mobile)
      this.searchLabel += " " + "[press " + Search.searchKey + "]";
    return this.searchLabel;
  }

  mounted(): void {
    if (!IN_BROWSER) return;
    document.addEventListener("keydown", this.onDocumentKeydown);
  }

  beforeDestroy(): void {
    if (IN_BROWSER) return;
    document.removeEventListener("keydown", this.onDocumentKeydown);
  }

  resetSearch(): void {
    this.searchInput.blur();
    this.indexSearchString = "";
  }

  onDocumentKeydown(event: KeyboardEvent): void {
    let inSearch: boolean =
      event.target === (this.searchInput as unknown as Vue).$refs.input;

    switch (event.key) {
      case Search.searchKey: {
        if (!inSearch) {
          this.searchInput.focus();
          event.preventDefault();
        }
        break;
      }

      case Search.blurKey: {
        if (inSearch) {
          this.resetSearch();
          event.preventDefault();
        }
        break;
      }
    }
  }
}
</script>
