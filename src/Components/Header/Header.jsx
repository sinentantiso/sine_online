import React from "react";
import "./Header.css";

import {NavLink} from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png"

import {container, Row } from "reactstrap";

const Header = () => {
  return <header className="header">
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
                <li className="nav__item">
                  <NavLink to="home">Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="shop">Shop</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="cart">Cart</NavLink>
                </li>
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
}

export default Header;