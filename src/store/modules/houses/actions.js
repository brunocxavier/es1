export default {
  async registerHouse(context, data) {
    const houseData = {
      id: new Date().getTime(),
      aluguel: data.aluguel,
      area: data.area,
      armario: data.armario,
      descricao: data.descricao,
      endereco: data.endereco,
      quartos: data.quartos,
      salas: data.salas,
      suites:  data.suites,
      vagas:  data.vagas,
      bairro: data.bairro,
      horarios: []
    };

    const response = await fetch(
      `https://es-residencias-default-rtdb.firebaseio.com/houses/${houseData.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(houseData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerHouse', {
      ...houseData,
    });
  },
  async loadHouses(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://es-residencias-default-rtdb.firebaseio.com/houses.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const houses = [];

    for (const key in responseData) {
      const house = {
        id: key,
        aluguel: responseData[key].aluguel,
        area: responseData[key].area,
        armario: responseData[key].armario,
        descricao: responseData[key].descricao,
        endereco: responseData[key].endereco,
        quartos: responseData[key].quartos,
        salas: responseData[key].salas,
        suites:  responseData[key].suites,
        vagas:  responseData[key].vagas,
        bairro: responseData[key].bairro,
        horarios: responseData[key].horarios
      };
      houses.push(house);
    }

    context.commit('setHouses', houses);
    context.commit('setFetchTimestamp');
  },
  async setVisitHouse(context, data) {
    const houseData = {
      id: data.id,
      aluguel: data.aluguel,
      area: data.area,
      armario: data.armario,
      descricao: data.descricao,
      endereco: data.endereco,
      quartos: data.quartos,
      salas: data.salas,
      suites:  data.suites,
      vagas:  data.vagas,
      bairro: data.bairro,
      horarios: data.horarios
    };

    const response = await fetch(
      `https://es-residencias-default-rtdb.firebaseio.com/houses/${houseData.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(houseData)
      }
    );

    context.commit('registerVisit', {
      ...houseData,
    });


    if (!response.ok) {
      // error ...
    }
  },
  async deleteHouse(context, data) {
    const response = await fetch(
      `https://es-residencias-default-rtdb.firebaseio.com/houses/${data.id}.json`,
      {
        method: 'DELETE',
        body: JSON.stringify(data)
      }
    );

    if (!response.ok) {
      // error ...
    }

    context.commit('deleteHouse', data)
  }
};
