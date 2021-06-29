<template>
  <li>
    <h3>{{ endereco }} - {{ andar }}° andar</h3>
    <h4>Aluguel: ${{ aluguel }}</h4>
    <div class="actions">
      <base-button mode="outline" link :to="apartmentVisitLink">Visita</base-button>
      <base-button link :to="apartmentDetailsLink">Ver Detalhes</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'aluguel', 'area', 'armario', 'descricao', 'endereco',
   'quartos', 'jantar', 'estar', 'andar', 'portaria', 'vagas', 'bairro'],
  computed: {
    apartmentVisitLink() {
      return this.$route.path + '/' + this.id + '/visit'; // /coaches/id/visit
    },
    apartmentDetailsLink() {
      return this.$route.path + '/' + this.id; // /apartment/id
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>