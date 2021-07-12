import { createApp } from "vue";
import "typeface-work-sans";

import "./styles.css";
import App from "./App.vue";
import store from "./store";

store.dispatch("loadRaces");

setInterval(() => {
  store.dispatch("loadRaces");
}, 60 * 1000);

createApp(App).use(store).mount("#app");
