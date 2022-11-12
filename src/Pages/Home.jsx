import React from "react";

const Home = () => {

  const year = new Date().getFullYear();

  return(
    <helmet title={"home"}>
      <container>
        <Row>
          <Col lg="6" mg="6">
            <div className="hero__content">
              <p className="hero__subtitle">Trending product in {year}</p>
              
            </div>
          </Col>
        </Row>
      </container>
    </helmet>
  )
}

export default Home;