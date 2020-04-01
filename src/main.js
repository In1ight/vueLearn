import Vue from 'vue'
import App from './App.vue'

export const eventEmitter = new Vue()
Vue.component('my-blog', {
  props: ['post'],
  template: `
          <button>Увеличить</button>
  `
})

new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
  
})



