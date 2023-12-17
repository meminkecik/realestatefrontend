import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./about-text.scss"

const AboutText = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="mb-4">
          <Card className='card-about border-none'>
            <Card.Body>
              <Card.Title className="text-center mb-4 fs-1">Welcome!</Card.Title>
              <Card.Text className="carte text-center mb-4 fs-4">
                As a Real Estate Company, we offer you the opportunity to become a homeowner in a place
                you can trust and find happiness. Putting customer satisfaction at the forefront, we assist
                you in finding the home of your dreams.
                <br />
                <br />
                Our professional team puts effort into understanding your real estate needs, guiding you
                step by step in selecting the home that is right for you. We are here to understand and meet
                your real estate needs.
                <br />
                <br />
                By working with us, you will find a trustworthy partner. Our priority is to help you experience
                the happiness that comes with being a homeowner.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutText