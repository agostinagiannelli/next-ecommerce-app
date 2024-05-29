"use client"

import { Formik, Form } from 'formik'
import { useState } from 'react'
import Input from './Input'
import ButtonLight from '../Button/ButtonLight'
import { loginUser } from '@/services/apiServices'
import { validateLogin } from '@/utils/validate'
import { CredentialsProps } from '@/types/CredentialsProps'

const LoginForm = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ?? null)

  const handleSubmit = (values: CredentialsProps) => {
    loginUser(values)
      .then((data) => {
        setToken(data.token)
        localStorage.setItem('token', data.token)
        console.log(data) // Modificar por mensaje de éxito + redirección a Store + refresh de NavBar
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validateLogin}
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-sm mx-auto">
        <Form>
          <Input
            placeholder="jsmith@mail.com"
            type="email"
            name="email"
            label="Email"
          />
          <Input
            placeholder="********"
            type="password"
            name="password"
            label="Password"
          />
          <div className="flex justify-center pt-4">
            <ButtonLight
              type="submit"
            >
              Submit
            </ButtonLight>
          </div>
        </Form>
      </div>
    </Formik>
  )
}

export default LoginForm