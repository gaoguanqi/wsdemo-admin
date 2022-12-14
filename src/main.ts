import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";

import "virtual:svg-icons-register";
import svgIcon from "@/components/svg/index.vue"; // 引入组件

// 导入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "normalize.css/normalize.css";
import "./assets/styles/global.scss";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.component("svg-icon", svgIcon);
app.mount("#app");
