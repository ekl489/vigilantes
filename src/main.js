import Vue from 'vue'
import App from './App.vue'

//CSS
import '../node_modules/bulma/css/bulma.css'
import '../node_modules/bulmaswatch/lux/bulmaswatch.min.css'

//import 'https://use.fontawesome.com/6fe95d9c79.js'
//import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/vue-awesome/icons'

// custom
//https://www.npmjs.com/package/string-similarity
var stringSimilarity = require('string-similarity')

new Vue({
  el: '#app',
  render: h => h(App)
})
