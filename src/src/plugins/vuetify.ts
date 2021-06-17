import Vue from "vue";
import Vuetify from "vuetify";
import KofiIcon from "@/components/icons/KofiIcon.vue";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: { dark: true },
  icons: {
    values: {
      kofi: {
        component: KofiIcon,
      },
    },
  },
});
