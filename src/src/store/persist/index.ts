import { State } from "@/store";
import { Module } from "vuex";
import { PersistState } from "./types";

export const state: PersistState = {
  itemsVersion: undefined,
};

const namespaced: boolean = true;

export const persist: Module<PersistState, State> = {
  namespaced,
  state,
};
