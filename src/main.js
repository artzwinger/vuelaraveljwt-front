import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'
import {defaultConfig, plugin} from "@formkit/vue";
import {generateClasses} from "@formkit/themes";
import { ru } from '@formkit/i18n'
import { genesisIcons } from '@formkit/icons'
import genesis from '@formkit/themes/tailwindcss/genesis'

const app = createApp(App)

app.use(router)
app.use(plugin,
    defaultConfig({
        locales: [ru],
        locale: 'ru',
        icons: {
            ...genesisIcons,
        },
        config: {
            classes: generateClasses(genesis),
        },
    }))

app.mount('#app')
