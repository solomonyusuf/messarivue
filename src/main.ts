//import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App);

app.use(VueApexCharts);
app.component('apexchart', VueApexCharts);

app.mount('#app');
