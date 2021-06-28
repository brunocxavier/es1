export default {
  registerHouse(state, payload) {
    state.houses.push(payload);
  },
  setHouses(state, payload) {
    state.houses = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};