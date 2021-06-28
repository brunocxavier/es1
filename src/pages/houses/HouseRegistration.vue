<template>
  <section>
    <base-card>
      <h2>Registre uma casa!</h2>
      <house-form @save-data="saveData"></house-form>
    </base-card>
  </section>
</template>

<script>
import HouseForm from '../../components/houses/HouseForm.vue'

export default {
  components: {
    HouseForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('houses/registerHouse', data);
      this.$router.replace('/houses');
    }
  }
};
</script>