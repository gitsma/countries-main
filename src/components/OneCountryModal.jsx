import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './OneCountryModal.module.css';


// https://restcountries.com/v3.1/name/Andorra?fullText=true


const OneCountryModal = ({oneCountry, setModalIsOpenToFalse}) => {
    console.log(oneCountry[0])
          

  return (
    <section>
        <div className={styles.OneCountryCard}>
        <Button type="button" className="btn btn-secondary d-flex align-self-end" onClick={setModalIsOpenToFalse}> close </Button>
          <h2> WELCOME TO </h2>
          <h1> {oneCountry[0].name.common} </h1>  
        <img className={styles.CountryFlag} src={oneCountry[0].flags.png} ></img>
        <div className={styles.CountryInfo}>
          <div>
            <img className={styles.First} src={"https://cdn-icons-png.flaticon.com/512/8044/8044624.png"}></img>
            <h5> Population: <br/> {oneCountry[0].population}</h5>
          </div>
          <div>
            <img className={styles.Second} src={"https://img.uxwing.com/wp-content/themes/uxwing/download/location-travel-map/area-icon.png"}></img>
            <h5> Size: <br/> {oneCountry[0].area} sq.km </h5>
          </div>
          <div>
            <img className={styles.Third} src={"https://www.iconarchive.com/download/i103447/paomedia/small-n-flat/money.1024.png"}></img>
            <h5> Currency(-ies): <br/> {Object.values(oneCountry[0].currencies).map(({name}) => name).join(', ')}</h5>
          </div>
          <div>
            <img className={styles.Fourth} src={"https://www.pngkey.com/png/full/333-3336446_second-language-english-as-a-second-language-icon.png"}></img>
            <h5> Language(s): <br/> {Object.values(oneCountry[0].languages).join(', ')}</h5>
          </div>
        
        </div>
        

        </div>  
    </section>

      
)}


export default OneCountryModal