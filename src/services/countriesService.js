import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1/all';

const getAllCountriesInfo = async () => {
    try {
      // use data destructuring to get data from the promise object
     const res = await axios.get(API_URL);
     if(res.data !== undefined){
     return res.data};
    } catch (error) {
      console.log(error);
    }
  };

const searchCountry = async(name) => {
  try {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    if (res.status !== 404) {
    const data = await res.json();
    return data;
  }
}  catch (error) {
  console.log(error)
}
}


const getOneCountry = async (oneCountry) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${oneCountry}?fullText=true`);
    console.log(res);
    const data = await res.json();
    console.log(data, "getOneCountry services");
    return data;
  } catch (error) {
    console.log(error)
  }
}



export {getAllCountriesInfo, searchCountry, getOneCountry};
