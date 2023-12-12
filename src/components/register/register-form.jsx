
import React, { useState } from "react";
import {  Container, Form } from "react-bootstrap";
import RegisterUser from "./register-user";
import RegisterCompany from "./register-company";


const RegisterForm = () => {
  const [isCompanyRegister, setIsCompanyRegister] = useState(true);

  const handleSwitch = () => {
    setIsCompanyRegister((prevIsCompanyRegister) => !prevIsCompanyRegister);
  };

  return (
    <Container>
      <Form className="justify-content-center d-flex">
      <Form.Check // prettier-ignore
        type="switch"
        className="mb-3 fs-5 text-black shadow"
        name="custom-switch"
        id="custom-switch"
        label={isCompanyRegister ? "Register as a COMPANY" : "Register as a USER"}
        onClick={handleSwitch}
      />
    </Form>
    {isCompanyRegister ? <RegisterUser /> : <RegisterCompany />}
    </Container>
  );
};

export default RegisterForm;
