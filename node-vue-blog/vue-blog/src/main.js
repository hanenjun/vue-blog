import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import router from './router'
import store from './store'
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.directive('reinbow',{
  bind(el){
    el.style.color ="#"+Math.random().toString(16).slice(2,8);
  }
})
Vue.directive("theme",{
  bind(el,binding){
    if(binding.value == "wide"){
      // el.style.maxWidth = "1260px"
    }else if(binding.value == 'narrow'){
      // el.style.maxWidth = "560px"
    }
    if(binding.arg == "column"){
      // el.style.background = "#6677cc";
      // el.style.padding = "20px"
    }
  }
})
Vue.filter("to-uppercase",(value)=>{
  return value.toUpperCase()
})
Vue.filter("snipet",(value)=>{
  return value.slice(0,100)+"..."
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
