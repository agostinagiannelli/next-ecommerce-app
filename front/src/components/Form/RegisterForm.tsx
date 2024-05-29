"use client"

import { Formik, Form } from 'formik'
import Input from './Input'
import ButtonLight from '../Button/ButtonLight'
import { validateRegister } from '@/utils/validations'

const RegisterForm = () => {

  const handleSubmit = (values: any) => {
    console.log("Successful login")
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', address: '', phone: '', username: '', password: '', passwordConfirmation: '' }}
      validate={validateRegister}
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-sm mx-auto">
        <Form>
          <Input
            placeholder="John Smith"
            type="text"
            name="name"
            label="Name"
          />
          <Input
            placeholder="jsmith@mail.com"
            type="email"
            name="email"
            label="Email"
          />
          <Input
            placeholder="123 Main St"
            type="text"
            name="address"
            label="Address"
          />
          <Input
            placeholder="(123) 456-7890"
            type="text"
            name="phone"
            label="Phone Number"
          />
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

export default RegisterForm