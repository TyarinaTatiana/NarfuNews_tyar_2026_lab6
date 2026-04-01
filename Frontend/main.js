import { createApp } from 'vue';
import App from './App.vue';

import './style.scss'
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import {vuetify} from './src/plugins/vuetify.ts'


createApp(App)
.use(vuetify)
.mount('#app');
