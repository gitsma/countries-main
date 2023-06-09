import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Regions = ({ regions, filterData, searchCountries }) => {
    console.log(regions);

return (
    <div className="container-fluid">
        <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href = "#home" className="mx-5">Countries</Navbar.Brand>
            <Nav className = "me-auto">
                { regions.map((region, index) => (
                    <Nav.Link href ="#" key={index} onClick={() => filterData(region)}>{region}</Nav.Link>
                ))}

            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Country..."
              className="me-2"
              aria-label="Search"
              onChange={(e) => searchCountries(e.target.value)}
            />
            </Form>
        </Container>
        </Navbar>
    </div>
)
}
export default Regions
