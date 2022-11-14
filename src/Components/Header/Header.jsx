import React, {useRef, useEffect} from "react";
import "./Header.css";

import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
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

  const headerRef = useRef(null)
  const stickyHeaderFunc = () =>{
    window.addEventListiner("scroll", ()=> {
      if(document.body.scrollTo)
    })
  }

  useEffect(() =>{

  })

  return (<header className="header">
    <container>
      <Row>
        <div className="nav__wrapper"> 
          <div className="logo">
            <img src={logo} alt="logo"/>
            <div>
              <h1>Sine-Online</h1>
            </div>
          </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav__item" key={index}>
                  <NavLink to={item.path} className={(navClass) =>
                  navClass.isActive ? "nav__item" : ""}></NavLink> 
                </li>
              </ul>
            </div>

            <div className="Nav__icons">

              <span className="fav__icon"><i class="ri-heart-fill"></i></span>
              <span className="cart__icon"><i 
              class="ri-shopping-bag-fill"></i></span>

              <span>
                <motion.img whileTap={{scale:1.2}} src={userIcon} alt="" />
              </span>
              <div className="mobile__menu">
                <span>
                  <i class="ri-menu-line"></i>
                </span>
              </div>    
            </div>
        </div>
      </Row>
    </container>   
  </header>
  )
}

export default Header;