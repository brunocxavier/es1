export default {
  registerApartment(state, payload) {
    state.apartments.push(payload);
  },
  setApartments(state, payload) {
    state.apartments = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};