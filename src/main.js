import { createApp } from "vue";
import "typeface-work-sans";

import "./styles.css";
import App from "./App.vue";
import store from "./store";

createApp(App).use(store).mount("#app");
