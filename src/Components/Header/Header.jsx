import React from "react";
import "./Header.css";

import {NavLink} from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png"

import { Container, Row } from "reactstrap";

const Nav__Links = [
  {
    path: "home",
    display: "Home"
  },
  {
    path: "shop",
    display: "Shop"
  },
  {
    path: "cart",
    display: "Cart"
  }
]

const Header = () => {
  return (<header className="header">
    <container>
      <Row>
        <div className="nav__wrapper"> 
          <div className="logo">
            <img src={logo} alt="logo"/>
            <div>
              <h1>Sine-Online</h1>
              <p>since 2022</p>
            </div>
          </div>

            <div className="navigation">
              <ul className="menu">
                
              </ul>
            </div>

            <div className="Nav__icons">

              <span className="fav__icon"><i class="ri-heart-fill"></i></span>
              <span className="cart__icon"><i 
              class="ri-shopping-bag-fill"></i></span>

              <span><img src={userIcon} alt="" /></span>
            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
        </div>
      </Row>
    </container>   
  </header>
  )
}

export default Header;