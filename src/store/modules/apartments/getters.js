export default {
  apartments(state) {
    return state.apartments;
  },
  hasApartments(state) {
    return state.apartments && state.apartments.length > 0;
  }
};