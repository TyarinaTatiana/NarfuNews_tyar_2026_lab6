import { createApp } from 'vue';
import App from './App.vue';

import './style.scss'
import '@mdi/font/css/materialdesignicons.css';
import {vuetify} from './src/plugins/vuetify.ts'
import {registerServices} from "@/src/plugins/api";
import router from "@/src/router";import moment from 'moment/dist/moment'
import 'moment/dist/locale/ru'
moment.locale('ru')


const app = createApp(App);
registerServices(app);
app.provide("moment", moment);
    
app.use(vuetify);
app.use(router);
app.mount('#app')

