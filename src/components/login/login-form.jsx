import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import ButtonSpinner from "../common/button-spinner";
import PasswordInput from "../common/password-input";
import { swalAlert } from "../../helpers/swal";
import { login } from "../../api/auth-service";
import {  setLocalStorage } from "../../helpers/encrypted-storage";
import { useDispatch } from "react-redux";
import {login as loginSuccess} from "../../store/slices/auth-slice"
import { Link, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        dispatch(loginSuccess(user));
        navigate("/featured")
        formik.resetForm();
        
    } catch (err) {
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
                  <Link className="mt-3" to={"/register"}>Don't you have an account?</Link>
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
