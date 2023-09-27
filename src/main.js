/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// main.js
import '@/styles/globalStyles.scss';
import '@/styles/customStyles.scss';
import '@/styles/animations.scss';
// import '@/utils/butter';
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
