import React from "react";

import {Link} from "react-router-dom";
import {motion} from "framer-motion";

import Helmet from "../Components/Helmet/Helmet";
import { Container, Row,Col } from "reactstrap";


const Home = () => {

  const year = new Date().getFullYear();

  return(
    <Helmet title={"home"}>
      <Container>
        <Row>
          <Col lg="6" mg="6">
            <div className="hero__content">
              <p className="hero__subtitle">Trending product in {year}</p>

            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  )
}

export default Home;