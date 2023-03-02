import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useReducer } from "react";
import Title from "../Title";
import React from "react";

export type TItemMenu = {
  name: string;
  redirect: string;
  id: number;
  children?: Array<TItemMenu>;
};

const Menu = () => {
  const navData: Array<TItemMenu> = require("../../Data/data.json");
  const [showSubMenu, setShowSubMenu] = useReducer((bool) => !bool, false);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Title />
        <Navbar.Collapse role="navigation" id="basic-navbar-nav">
          <Nav className="navbar">
            {navData.map((element) => {
              if (!element.children) {
                return (
                  <li key={element.id}>
                    <Nav.Link href={element.redirect}>{element.name}</Nav.Link>
                  </li>
                );
              }
              return (
                <li
                  onMouseEnter={setShowSubMenu}
                  onMouseLeave={setShowSubMenu}
                  key={element.id}
                  className="header-nav-options options-hover"
                >
                  <NavDropdown title={element.name}>
                    {showSubMenu &&
                      element.children.map((child) => {
                        return (
                          <li key={child.id}>
                            <NavDropdown.Item href={child.redirect}>
                              {child.name}
                            </NavDropdown.Item>
                          </li>
                        );
                      })}
                  </NavDropdown>
                </li>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
