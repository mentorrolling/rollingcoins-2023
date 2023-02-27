const url = "https://api.coincap.io/v2/assets";
let limite = 10;

export const getCoins = async (termino) => {
  const coins = await fetch(url + "?limit=" + limite + "&search=" + termino);
  // const coins= fetch(`${url}?limit=${limite}`)
  const data = await coins.json();

  return data;
};

export const getCoinById = async (id) => {
  const coins = await fetch(url + "/" + id);
  // const coins= fetch(`${url}/${id}`)
  const data = await coins.json();

  return data;
};
