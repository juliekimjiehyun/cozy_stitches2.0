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
import logo from '../../assets/logo.png';
import './styles.css';

const Header = ({totalItems}) => {
  
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
      
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar className="header" light expand="sm">
          <NavbarBrand href="/">
            <img 
              alt="logo"
              src={logo}
              style={{
                height: 50,
                width: 40
              }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
            <NavItem >
                <NavLink href="/">Home</NavLink>
              </NavItem>
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