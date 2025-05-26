import { createApp } from 'vue'
import './style.css'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue'

// PrimeVue 4.x 的元件必須在 main.js 用 app.component 全域註冊
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)

// mount 要放最後
app.mount('#app')
