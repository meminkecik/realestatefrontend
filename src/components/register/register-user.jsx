import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { swalAlert } from "../../helpers/swal";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../common/password-input";
import ButtonSpinner from "../common/button-spinner";
import { saveUser } from "../../api/user-service";
import { registerFailure, registerSuccess, startRegister } from "../../store/slices/register-slice";

const RegisterUser = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      ssn: "",
      phoneNumber: "",
    };
    const validationSchema = Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      ssn: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
    });
    const onSubmit = async (values) => {
      setLoading(true);
  
      try {
        dispatch(startRegister());
          const user = await saveUser(values);
          dispatch(registerSuccess(user));
          formik.resetForm();
          swalAlert("Your account has been created","success")
          setTimeout(() => {
              navigate("/login");
          }, 3000);
          
      } catch (err) {
          dispatch(registerFailure(err.message));
          const errMsg = err.response.data.message;
          swalAlert(errMsg,"error");
      }
      finally{
          setLoading(false);
      }
    };
    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow border-0 border-top border-5 border-primary">
              <Card.Body>
                <div className="mb-4 mt-4 text-muted text-center fw-bold fs-4">
                  REGISTER
                </div>
                <Row>
                  <Col md={6}>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    {...formik.getFieldProps("firstName")}
                    isInvalid={formik.touched.firstName && formik.errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    {...formik.getFieldProps("lastName")}
                    isInvalid={formik.touched.lastName && formik.errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...formik.getFieldProps("email")}
                    isInvalid={formik.touched.email && formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                  </Form.Group>
                  </Col>
                  <Col md={6}>
                  <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <PasswordInput
                    {...formik.getFieldProps("password")}
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                    error={formik.errors.password}
                  />

                </Form.Group>
                <Form.Group className="mb-3" controlId="ssn">
                  <Form.Label>National Identity</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="National Identity"
                    {...formik.getFieldProps("ssn")}
                    isInvalid={formik.touched.ssn && formik.errors.ssn}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.ssn}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Phone Number"
                    {...formik.getFieldProps("phoneNumber")}
                    isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.phoneNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                </Col>
                </Row>
                <Button
                  className="w-100 bg-secondary"
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty) || loading}
                >
                  {loading && <ButtonSpinner />} Register
                </Button>
                <Link className="mt-3" to={"/login"}>
                  Already have an account? Login
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
  )
}

export default RegisterUser