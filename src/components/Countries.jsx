import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Country = ( { allCountries, getOneCountryInfo }) => {
    console.log(allCountries)
  return (
    <div className = "d-flex justify-content-evenly flex-wrap" style={{fontFamily: 'Raleway'}}>
        {allCountries !== undefined && allCountries.length !== 0 ?  
        allCountries.map((country, index) => (
            <Card style = {{ width: '20rem', margin: '1rem', border: '0.5px rgba(0, 0, 0, 0.493) solid'}} key={index}>
                <Card.Text className="d-flex align-self-end" style={{margin: '0.5rem'}}>{country.region}</Card.Text>
                <Card.Text className="d-flex align-self-end" style={{fontWeight:'bold', margin: '0.5rem'}}>{country.capital}</Card.Text>
                <Card.Title className="d-flex align-self-center" style={{fontWeight:'bold'}}>{country.name.common}</Card.Title>
                <Card.Body className="d-flex flex-wrap">
                <Card.Img style={{height: '10rem', marginBottom: '1rem', border: '0.5px rgba(0, 0, 0, 0.493) solid'}} variant = "top" src={country.flags.png} />    
                <Button className="d-flex btn btn-block col-12 justify-content-center" variant="dark" onClick={() => getOneCountryInfo(country.name.common) }> More info</Button>
                </Card.Body>
            </Card>
        ))
    : <h1></h1>
    }

    </div>
  )
}

export default Country
