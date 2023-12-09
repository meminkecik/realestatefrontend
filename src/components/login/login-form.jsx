import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import ButtonSpinner from "../common/button-spinner";
import PasswordInput from "../common/password-input";
import { swalAlert } from "../../helpers/swal";
import { login } from "../../api/auth-service";
import { getLocalStorage, setLocalStorage } from "../../helpers/encrypted-storage";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    setLoading(true);

    try {
        const user = await login(values);
        const {token} = user;
        setLocalStorage("token", token);
        formik.resetForm();
        swalAlert("Login Successful","success")
    } catch (err) {
        const errMsg = Object.values(err.response.data.validations)[0];
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
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow border-0 border-top border-5 border-primary">
            <Card.Body>
              <div className="mb-4 mt-4 text-muted fst-italic">
                Please enter your username and password!
              </div>
              <Form noValidate onSubmit={formik.handleSubmit}>
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
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <PasswordInput
                  {...formik.getFieldProps("password")}
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                    error = {formik.errors.password}
                  />
                  <Button
                    className="w-100 bg-secondary"
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty) || loading}
                  >
                    {loading && <ButtonSpinner />} Login
                  </Button>
                  
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
