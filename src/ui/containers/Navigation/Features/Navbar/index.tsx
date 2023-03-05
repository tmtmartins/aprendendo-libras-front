import Container from "react-bootstrap/Container";
import { StyledNavbar, StyledNavbarDropdown } from "./styles";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Title from "../Title";
import { Nav, NavDropdown } from "react-bootstrap";

export type TItemMenu = {
  name: string;
  redirect: string;
  id: number;
  children?: Array<TItemMenu>;
};

const Menu = () => {
  const navData: Array<TItemMenu> = require("../../Data/data.json");

  const bgOldColor = "#f8f9fa";
  const bgNewColor = "#f4b860";

  const [show, setShow] = useState(false);

  const showDropdown = (event) => {
    setShow(!show);
  };
  const hideDropdown = (event) => {
    setShow(false);
  };

  const changeBackground = (event, color) => {
    event.target.style.borderRadius = "5px";
    event.target.style.background = color;
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Title />
        <Navbar.Collapse role="navigation" id="basic-navbar-nav">
          <StyledNavbar className="navbar">
            {navData.map((element) => {
              if (!element.children) {
                return (
                  <li key={element.id}>
                    <StyledNavbar.Link
                      onMouseOver={(event) =>
                        changeBackground(event, bgNewColor)
                      }
                      onMouseOut={(event) =>
                        changeBackground(event, bgOldColor)
                      }
                      href={element.redirect}
                    >
                      {element.name}
                    </StyledNavbar.Link>
                  </li>
                );
              }
              return (
                <li
                  key={element.id}
                  className="header-nav-options options-hover"
                >
                  <StyledNavbarDropdown
                    title={element.name}
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                    onMouseOver={(event) => changeBackground(event, bgNewColor)}
                    onMouseOut={(event) => changeBackground(event, bgOldColor)}
                  >
                    {show &&
                      element.children.map((child) => {
                        return (
                          <li key={child.id}>
                            <StyledNavbarDropdown.Item href={child.redirect}>
                              {child.name}
                            </StyledNavbarDropdown.Item>
                          </li>
                        );
                      })}
                  </StyledNavbarDropdown>
                </li>
              );
            })}
          </StyledNavbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
