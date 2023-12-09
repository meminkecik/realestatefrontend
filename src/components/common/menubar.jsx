import React from "react";
import {
  Button,
  Container,
  Image,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { config } from "../../helpers/config";
import { Link } from "react-router-dom";
import MainMenu from "./main-menu";
import "./menubar.scss";

const Menubar = () => {
  return (
    <Navbar className="navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image
            className=""
            src="/images/logo2-transparent.png"
            alt={config.project.name}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mainMenu" />
        <Navbar.Offcanvas
          id="mainMenu"
          aria-labelledby="offcanvas"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas">
              <Image src="/images/logo2-transparent.png" alt={config.project.name}/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MainMenu className="justify-content-center flex-grow-1 pe-3" />
            <Button
              as={Link}
              to={"/login"}
              className="btn btn-outline-secondary"
            >
              Login
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Menubar;
