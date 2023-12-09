import React from 'react'
import Spacer from '../components/common/spacer'
import LoginForm from '../components/login/login-form'

const LoginPage = () => {
  return (
    <>
        <Spacer height={100} />
        <LoginForm />
        <Spacer />
    </>
  )
}

export default LoginPage