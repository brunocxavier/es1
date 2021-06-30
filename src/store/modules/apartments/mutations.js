export default {
  registerApartment(state, payload) {
    state.apartments.push(payload);
  },
  setApartments(state, payload) {
    state.apartments = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  deleteApartment (state, payload){
    state.apartments = state.apartments.filter((item) => item.id != payload.id)
  },
  registerVisit (state, payload) {
    state.apartments = state.apartments.filter((item) => item.id != payload.id)
    state.apartments.push(payload);
  }
};