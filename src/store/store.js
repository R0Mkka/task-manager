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
        // ADD AN ITEM
        addToDo(state, payload) {
            state.toDoList = [ ...state.toDoList, payload ];
        },
        addInProgress(state, payload) {
            state.inProgressList = [ ...state.inProgressList, payload ];
        },
        addFinished(state, payload) {
            state.finishedList = [ ...state.finishedList, payload ];
        },
        // CLEAR THE LIST
        toDoClear(state) {
            state.toDoList = [];
        },
        inProgressClear(state) {
            state.inProgressList = [];
        },
        finishedClear(state) {
            state.finishedList = [];
        },
        // REMOVE AN ITEM
        toDoRemoveItem(state, payload) {
            state.toDoList = state.toDoList.filter(item => item.id !== payload);
        },
        inProgressRemoveItem(state, payload) {
            state.inProgressList = state.inProgressList.filter(item => item.id !== payload);
        },
        finishedRemoveItem(state, payload) {
            state.finishedList = state.finishedList.filter(item => item.id !== payload);
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