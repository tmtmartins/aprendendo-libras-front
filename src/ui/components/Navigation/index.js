import React from 'react';
import Menu from './Features/Navbar';
import navData from './Data/data.json'

function Navigation() {
  return (
    <Menu navData={navData}/>
  );
}

export default Navigation;
