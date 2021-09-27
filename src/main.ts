import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

// For font awesome icon
// Note: currently importing all icons, better to import icons requires to save space
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

/* Creating a Vue JS app with:
    multi-languge support (i18n)
    state (store)
    url changing (router)
    icons (fontAwesome)
*/
createApp(App)
    .use(i18n)
    .use(store)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
