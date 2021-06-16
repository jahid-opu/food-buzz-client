import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel,Nav,NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div>
          
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">Food Buzz</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav className="header">
     <Nav.Link><Link to=""><span>Home</span></Link></Nav.Link>
     <Nav.Link><Link to="/orders"><span>Orders</span></Link></Nav.Link>
     <Nav.Link><Link to="/admin"><span>Admin</span></Link></Nav.Link>
     <Nav.Link><Link to=""><span>Blog</span></Link></Nav.Link>
     {loggedInUser.userName? <Nav.Link>{loggedInUser.userName}</Nav.Link> : <Nav.Link><Link to="login"><button className="login-btn">Login</button></Link></Nav.Link>}
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;