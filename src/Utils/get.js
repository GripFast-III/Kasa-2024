// const getData = async () => {
//   try {
//     const response = await fetch(`./../../public/logements.json`);
//     if (!response.ok) {
//       throw new Error(`Erreur lors de la récupération des données`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Erreur lors de la récupération des données`);
//     return [];
//   }
// };

const getData = async (url) => {
  try {
    const baseUrl = window.location.origin;
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    console.log("🚀 ~ getData ~ data:", data);
    return data;
  } catch (error) {
    console.error(`Erreur lors de la récupération des données`);
  }
};

const getDataByProperty = async (url, property) => {
  try {
    const data = await getData(url);
    const getDataByProperty = data[property];
    return getDataByProperty;
  } catch (error) {
    console.log(`Erreur lors de la récupération des données : ${error}`);
  }
};

const getDataById = async (url, id) => {
  console.log("🚀 ~ getDataById ~ id:", id);
  try {
    const data = await getData(url);
    const dataById = data.find((item) => item.id === id);
    console.log("🚀 ~ getDataById ~ dataById:", dataById);
    return dataById;
  } catch (error) {
    console.log(`Erreur lors de la récupération des données : ${error}`);
    throw error;
  }
};

export { getData, getDataByProperty, getDataById };
