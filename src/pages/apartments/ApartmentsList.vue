<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadApartments(true)">Recarregar</base-button>
          <base-button v-if="!isLoading" link to="/registerApartment">Registre um Apartamento</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasApartments">
          <apartment-item
            v-for="apartment in filteredApartments"
            :key="apartment.id"
            :id="apartment.id"
            :aluguel="apartment.aluguel"
            :area="apartment.area"
            :armario="apartment.armario"
            :descricao="apartment.descricao"
            :endereco="apartment.endereco"
            :quartos="apartment.quartos"
            :jantar="apartment.jantar"
            :estar="apartment.jantar"
            :andar="apartment.andar"
            :portaria="apartment.portaria"
            :vagas="apartment.vagas"
            :bairro="apartment.bairro"
          ></apartment-item>
        </ul>
        <h3 v-else>Nenhum apartamento encontrado.</h3>
      </base-card>
  </div>
</template>

<script>
import ApartmentItem from '../../components/apartments/ApartmentIem.vue'

export default {
  components: {
    ApartmentItem
  },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
    filteredApartments() {
      const coaches = this.$store.getters['apartments/apartments'];
      return coaches;
    },
    hasApartments() {
      return !this.isLoading && this.$store.getters['apartments/hasApartments'];
    },
  },
  created() {
    this.loadApartments(true);
  },
  methods: {
    async loadApartments(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('apartments/loadApartments', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  watch: {
    'this.$router.path'() {
      console.log('aqui')
      this.loadApartments(true);
    }
  }
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