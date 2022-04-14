import { createApp, ref } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar);

app.config.globalProperties.$leftDrawerOpen = ref(false);
app.config.globalProperties.$rightDrawerOpen = ref(false);

app.mount("#app");
