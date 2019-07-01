import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        toDoList: [],
        inProgressList: [],
        finishedList: []
    },
    mutations: {
        addToDo(state, payload) {
            state.toDoList = [ ...state.toDoList, payload ];
        },
        addInProgress(state, payload) {
            state.inProgressList = [ ...state.inProgressList, payload ];
        },
        addFinished(state, payload) {
            state.finishedList = [ ...state.finishedList, payload ];
        }
    },
    getters: {
        toDoList(state) {
            return state.toDoList;
        },
        inProgressList(state) {
            return state.inProgressList;
        },
        finishedList(state) {
            return state.finishedList;
        }
    }
});