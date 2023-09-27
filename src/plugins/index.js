/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/plugins/store'; // Import the Vuex store

export function registerPlugins(app) {
  loadFonts();
  app
    .use(vuetify)
    .use(router)
    .use(store); // Use the Vuex store as a plugin
}
