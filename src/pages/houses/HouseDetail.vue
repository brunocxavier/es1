<template>
  <div>
    <section>
      <base-card>
        <h2>Endereco: {{ selectedHouse.endereco }}</h2>
        <h3>Aluguel: R${{ selectedHouse.aluguel }}</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <h3>Bairro: {{ selectedHouse.bairro }} </h3>
        <h3>Area: {{ selectedHouse.area }} metros quadrados</h3>
        <h3 v-if="selectedHouse.armario"> Possui armario embutido</h3>
        <h3>Descricao {{ selectedHouse.descricao }}</h3>
        <h3>Quartos: {{ selectedHouse.quartos }}</h3>
        <h3>Salas: {{ selectedHouse.salas }}</h3>
        <h3>Vagas: {{ selectedHouse.vagas }}</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interesado? Marque uma visita!</h2>
          <base-button link :to="contactLink">Marque sua visita </base-button>
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
      selectedHouse: null,
    };
  },
  computed: {
    contactLink() {
      if(this.$route.path.includes('/visit')){
        return this.$route.path
      }
      return this.$route.path + '/visitHouse';
    },
  },
  created() {
    this.selectedHouse = this.$store.getters['houses/houses'].find(
      (house) => house.id === this.id
    );
  },
};
</script>