<template>
  <base-card>
    <h3>Agende sua visita</h3>
  </base-card>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="data">Selecione o Dia</label>
      <input type="date" id="data" v-model="data"/>
    </div>
    <div class="form-control">
      <label for="hora">Selecione a Hora</label>
      <select id="hora" v-model="hora" :disabled="dataIsSelected"> 
        <option v-for="horarios in disponiveis" :key="horarios"> {{ horarios }}</option>
      </select>
    </div>
    <div class="actions">
      <base-button>Marcar visita</base-button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      data: '',
      hora: '',
      marcados: [],
      horariosOcupados: [],
      dataIsSelected: true
    };
  },
  computed: {
      disponiveis() {
        return ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00',
         '15:00', '16:00', '17:00'].filter((item) => !this.horariosOcupados.includes(item))
      }
  },
  methods: {
    submitForm() {
      this.marcados.push({ data: this.data, hora: this.hora})
      this.$store.dispatch('houses/setVisitHouse', {
        ...this.selectedHouse,
        horarios: this.marcados
      });
      this.$router.replace('/houses');

    },
  },
  created() {
    this.selectedHouse = this.$store.getters['houses/houses'].find(
      (apartment) => apartment.id === this.$route.params.id
    );
  },
  watch: {
    data() {
      this.dataIsSelected = false
      this.horariosOcupados = []
      var hor = []
      if (this.selectedHouse.horarios) {
        hor = this.selectedHouse.horarios
      }
      hor.forEach(element => {
        if (element.data == this.data) {
          this.marcados.push({hora: element.hora, data: element.data })
          this.horariosOcupados.push(element.hora)
        } else {
          this.marcados.push({hora: element.hora, data: element.data })
        }
      });
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}


select {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

select:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>