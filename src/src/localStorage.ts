import store from "store";
import expirePlugin from "store/plugins/expire";
import { VersionInfo } from "./api";

declare global {
  interface StoreJsAPI {
    set(key: string, value: any, expiration: number): any; // expirePlugin
  }
}

store.addPlugin(expirePlugin);

export default class LocalStorage {
    getVersion(): VersionInfo | null {
        return null;
    }
}
