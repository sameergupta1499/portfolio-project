// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//         cursorPoints: { x: 0, y: 0 }, // Initial cursor position
//     },
//     mutations: {
//         setCursorPoints(state, { x, y }) {
//             state.cursorPoints = { x, y };
//         },
//     },
//     actions: {
//         updateCursorPoints({ commit }, event) {
//             const x = event.clientX;
//             const y = event.clientY;
//             commit('setCursorPoints', { x, y });
//         },
//     },
// });

import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cursorPoints: { x: 0, y: 0 }, // Initial cursor position
        };
    },
    mutations: {
        setCursorPoints(state, { x, y }) {
            state.cursorPoints = { x, y };
        },
    },
    actions: {
        updateCursorPoints({ commit }, event) {
            const x = event.clientX;
            const y = event.clientY;
            commit('setCursorPoints', { x, y });
        },
    },
});
export default store;