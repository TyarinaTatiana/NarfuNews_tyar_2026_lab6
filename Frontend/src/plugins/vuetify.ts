import '@mdi/font/css/materialdesignicons.css'
import {aliases, mdi} from 'vuetify/iconsets/mdi';
// Vuetify
import 'vuetify/styles';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { ru } from 'vuetify/locale'
import LogoIcon from "../icons/LogoIcon.vue";
import FireIcon from "../icons/FireIcon.vue";
import BookMarkIcon from "../icons/BookMarkIcon.vue";




// Components
export const vuetify = createVuetify({
    theme: {
        defaultTheme:  'light' 
      },
    locale: {
        locale: 'ru',
        current: 'ru'
      },
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            logoIcon: LogoIcon,
            fireIcon: FireIcon,
            bookMarkIcon: BookMarkIcon
        },
        sets: {
            mdi,
        },
    },
    components,
    directives,
});
