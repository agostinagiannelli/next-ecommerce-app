"use client"

import { Formik, Form } from 'formik'
import Input from './Input'
import ButtonLight from '../Button/ButtonLight'
import { validateLogin } from '@/utils/validations'

const LoginForm = () => {

  const handleSubmit = (values: any) => {
    console.log("Successful login")
  }

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={validateLogin}
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-sm mx-auto">
        <Form>
          <Input
            placeholder="jsmith"
            type="text"
            name="username"
            label="Username"
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