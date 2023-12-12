import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { swalAlert } from "../../helpers/swal";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../common/password-input";
import ButtonSpinner from "../common/button-spinner";
import { registerFailure, registerSuccess, startRegister } from "../../store/slices/register-slice";
import { saveEstate } from "../../api/real-estate-service";

const RegisterCompany = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
      email: "",
      password: "",
      companyName: "",
      authorizedName: "",
      authorizedSurname:"",
      taxNumber: "",
      phoneNumber: "",
    };
    const validationSchema = Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      companyName: Yup.string().required("Required"),
      authorizedName: Yup.string().required("Required"),
      authorizedSurname: Yup.string().required("Required"),
      taxNumber: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),

    });
    const onSubmit = async (values) => {
      setLoading(true);
  
      try {
        dispatch(startRegister());
          const user = await saveEstate(values);
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
                  REGISTER COMPANY
                </div>
                <Row>
                  <Col md={6}>
                <Form.Group className="mb-3" controlId="companyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Name"
                    {...formik.getFieldProps("companyName")}
                    isInvalid={formik.touched.companyName && formik.errors.companyName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.companyName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="authorizedName">
                  <Form.Label>Authorized Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Authorized Name"
                    {...formik.getFieldProps("authorizedName")}
                    isInvalid={formik.touched.authorizedName && formik.errors.authorizedName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.authorizedName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="authorizedSurname">
                  <Form.Label>Authorized Surname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Authorized Surname"
                    {...formik.getFieldProps("authorizedSurname")}
                    isInvalid={formik.touched.authorizedSurname && formik.errors.authorizedSurname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.authorizedSurname}
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
                <Form.Group className="mb-3" controlId="taxNumber">
                  <Form.Label>Tax Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tax Number"
                    {...formik.getFieldProps("taxNumber")}
                    isInvalid={formik.touched.taxNumber && formik.errors.taxNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.taxNumber}
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

export default RegisterCompany