import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineAliwangwang,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsHousesFill } from "react-icons/bs";
import { MdAddHome } from "react-icons/md";



const MainMenu = (props) => {
  return (
    <>
    <Nav {...props}>
      <Nav.Link as={Link} to="/" >
        <AiOutlineHome /> Home
      </Nav.Link>
      <Nav.Link as={Link} to="/featured">
      <  BsHousesFill /> Featured
      </Nav.Link>
      <Nav.Link as={Link} to="/advertise-estate">
      <MdAddHome /> Advertise Estate
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
      <AiOutlineInfoCircle /> About
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
      <AiOutlineAliwangwang /> Contact
      </Nav.Link>
      </Nav>
    </>
  );
};

export default MainMenu;
