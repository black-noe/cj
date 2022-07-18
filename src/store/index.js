import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import getters from "./getters";

/*vuex配置 */
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";


const store = new Vuex.Store({
  modules,
  getters,
  strict: debug
})

export default store
