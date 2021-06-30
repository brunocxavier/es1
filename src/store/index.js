import { createStore } from 'vuex';

import housesModule from './modules/houses/index.js';
import apartmentsModule from './modules/apartments/index.js';
import bairrosModule from './modules/bairros/index.js'

const store = createStore({
  modules: {
    houses: housesModule,
    apartments: apartmentsModule,
    bairros: bairrosModule
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