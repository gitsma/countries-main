import React, { useState, useEffect }  from 'react';
import { getAllCountriesInfo, searchCountry, getOneCountry } from '../services/countriesService';
import Regions from './Regions';
import Countries from './Countries';
import Modal from 'react-modal';
import OneCountryModal from './OneCountryModal';



const Main = () => {
// state visada top level - virsuje
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [oneCountry, setOneCountry] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const getData = () => {
        // gauti duomenis is services aprasyto axios get metodo
        getAllCountriesInfo().then(response => {
            setCountries(response)
            setFilteredCountries(response)
                })
        
    }

const getSearchResult = (word) => {
    searchCountry(word).then(response =>
        {  if(response !== undefined) {
            console.log(response, word)
            setFilteredCountries(response) }
        }) }

const uniqueRegions = ["All", ...new Set(countries.map((country) => country.region))]
console.log(uniqueRegions);

const filterData = (region) => {
console.log(region)
if (region !== 'All') {
    const filtered = countries.filter((country) => country.region.includes(region));
    console.log(countries, filtered)
    setFilteredCountries(filtered)
} else {
    setFilteredCountries(countries);
}
}
console.log(filteredCountries);

const getOneCountryInfo = (country) => {
    getOneCountry(country).then(response => {
        console.log(country, response);

        setOneCountry(response);
        setModalIsOpenToTrue();
    })
}

console.log(oneCountry);

const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
    Modal.setAppElement('body');
    
}

const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
}

    // kada pakviesti, daryti requesta - useEffect
    useEffect(()=>{
        getData();
    }, []);

    
    console.log(countries);


  return (
    <div className ='container'>
        <Regions regions = {uniqueRegions} filterData = {filterData} searchCountries={getSearchResult} />
        <Countries allCountries={filteredCountries} getOneCountryInfo={getOneCountryInfo} setModalIsOpenToTrue={setModalIsOpenToTrue}/>
        <Modal isOpen={modalIsOpen}>
                <OneCountryModal oneCountry={oneCountry} setModalIsOpenToFalse={setModalIsOpenToFalse} />
        </Modal>
    </div>
  )
}


export default Main