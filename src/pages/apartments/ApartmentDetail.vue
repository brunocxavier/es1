<template>
  <div>
    <section>
      <base-card>
        <h2>Endereco: {{ selectedApartment.endereco }} - Andar: {{ selectedApartment.andar }}</h2>
        <h3>Aluguel: R${{ selectedApartment.aluguel }}</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <h3>Bairro: {{ selectedApartment.bairro }} </h3>
        <h3>Area: {{ selectedApartment.area }} metros quadrados</h3>
        <h3 v-if="selectedApartment.armario"> Possui armario embutido</h3>
        <h3>Descricao: {{ selectedApartment.descricao }}</h3>
        <h3>Quartos: {{ selectedApartment.quartos }}</h3>
        <h3>Salas de Jantar: {{ selectedApartment.jantar }}</h3>
        <h3>Salas de Estar: {{ selectedApartment.estar }}</h3>
        <h3 v-if="selectedApartment.portaria"> Possui portaria 24hr</h3>
        <h3>Vagas: {{ selectedApartment.vagas }}</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interesado? Marque uma visita!</h2>
          <base-button link :to="contactLink">Marque sua visita</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      visit: true,
      selectedApartment: null,
    };
  },
  computed: {
    contactLink() {
      return this.$route.path + '/visit';
    },
  },
  created() {
    this.selectedApartment = this.$store.getters['apartments/apartments'].find(
      (apartment) => apartment.id === this.id
    );
  },
};
</script>