export default {
  bairros(state) {
    return state.bairros;
  },
  hasApartments(state) {
    return state.apartments && state.apartments.length > 0;
  }
};