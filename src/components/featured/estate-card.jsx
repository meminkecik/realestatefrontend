import React from "react";
import { Card, CardText, Col, Container,  Row } from "react-bootstrap";
import {FaExpand, FaBed,FaPhone} from "react-icons/fa";
import "./estate-card.scss";
const EstateCard = () => {
  return (
    <Container>
      <Row className="g-5 row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4">
        <Col>
          <Card className="card" >
            <div className="top-img">
                <Card.Img className="img" src="/images/apartment1.jpg" alt="Card image" />
            </div>
            <Card.ImgOverlay className="overlay">
              <Card.Title className="top-title">
                SALE
              </Card.Title>
            </Card.ImgOverlay>
            <Card.Body className="card-body1">
                <CardText>5500 TL</CardText>
                <Card.Link href="#"><FaPhone/></Card.Link>
            </Card.Body>
            <Card.Body className="card-body2">
                <CardText>Eşyalı Kiralık</CardText>
                <CardText>Ankara</CardText>
            </Card.Body>
            <Card.Body className="card-body3">
                <CardText><FaExpand/> 120 sqft</CardText>
                <CardText><FaBed/> 3 rooms</CardText>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EstateCard;
