<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="bairro">Bairro</label>
      <select v-model="bairro">
        <option>Buritis</option>
        <option>Havai</option>
        <option>Palmeiras</option>
      </select>
    </div>
    <div class="form-control">
      <label for="endereco">Endereco</label>
      <input
        type="text"
        id="endereco"
        v-model.trim="endereco"
        required
      />
    </div>
    <div class="form-control">
      <label for="aluguel">Aluguel</label>
      <input
        type="Number"
        id="aluguel"
        v-model.trim="aluguel"
        min="0"
        required
      />
    </div>
    <div class="form-control">
      <label for="area">Area</label>
      <input
        type="Number"
        id="area"
        v-model.trim="area"
        min="0"
        required
      />
    </div>
    <div class="form-control">
      <label for="armario">Armario embutido</label>
      <input
        type="checkbox"
        id="armario"
        v-model="armario"
        required
      />
    </div>
    <div class="form-control">
      <label for="descricao">Descrição</label>
      <input
        type="text"
        id="descricao"
        v-model.trim="descricao"
        required
      />
    </div>
    <div class="form-control">
      <label for="quartos">Quartos</label>
      <input
        type="Number"
        id="quartos"
        v-model="quartos"
        min="0"
        required
      />
    </div>
    <div class="form-control">
      <label for="salas">Salas</label>
      <input
        type="Number"
        id="salas"
        v-model="salas"
        min="0"
        required
      />
    </div>
    <div class="form-control">
      <label for="suites">Suites</label>
      <input
        type="Number"
        id="suites"
        v-model="suites"
        min="0"
        required
      />
    </div>
    <div class="form-control">
      <label for="vagas">Vagas</label>
      <input
        type="Number"
        id="vagas"
        v-model="vagas"
        min="0"
        required
      />
    </div>
    <base-button>Registre</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      endereco: '',
      aluguel: Number,
      area: Number,
      armario: Boolean,
      descricao: '',
      quartos: Number,
      salas: Number,
      suites: Number,
      vagas: Number,
      bairro: ''
    };
  },
  methods: {
    submitForm() {
      const formData = {
        endereco: this.endereco,
        aluguel: this.aluguel,
        area: this.area,
        armario: this.armario,
        descricao: this.descricao,
        quartos: this.quartos,
        salas: this.salas,
        suites: this.suites,
        vagas: this.vagas,
        bairro: this.bairro
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
  color: #3d008d;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
  color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
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

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>