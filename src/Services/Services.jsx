import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {motion} from "framer-motion"

import "/Services.css";
import serviceData from "../assets/data/serviceData";

const Services = () =>{
    return( 
    <Section className="service">
        <Container>
            <Row>
            {
                serviceData.map((item,index)=>(
                <Col lg="3" md="4" key={index}>
                    <motion.div 
                       whileHover={{scale:1.1}}
                       className="services__item" 
                       style={{backgroundColor=`${item.bg}`}}>
                        <span>
                            <i className={item.icon}></i>
                        </span>
                        <div>
                         <h3>{item.title}</h3>
                         <p>{item.subtitle}</p>
                        </div>
                    </motion.div>
                </Col>            
                ))
            }
            </Row>
        </Container>
    </Section>
    )
}

export default Services;