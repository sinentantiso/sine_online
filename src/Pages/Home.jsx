import React from "react";

import {Link} from "react-router-dom";
import {motion} from "framer-motion";

import Helmet from "../Components/Helmet/Helmet";
import { Container, Row,Col } from "reactstrap";

import Clock from "../Components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);


  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter (
      (item) => item.catergory === "chair"
    );

    const filteredBestSalesProducts = products.filter (
      (item) => item.catergory === "sofa"
    );

    const filteredMobileProducts = products.filter (
      (item) => item.catergory === "mobile"
    );

    const filteredWirelessProducts = products.filter (
      (item) => item.catergory === "wireless"
    );

    const filteredPopularProducts = products.filter (
      (item) => item.catergory === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);

  }, []);


  return(
    <Helmet title={"home"}>
      <Container>
        <Row>
          <Col lg="6" mg="6">
            <div className="hero__content">
              <p className="hero__subtitle">Trending product in {year}</p>
              <h2>Make your interior more minimalistic and modern</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Atque, reiciendis? Vero laudantium recusandae fugiat, animi eligendi iste dolore dolorum quidem totam blanditiis quam minima ipsa asperiores minus, 
                aperiam at ab sed voluptas assumenda. Cupiditate perferendis odit magni possimus vel sapiente, 
                error numquam iste repudiandae qui! Ipsam hic debitis tempora adipisci!
              </p>

              <motion.button whileTap={{ scale: 1.2}} className="buy__button">
                <Link to="/shop">SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>
      <Section className="trenging__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best sales</h2>
            </Col>
            <ProductList data={bestSalesProduct}/>
          </Row>
        </Container>
      </Section>
      <Section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best sales</h2>
            </Col>
            <ProductList data={bestSalesProduct}/>
          </Row>
        </Container>
      </Section>
      <Section className="timer__count">
        <Container>
          <Row>
            
          </Row>
        </Container>
      </Section>
      <Section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arricals</h2>
            </Col>
            <ProductList data={mobileProducts}/>
            <ProductList data={wirelessProducts}/>
          </Row>
        </Container>
      </Section>
      <Section className="popular__catergory">
      <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in catergory</h2>
            </Col>
            <ProductList data={popularProducts}/>
          </Row>
        </Container>
      </Section>
    </Helmet>
  )
}

export default Home;