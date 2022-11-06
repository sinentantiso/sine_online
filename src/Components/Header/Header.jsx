import React from "react";
import "./Header.css";

import {logo} from "../../Assets/images";
import {container, Row } from "reactstrap";

const Header = () => {
  return <header className="header">
    <container>
      <div className="nav__wrapper"> 
        <div className="logo">

        </div>
      </div>
    </container>   
  </header>
}

export default Header;