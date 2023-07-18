import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import styles from './Regions.module.css'

const Regions = ({ regions, filterData, searchCountries }) => {
  console.log(regions)

  return (    
    <div className={styles.Navbar}>
      <Navbar className={styles.NavBk}>
        <Navbar.Brand className={styles.NavbarBrand} href="#home"> 
          <h2>Where in the</h2>
          <h1>World?</h1>
        </Navbar.Brand> 
        <Nav className={styles.Nav}>
          {regions.map((region, index) => (
            <Nav.Link className={styles.NavLink} href="#" key={index} onClick={() => filterData(region)}>
              <h6>{region}</h6>
            </Nav.Link>       
          ))}
          <Form className={styles.Search}>
            <Form.Control
              type="search"
              placeholder="Search for a country..."
              className="me-4 d-flex flex-wrap flex-column"
              aria-label="Search"
              onChange={(e) => searchCountries(e.target.value)}
            />    
          </Form>
        </Nav>
      </Navbar>
    </div>
  )
}
export default Regions
