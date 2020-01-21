

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import './NavBar.css';


const NavBar = (props) => {
const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
<div className="div-navbar sticky-top">
      <Navbar color="white" light expand="xl">
        <NavbarBrand href="/"><img className="logo-ecole mr-5" src="/logo-ecole.jpg" alt="logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto container bg-white" navbar>
            <NavItem>
              <NavLink href="/" className="text-dark font">Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Historique" className="text-dark font">Historique</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Activité" className="text-dark font">Activités</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Info" className="text-dark font">Infos pratiques</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Actualité" className="text-dark font">Nouveautés</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Pastorale" className="text-dark font ">Pastorale</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Cantine" className="text-dark font">Cantine</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Apel" className="text-dark font">Apel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Inscription" className="font inscription"><button className="button-inscription">Inscription</button></NavLink>
            </NavItem>
          </Nav>
        </Collapse>

      </Navbar>

    </div>
    );
  }
  



export default NavBar;

