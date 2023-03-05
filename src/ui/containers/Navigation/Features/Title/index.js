import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Data/logo.svg";

function Title() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-center"
            />{" "}
            Aprendendo Libras
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Title;
