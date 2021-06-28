export default {
  houses(state) {
    return state.houses;
  },
  hasHouses(state) {
    return state.houses && state.houses.length > 0;
  }
};