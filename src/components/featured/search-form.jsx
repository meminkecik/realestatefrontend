import React, { useState } from "react";
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
import "./search-form.scss";

const SearchForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    city: "",
    minPrice: "",
    maxPrice: "",
    roomNumber: "",
    estateType: "",
  });

  const handleInputChange = (event, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  };

  const handleEstateTypeSelect = (selectedType) => {
    setFormData({
      ...formData,
      estateType: selectedType,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredData = Object.entries(formData)
      .filter(([key, value]) => value) // Boş değerleri filtrele
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    onFormSubmit(filteredData)
  };

  return (
    <Container className="search-form">
      <Navbar className="navbar w-100 ml-4 p-0">
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-space-evenly">
            <Col>
              <InputGroup>
                <Form.Control
                  placeholder="City"
                  aria-label="City"
                  aria-describedby="City"
                  value={formData.city}
                  onChange={(e) => handleInputChange(e, "city")}
                />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <Form.Control
                  placeholder="Min Price"
                  aria-label="MinPrice"
                  aria-describedby="MinPrice"
                  value={formData.minPrice}
                  onChange={(e) => handleInputChange(e, "minPrice")}
                />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <Form.Control
                  placeholder="Max Price"
                  aria-label="MaxPrice"
                  aria-describedby="MaxPrice"
                  value={formData.maxPrice}
                  onChange={(e) => handleInputChange(e, "maxPrice")}
                />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <Form.Control
                  placeholder="Room Number"
                  aria-label="RoomNumber"
                  aria-describedby="RoomNumber"
                  value={formData.roomNumber}
                  onChange={(e) => handleInputChange(e, "roomNumber")}
                />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <DropdownButton
                  variant="outline-secondary"
                  title={formData.estateType || "Estate Type"}
                  id="input-group-dropdown-1"
                  onSelect={handleEstateTypeSelect}
                >
                  <Dropdown.Item eventKey="For SALE" value="SALE">For SALE</Dropdown.Item>
                  <Dropdown.Item eventKey="For RENT" value="RENT">For RENT</Dropdown.Item>
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
