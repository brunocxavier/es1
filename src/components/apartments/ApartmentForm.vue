<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="bairro">Bairro</label>
      <select v-model="bairro" required>
        <option 
        v-for="item in filteredBairros"
        :key="item.id" 
        > {{ item.nome }} </option>
      </select>
    </div>
    <div class="form-control">
      <label for="endereco">Endereço</label>
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
        step="0.01"
        required
      />
    </div>
    <div class="form-control">
      <label for="condominio">Condomínio</label>
      <input
        type="Number"
        id="condominio"
        v-model.trim="condominio"
        min="0"
        step="0.01"
        required
      />
    </div>
    <div class="form-control">
      <label for="area">Área</label>
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
      />
    </div>
    <div class="form-control">
      <label for="portaria">Portaria 24hr</label>
      <input
        type="checkbox"
        id="portaria"
        v-model="portaria"
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
      <label for="estar">Salas de Estar</label>
      <input
        type="Number"
        id="estar"
        v-model="estar"
        min="0"
        required
      />
    </div>
    <div class="form-control">
      <label for="jantar">Salas de Jantar</label>
      <input
        type="Number"
        id="jantar"
        v-model="jantar"
        min="0"
        required
      />
    </div>
    <div class="form-control">
      <label for="andar">Andar</label>
      <input
        type="Number"
        id="andar"
        v-model="andar"
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
      condominio: Number,
      area: Number,
      armario: Boolean,
      portaria: Boolean,
      descricao: '',
      quartos: Number,
      jantar: Number,
      estar: Number,
      andar: Number,
      suites: Number,
      vagas: Number,
      bairro: ''
    };
  },
  computed: {
     filteredBairros() {
      const bairros = this.$store.getters['bairros/bairros'];
      return bairros;
    }
  },
  methods: {
    submitForm() {
      const formData = {
        endereco: this.endereco,
        aluguel: this.aluguel,
        condominio: this.condominio,
        area: this.area,
        armario: this.armario,
        portaria: this.portaria,
        descricao: this.descricao,
        quartos: this.quartos,
        jantar: this.jantar,
        estar: this.estar,
        andar: this.andar,
        suites: this.suites,
        vagas: this.vagas,
        bairro: this.bairro
      };
      this.$emit('save-data', formData);
    },
    async loadBairros() {
      try {
        await this.$store.dispatch('bairros/getBairros', {
          forceRefresh: true,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
    }
  },
  created() {
    this.loadBairros()
  }
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