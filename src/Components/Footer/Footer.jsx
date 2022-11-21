import React from "react";
import "./Footer.css"

import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import {Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear();
  return(
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md='6'>
            <div className="logo">
              <div>
                <h1 className="text-white">Sine-Online</h1>
              </div>
            </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae molestias perferendis id libero fugiat! 
                Molestias cupiditate ratione explicabo culpa excepturi!
              </p>
          </Col>
          <Col lg="3" className="mb-4" md='3'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top catergories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#"> Mobile phone</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#"> Modern sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#"> Arm chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#"> Smart watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" className="mb-4" md='3'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop"> Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart"> Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login"> Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#"> Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md='4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contacts</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center
                gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>32 Prince Street, Durban, 4001</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center
                gap-2">
                <span><i class="ri-phone-line"></i></span>
                  <p>(+27) 82 4011 459</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center
                gap-2">
                <span><i class="ri-mail-line"></i></span>
                  <p>sinethemberntantiso@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">Copyright {year} developed by
            Ntantiso Sinethemba. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;