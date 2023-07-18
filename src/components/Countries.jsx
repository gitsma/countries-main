import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './Countries.module.css'

const Country = ( { allCountries, getOneCountryInfo }) => {
    console.log(allCountries)
  return (
    <div className = {styles.CardContainer}>
        {allCountries !== undefined && allCountries.length !== 0 ?  
        allCountries.map((country, index) => (
            <Card className={styles.Card} key={index}>
                <Card.Text className={styles.CardText}>{country.region}</Card.Text>
                <Card.Text className={styles.CardText2}>{country.capital}</Card.Text>
                <Card.Title className={styles.CardTitle}>{country.name.common}</Card.Title>
                <Card.Body className={styles.CardBody}>
                <Card.Img className={styles.CardImg} variant = "top" src={country.flags.png} />    
                <Button className={styles.CardBtn} variant="dark" onClick={() => getOneCountryInfo(country.name.common) }> More info</Button>
                </Card.Body>
            </Card>
        ))
    : <h1></h1>
    }

    </div>
  )
}

export default Country
