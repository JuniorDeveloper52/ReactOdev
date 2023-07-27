import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';
import { faPizzaSlice, faSignInAlt, faUserPlus, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"> <FontAwesomeIcon size="2x" icon={faPizzaSlice} /></Navbar.Brand>
          <Nav className="ml-auto">
          <NavDropdown title="İçerik " id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">
            <Nav.Link className='resimnav' as={Link} to="/imgwidth">
          <FontAwesomeIcon icon={faImage} size="1x" className='mx-2' />
          Resim              
          </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action2">
            <Nav.Link className='girisnav' as={Link} to="/giris">
                <FontAwesomeIcon icon={faSignInAlt} size="1x" className='mx-2' />
                 Giriş
          </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">
            <Nav.Link className='kayitnav' as={Link} to="/kayit">
                <FontAwesomeIcon icon={faUserPlus} size="1x" className='mx-2' />
                Kayıt
          </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>

          
                    
               
        </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
