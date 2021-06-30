export default {
  setBairros(state, payload) {
    state.bairros = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};