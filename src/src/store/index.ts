import Vuex, { StoreOptions } from "vuex";
import VuexPersistence from "vuex-persist";
import { PersistState } from "./persist/types";
import { persist } from "./persist";

export interface State {
  persist: PersistState;
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ["persist"],
});

const store: StoreOptions<State> = {
  modules: {
    persist: persist,
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<State>(store);
