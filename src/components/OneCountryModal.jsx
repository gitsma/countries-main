import React from 'react'

// https://restcountries.com/v3.1/name/Andorra?fullText=true


const OneCountryModal = ({oneCountry, setModalIsOpenToFalse}) => {
    console.log(oneCountry[0])
       

  return (
    <div className="card" style={{ width: '800px' }}>
    <h2> Šalies pavadinimas - {oneCountry[0].name.common}</h2>
    <h2> Gyventojai - {oneCountry[0].population}</h2>
    <h2> Plotas - {oneCountry[0].area} kv.km </h2>
    <h2> Veliavos png</h2>
    <h2> Valiuta </h2>
{
Object.keys(oneCountry[0].currencies).forEach(key => {
    console.log(key, oneCountry[0].currencies[key])
    

})
}

{
 oneCountry.currencies? oneCountry.currencies.map((currency, index) => {
     return(
         <ul key={index}>
             <li>{currency}</li>
         </ul>
     )
 }) : "data not found"

}

 
    <h2> Kalba</h2>
    <h2> Kaimynai</h2>
    <button type="button" className="btn btn-dark" onClick={setModalIsOpenToFalse}> Close </button>
      </div>)
}

export default OneCountryModal