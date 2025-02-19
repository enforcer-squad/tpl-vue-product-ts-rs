import { createApp } from 'vue';
import router from './routes';
import App from './App.vue';
import './index.global.less';

const app = createApp(App);
app.use(router);
app.mount('#root');
