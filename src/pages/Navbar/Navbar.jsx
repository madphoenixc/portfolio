import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Navbar.module.css";
import { Link,useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log("location",location)

  const navFunction = (path) =>{
    return location.pathname === path ? `${classes.navlink} ${classes.active}` : `${classes.navlink}`
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/" className={classes.navhead}>
            Madhan's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={classes.navbar}>
              <Nav.Link ><Link className={navFunction("/")} to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className={navFunction("/about")}  to="/about">About</Link></Nav.Link>
              <Nav.Link><Link className={navFunction("/experience")}  to="/experience">Experience</Link></Nav.Link>
              {/* <Nav.Link href="works">Works</Nav.Link> */}
              <Nav.Link><Link className={navFunction("/contact")}  to="/contact">Contact</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
