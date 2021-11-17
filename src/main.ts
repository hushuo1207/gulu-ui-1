import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { router } from './router'




// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
