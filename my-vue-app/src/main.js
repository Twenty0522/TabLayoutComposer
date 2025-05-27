import { createApp } from 'vue'
import './style.css'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue'

// 引入 PrimeVue 的按鈕
import Button from 'primevue/button';

// 引入 PrimeVue 的提示框
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

// 引入 PrimeVue 的勾選項目
import Checkbox from 'primevue/checkbox';
import CheckboxGroup from 'primevue/checkboxgroup';
import RadioButton from 'primevue/radiobutton';

// PrimeVue 4.x 的元件必須在 main.js 用 app.component 全域註冊
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'

// 引入 Vue Draggable
import draggable from 'vuedraggable'


const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

// 按鈕
app.component('Button', Button)
// 提示框
app.component('Dialog', Dialog)
app.component('InputText', InputText)

// 分割
app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)

// 勾選項目
app.component('Checkbox', Checkbox);
app.component('CheckboxGroup', CheckboxGroup);
app.component('RadioButton', RadioButton)

// mount 要放最後
app.mount('#app')

// Vue Draggable
app.component('draggable', draggable);
