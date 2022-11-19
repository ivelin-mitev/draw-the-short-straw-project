export const getters = {
    appName(state){
        return state.appName
    },
    something(state){
        if(state.something){
            return state.something
        } 
        return "something is empty maaaan"
    },
    question(state){
        return state.question
    },
    players(state){
        return state.players
    }
}