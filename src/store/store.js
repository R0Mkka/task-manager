import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        toDoList: [],
        inProgressList: [],
        finishedList: [],
        alertList: []
    },
    mutations: {
        // ADD AN ITEM
        addToDo(state, payload) {
            state.toDoList = [ ...state.toDoList, payload ];

            this.commit('updateLocaleStorage');
        },
        addInProgress(state, payload) {
            state.inProgressList = [ ...state.inProgressList, payload ];

            this.commit('updateLocaleStorage');
        },
        addFinished(state, payload) {
            state.finishedList = [ ...state.finishedList, payload ];

            this.commit('updateLocaleStorage');
        },
        addAlert(state, payload) {
            state.alertList = [ ...state.alertList, payload ];
        },
        //
        setToDoList(state, payload) {
            state.toDoList = payload;
        },
        setInProgressList(state, payload) {
            state.inProgressList = payload;
        },
        setFinishedList(state, payload) {
            state.finishedList = payload;
        },
        // CLEAR THE LIST
        toDoClear(state) {
            state.toDoList = [];

            this.commit('updateLocaleStorage');
        },
        inProgressClear(state) {
            state.inProgressList = [];

            this.commit('updateLocaleStorage');
        },
        finishedClear(state) {
            state.finishedList = [];

            this.commit('updateLocaleStorage');
        },
        // REMOVE AN ITEM
        toDoRemoveItem(state, payload) {
            state.toDoList = state.toDoList.filter(item => item.id !== payload);

            this.commit('updateLocaleStorage');
        },
        inProgressRemoveItem(state, payload) {
            state.inProgressList = state.inProgressList.filter(item => item.id !== payload);

            this.commit('updateLocaleStorage');
        },
        finishedRemoveItem(state, payload) {
            state.finishedList = state.finishedList.filter(item => item.id !== payload);

            this.commit('updateLocaleStorage');
        },
        alertRemoveItem(state, payload) {
            state.alertList = state.alertList.filter(item => item.id !== payload);
        },
        // LOCAL STORAGE
        loadFromLocaleStorage() {
            const stringData = localStorage.getItem('TaskManagerData');

            if (!stringData) {
                this.commit('updateLocaleStorage');

                return;
            }

            const taskManagerData = JSON.parse(stringData);

            this.commit('setToDoList', taskManagerData.toDoList);
            this.commit('setInProgressList', taskManagerData.inProgressList);
            this.commit('setFinishedList', taskManagerData.finishedList);
        },
        updateLocaleStorage() {
            localStorage.setItem('TaskManagerData', JSON.stringify({
                toDoList: this.state.toDoList,
                inProgressList: this.state.inProgressList,
                finishedList: this.state.finishedList
            }));
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
        },
        alertList(state) {
            return state.alertList;
        }
    }
});