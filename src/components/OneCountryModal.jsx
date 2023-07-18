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
          <h2> WELCOME TO </h2>
          <h1> {oneCountry[0].name.common} </h1>  
        <img className={styles.CountryFlag} src={oneCountry[0].flags.png} ></img>
        <div className={styles.CountryInfo}>
          <div className={styles.Info}>
            <img className={styles.First} src={"https://cdn-icons-png.flaticon.com/512/8044/8044624.png"}></img>
            <h5> <strong>Population: </strong><br/> {oneCountry[0].population}</h5>
          </div>
          <div className={styles.Info}>
            <img className={styles.Second} src={"https://es.calcuworld.com/wp-content/uploads/sites/2/2019/10/dieta-zona.png"}></img>
            <h5> <strong>Size: </strong><br/> {oneCountry[0].area} sq.km </h5>
          </div >
          <div className={styles.Info}>
            <img className={styles.Third} src={"https://www.iconarchive.com/download/i103447/paomedia/small-n-flat/money.1024.png"}></img>
            <h5> <strong>Currency(-ies): </strong><br/> {Object.values(oneCountry[0].currencies).map(({name}) => name).join(', ')}</h5>
          </div>
          <div className={styles.Info}>
            <img className={styles.Fourth} src={"https://www.pngkey.com/png/full/333-3336446_second-language-english-as-a-second-language-icon.png"}></img>
            <h5> <strong>Language(s): </strong><br/> {Object.values(oneCountry[0].languages).join(', ')}</h5>
          </div>
        </div>
        <Button className={styles.ModalBtn} onClick={setModalIsOpenToFalse}> Close </Button>
        

        </div>  
    </section>

      
)}


export default OneCountryModal