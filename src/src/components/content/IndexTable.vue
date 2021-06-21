<template>
  <h1 v-text="test" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class IndexTable extends Vue {
  created(): void {
    return;
  }
}
</script>
