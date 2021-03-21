import React from 'react';
import { Button, Navbar, Nav, FormControl, NavDropdown, Form } from 'react-bootstrap';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">SortingVisualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#pricing">Generate New Array</Nav.Link>
            <NavDropdown title="Sorting Algorithms" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Merge Sort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Quick Sort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Heap Sort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bubble Sort</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Save</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="mycontener">  <SortingVisualizer></SortingVisualizer>
      </div>
     
    </div>
  );
}

export default App;