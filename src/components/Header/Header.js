import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Button
  } from 'reactstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import {useLocation} from 'react-router-dom';

const Header = ({totalItems}) => {
  
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
      
    const toggle = () => setIsOpen(!isOpen);

    

    return (
        <div>
        <Navbar>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/products/">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
{location.pathname === '/' && (

              <Button>
              <FontAwesomeIcon icon={faBagShopping}/>
                <Badge href={"/cart"}>
                 {totalItems}
                </Badge>
              </Button>)}
          </Collapse>
        </Navbar>
      </div>
    );
  };

export default Header;