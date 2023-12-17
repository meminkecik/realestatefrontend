import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./about-images.scss";

const AboutImages = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={8} className="mb-4  ml-7 ">
          <Image className='rounded' src="/images/about/resim1.jpg" fluid />
        </Col>
        <Row/>
        <Row>
        <Col xs={12} md={8} className="mb-4">
          <Image className='rounded' src="/images/about/img2.jpg" fluid />
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={8} className="mb-4  ml-7">
          <Image className='rounded' src="/images/about/img3.jpg" fluid />
        </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default AboutImages;
