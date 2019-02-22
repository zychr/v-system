import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        name:'iwen',
        age:12
    },
    mutations:{
        showname(state,msg){
           state.name=msg
        }
    }
})
 export default store