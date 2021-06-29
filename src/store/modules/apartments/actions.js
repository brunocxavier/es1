export default {
  async registerApartment(context, data) {
    const apartmentData = {
      id: new Date().getTime(),
      aluguel: data.aluguel,
      area: data.area,
      armario: data.armario,
      descricao: data.descricao,
      endereco: data.endereco,
      quartos: data.quartos,
      jantar: data.jantar,
      estar: data.estar,
      andar: data.andar,
      portaria: data.portaria,
      suites:  data.suites,
      vagas:  data.vagas,
      bairro: data.bairro,
      horarios: []
    };

    const response = await fetch(
      `https://es-residencias-default-rtdb.firebaseio.com/apartment/${apartmentData.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(apartmentData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerApartment', {
      ...apartmentData,
    });
  },
  async loadApartments(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://es-residencias-default-rtdb.firebaseio.com/apartment.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const apartments = [];

    for (const key in responseData) {
      const apartment = {
        id: key,
        aluguel: responseData[key].aluguel,
        area: responseData[key].area,
        armario: responseData[key].armario,
        descricao: responseData[key].descricao,
        endereco: responseData[key].endereco,
        quartos: responseData[key].quartos,
        jantar: responseData[key].jantar,
        estar: responseData[key].estar,
        andar: responseData[key].andar,
        portaria: responseData[key].portaria,
        suites:  responseData[key].suites,
        vagas:  responseData[key].vagas,
        bairro: responseData[key].bairro,
        horarios: responseData[key].horarios
      };
      apartments.push(apartment);
    }

    context.commit('setApartments', apartments);
    context.commit('setFetchTimestamp');
  },
  async setVisitApartment(context, data) {
    const apartmentData = {
      id: data.id,
      aluguel: data.aluguel,
      area: data.area,
      armario: data.armario,
      descricao: data.descricao,
      endereco: data.endereco,
      quartos: data.quartos,
      jantar: data.jantar,
      estar: data.estar,
      andar: data.andar,
      portaria: data.portaria,
      suites:  data.suites,
      vagas:  data.vagas,
      bairro: data.bairro,
      horarios: data.horarios
    };

    const response = await fetch(
      `https://es-residencias-default-rtdb.firebaseio.com/apartment/${apartmentData.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(apartmentData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }
  }
};
