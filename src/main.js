import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "typeface-work-sans";

createApp(App).use(store).mount("#app");
