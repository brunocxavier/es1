export default {
  async getBairros(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://es-residencias-default-rtdb.firebaseio.com/bairros.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const bairros = [];

    for (const key in responseData) {
      const bairro = {
        id: key,
        nome: responseData[key].nome
      };
      bairros.push(bairro);
    }

    context.commit('setBairros', bairros);
    context.commit('setFetchTimestamp');
  }
};
