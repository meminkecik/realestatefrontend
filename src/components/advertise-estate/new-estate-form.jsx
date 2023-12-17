import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { saveEstate } from "../../api/post-service";
import ButtonSpinner from "../common/button-spinner";
import { setOperation } from "../../store/slices/misc-slice";
import { swalAlert } from "../../helpers/swal";
import { useNavigate } from "react-router-dom";
import ImageUploader from "./image-uploader";

const NewEstateForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    estateType: "",
    price: "",
    header: "",
    description: "",
    squareMeter: "",
    roomNumber: "",
    totalFloor: "",
    floor: "",
    typeOfHeating: "",
    city: "",
    address: "",
    ownerSsn: "",
    imageUrl: "",
  };

  const validationSchema = Yup.object({
    imageUrl: Yup.mixed().required("Required"),
    estateType: Yup.string()
      .required("Required")
      .oneOf(["SALE", "RENT"], "Invalid Type"),
    price: Yup.string().required("Required"),
    header: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    squareMeter: Yup.string().required("Required"),
    roomNumber: Yup.string().required("Required"),
    totalFloor: Yup.string().required("Required"),
    floor: Yup.string().required("Required"),
    typeOfHeating: Yup.string()
      .required("Required")
      .oneOf(
        ["BioFuel", "Central System", "Solar", "Natural Gas"],
        "Invalid Type"
      ),
    city: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    ownerSsn: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await saveEstate(values);
      formik.resetForm();
      swalAlert("Estate was created", "success");
      setTimeout(() => {
        navigate("/featured");
      }, 3000);
      navigate("/featured");
    } catch (err) {
      const msg = Object.values(err.response.data.validations)[0];
      swalAlert(msg, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    dispatch(setOperation(null));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="text-center mb-3 fs-4">New Estate</Card.Title>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row className="mb-3 border-bottom">
              <Col>
                <FloatingLabel controlId="imageUrl" className="mb-3">
                  <p className="fs-5">Image Upload</p>
                  <ImageUploader
                  setFieldValue={formik.setFieldValue}
                  />

                </FloatingLabel>
              </Col>
            </Row>
            <Row xs={1} sm={2} md={3} lg={4} className="g-3">
              <Col>
                <FloatingLabel
                  controlId="estateType"
                  label="Estate Type"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Select Estate Type"
                    {...formik.getFieldProps("estateType")}
                    isInvalid={
                      formik.touched.estateType && formik.errors.estateType
                    }
                  >
                    <option>Select Estate Type</option>
                    <option value="SALE">For SALE</option>
                    <option value="RENT">For RENT</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.estateType}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="price" label="Price" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="price"
                    {...formik.getFieldProps("price")}
                    isInvalid={formik.touched.price && formik.errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.price}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="header"
                  label="Header"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="header"
                    {...formik.getFieldProps("header")}
                    isInvalid={formik.touched.header && formik.errors.header}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.header}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="squareMeter"
                  label="SquareMeter"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="SquareMeter"
                    {...formik.getFieldProps("squareMeter")}
                    isInvalid={
                      formik.touched.squareMeter && formik.errors.squareMeter
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.squareMeter}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="roomNumber"
                  label="RoomNumber"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Room Number"
                    {...formik.getFieldProps("roomNumber")}
                    isInvalid={
                      formik.touched.roomNumber && formik.errors.roomNumber
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.roomNumber}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="floor" label="Floor" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Floor"
                    {...formik.getFieldProps("floor")}
                    isInvalid={formik.touched.floor && formik.errors.floor}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.floor}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="totalFloor"
                  label="Total Floor"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Total Floor"
                    {...formik.getFieldProps("totalFloor")}
                    isInvalid={
                      formik.touched.totalFloor && formik.errors.totalFloor
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.totalFloor}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="typeOfHeating"
                  label="Type Of Heating"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Select Type Of Heating"
                    {...formik.getFieldProps("typeOfHeating")}
                    isInvalid={
                      formik.touched.typeOfHeating &&
                      formik.errors.typeOfHeating
                    }
                  >
                    <option>Select Type Of Heating</option>
                    <option value="Natural Gas">Natural Gas</option>
                    <option value="BioFuel">BioFuel</option>
                    <option value="Central System">Central System</option>
                    <option value="Solar">Solar</option>
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {formik.errors.typeOfHeating}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel controlId="city" label="City" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="city"
                    {...formik.getFieldProps("city")}
                    isInvalid={formik.touched.city && formik.errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.city}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="address"
                  label="Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="address"
                    {...formik.getFieldProps("address")}
                    isInvalid={formik.touched.address && formik.errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="ownerSsn"
                  label="Owner Ssn"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="ownerSsn"
                    {...formik.getFieldProps("ownerSsn")}
                    isInvalid={
                      formik.touched.ownerSsn && formik.errors.ownerSsn
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.ownerSsn}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="description"
                  label="Description"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="description"
                    {...formik.getFieldProps("description")}
                    isInvalid={
                      formik.touched.description && formik.errors.description
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.description}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col className="text-end">
                <Button
                  variant="outline-secondary"
                  className="me-3"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
                >
                  {loading && <ButtonSpinner />} Create
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewEstateForm;
