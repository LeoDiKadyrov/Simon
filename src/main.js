import App from './App.vue'
import Vue from 'vue'

Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
    render: h => h(App),
}).$mount('#app')

