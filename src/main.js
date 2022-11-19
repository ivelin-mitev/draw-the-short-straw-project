import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"

import "./assets/main.css";

import VueSocketIOExt from 'vue-socket.io-extended';
import { io }  from 'socket.io-client';

const socket = io('http://localhost:3000');

const app = createApp(App);

app.use(VueSocketIOExt, socket);
app.use(router);
app.use(store);
app.mount("#app");
