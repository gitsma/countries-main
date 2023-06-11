import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Regions = ({ regions, filterData, searchCountries }) => {
  console.log(regions)

  return (
    <div>
      <Navbar className="md-3" bg="light" variant="light">
        <Navbar.Brand className="ms-auto" href="#home">
          Countries
        </Navbar.Brand>
        <Nav className="ms-auto d-flex flex-wrap">
          {regions.map((region, index) => (
            <Nav.Link href="#" key={index} onClick={() => filterData(region)}>
              {region}
            </Nav.Link>
          ))}
          <Form>
            <Form.Control
              type="search"
              placeholder="Search Country..."
              className="me-5"
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
