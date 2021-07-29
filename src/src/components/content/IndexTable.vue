<template>
  <v-data-table
    v-model="selected"
    fixed-header
    hide-default-footer
    :headers="headers"
    :items="desserts"
    :single-select="true"
    item-key="name"
    class="elevation-1"
  >
    <template v-slot:top="{ pagination, options, updateOptions }">
      <v-data-footer
        disable-items-per-page
        :pagination="pagination"
        :options="options"
        @update:options="updateOptions"
        items-per-page-text="$vuetify.dataTable.itemsPerPageText"
      />
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import { OsItemIndexDb } from "@/api/db";
import Component from "vue-class-component";

// Define the component in class-style
@Component
export default class IndexTable extends Vue {
  private _db: OsItemIndexDb | null = null;
  ready = false;

  async created(): Promise<void> {
    this._db = OsItemIndexDb.getDb();
    await this._db.sync();
    await this._db.seed();
  }
}
</script>
