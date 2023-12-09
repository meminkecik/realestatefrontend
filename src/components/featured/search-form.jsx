import React from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
const SearchForm = () => {
  return (
    <Container>
      <Navbar className="bg-body-tertiary">
        <Form block>
          <Row className="g-2 justify-content-space-between">
            <Col >
            <InputGroup>
            <Form.Control
              placeholder="City"
              aria-label="City"
              aria-describedby="City"
            />
          </InputGroup>
          </Col>
          <Col >
          <InputGroup>
            <Form.Control
              placeholder="Min Price"
              aria-label="MinPrice"
              aria-describedby="MinPrice"
            />
          </InputGroup>
          </Col>
          <Col >
          <InputGroup>
            <Form.Control
              placeholder="Max Price"
              aria-label="MaxPrice"
              aria-describedby="MaxPrice"
            />
          </InputGroup>
          </Col>
          <Col>
          <InputGroup>
            <Form.Control
              placeholder="Room Number"
              aria-label="RoomNumber"
              aria-describedby="RoomNumber"
            />
          </InputGroup>
          </Col>
          <Col>
          <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Estate Type"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">For SALE</Dropdown.Item>
          <Dropdown.Item href="#"> For RENT</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
          </Col>
            <Col>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </Container>
  );
};

export default SearchForm;
