<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadHouses(true)">Recarregar</base-button>
          <base-button v-if="!isLoading" link to="/registerHouse">Registre uma Casa</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasHouses">
          <house-item
            v-for="house in filteredHouses"
            :key="house.id"
            :id="house.id"
            :aluguel="house.aluguel"
            :area="house.area"
            :armario="house.armario"
            :descricao="house.descricao"
            :endereco="house.endereco"
            :quartos="house.quartos"
            :salas="house.salas"
            :vagas="house.vagas"
            :bairro="house.bairro"
          ></house-item>
        </ul>
        <h3 v-else>Nenhuma casa encontrada.</h3>
      </base-card>
  </div>
</template>

<script>
import HouseItem from '../../components/houses/HouseItem.vue';

export default {
  components: {
    HouseItem
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredHouses() {
      const coaches = this.$store.getters['houses/houses'];
      return coaches;
    },
    hasHouses() {
      return !this.isLoading && this.$store.getters['houses/hasHouses'];
    },
  },
  created() {
    this.loadHouses();
  },
  methods: {
    async loadHouses(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('houses/loadHouses', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>