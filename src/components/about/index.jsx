import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import AboutImages from './about-images'
import AboutText from './about-text'
import "./about-main.scss"

const About = () => {
  return (
    <div>
        <Container>
            <Card className='card-about-main d-flex align-items-center justify-content-center'>
               <Card.Body>
                <Row className='g-5'>
                    <Col md={7}><AboutImages /></Col>
                    <Col md={5}><AboutText /></Col>
                </Row>
            </Card.Body> 
            </Card>
            
        </Container>

    </div>
  )
}

export default About