import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Title from './../Title'

function Menu(props) {
  
  const { navData } = props;
  const [showSubMenu, setShowSubMenu] = useState([]);

  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };

  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Title/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navData.map((element) => {
              if (!element.children){
                return (
                  <li key={element.id}>
                    <Nav.Link href={element.redirect}>{element.name}</Nav.Link>
                  </li>
                )
              }
              return (
                <li
                  onMouseEnter={(event) => subMenuOnMouseEnterHandler(element.id)}
                  onMouseLeave={(event) => subMenuOnMouseLeaveHandler(element.id)}
                  key={element.id}
                  className='header-nav-options options-hover'
                >
                  <NavDropdown title={element.name}>
                    
                    {showSubMenu[element.id] &&
                      element.children.map((child)=> {
                        return (
                          <li key={child.id}>
                            <NavDropdown.Item href={child.redirect}> {child.name} </NavDropdown.Item>
                          </li>
                        )
                      }
                    )}
                  </NavDropdown>
                </li>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;