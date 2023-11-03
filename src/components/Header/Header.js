import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
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

    if (location.pathname === '/')

    return (
        <div>
        <Navbar>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>NAVBAR</NavbarText>
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