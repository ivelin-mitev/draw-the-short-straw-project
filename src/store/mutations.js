export const mutations = {
    SET_SOMETHING(state, data) {
        state.something = data;
    },
    SET_QUESTION(state, data) {
        state.question = data;
    },
    SET_PLAYER(state, data) {
        state.players.push(data);
    },
    SET_URL(state, data) {
        state.url = data
    }
}