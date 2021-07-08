import { createApp } from "vue";
import "typeface-work-sans";

import "./styles.css";
import App from "./App.vue";
import store from "./store";

store.dispatch("loadRaces");

createApp(App).use(store).mount("#app");
