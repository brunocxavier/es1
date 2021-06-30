export default {
  registerHouse(state, payload) {
    state.houses.push(payload);
  },
  setHouses(state, payload) {
    state.houses = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  deleteHouse (state, payload){
    state.houses = state.houses.filter((item) => item.id != payload.id)
  },
  registerVisit (state, payload) {
    state.houses = state.houses.filter((item) => item.id != payload.id)
    state.houses.push(payload);
  }
};