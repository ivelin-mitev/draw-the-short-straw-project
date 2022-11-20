export const actions = {
    SET_SOMETHING({ commit }, payload) {
        commit('SET_SOMETHING', payload);
    },
    SET_QUESTION({ commit }, payload) {
        commit('SET_QUESTION', payload)
    },
    SET_PLAYER({ commit }, payload) {
        commit('SET_PLAYER', payload)
    },
    SET_URL({ commit }, payload) {
        commit('SET_URL', payload)
    }
}