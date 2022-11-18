import { createStore } from 'vuex'
import { state } from './state'
import { getters } from './getters'
import { actions }from './actions'
import { mutations } from './mutations'
import Vuex from 'vuex';

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})