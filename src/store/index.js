import { createStore } from 'vuex';

import housesModule from './modules/houses/index.js';
import apartmentsModule from './modules/apartments/index.js'

const store = createStore({
  modules: {
    houses: housesModule,
    apartments: apartmentsModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;