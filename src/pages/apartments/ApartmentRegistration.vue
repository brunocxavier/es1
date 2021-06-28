<template>
  <section>
    <base-card>
      <h2>Registre um Apartamento!</h2>
      <apartment-form @save-data="saveData"></apartment-form>
    </base-card>
  </section>
</template>

<script>
import ApartmentForm from '../../components/apartments/ApartmentForm.vue'

export default {
  components: {
    ApartmentForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('apartments/registerApartment', data);
      this.$router.replace('/apartments');
    }
  }
};
</script>