"use client"

import { Formik, Form } from 'formik'
import { useState } from 'react'
import Input from './Input'
import ButtonLight from '../Button/ButtonLight'
import { registerUser } from '@/services/apiServices'
import { validateRegister } from '@/utils/validate'
import { UserProps } from '@/types/UserProps'

const RegisterForm = () => {

  const [user, setUser] = useState<UserProps>({
    name: '',
    email: '',
    address: '',
    phone: '',
    password: ''
  })

  const handleSubmit = (values: UserProps) => {
    registerUser(values)
      .then((user) => {
        setUser(user)
        console.log(user) // Modificar por mensaje de éxito + redirección a Login
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', address: '', phone: '', username: '', password: '' }}
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

export default RegisterForm