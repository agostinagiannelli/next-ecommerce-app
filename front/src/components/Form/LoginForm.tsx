"use client"

import { Formik, Form } from "formik"
import { useAuth } from "@/context/AuthContext"
import { loginUser } from "@/services/apiServices"
import { validateLogin } from "@/utils/validate"
import { notifySuccess, notifyFailure } from "@/utils/notify"
import { CredentialProps } from "@/types/CredentialProps"
import Input from "@/components/Form/Input"
import ButtonLight from "@/components/Button/ButtonLight"
import LinkTextArrow from "@/components/Link/LinkTextArrow"
// import { toast } from 'react-toastify'

const LoginForm = () => {
  const { token, setAuthData } = useAuth()

  const handleSubmit = async (values: CredentialProps) => {
    try {
      const data = await loginUser(values)
      if (data) {
        setAuthData(data.token, data.user)
        // toast("✅ Test",
        //   {
        //     className: 'font-sans text-black border border-black rounded-lg shadow-none',
        //     position: "top-right",
        //     autoClose: 2000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //   })
        notifySuccess('You’re in. Ready to start shopping?')
      } else {
        notifyFailure('Uh-oh, wrong email or password. Try again.')
      }
    } catch (error: any) {
      throw new Error(error)
    }
  }

  if (token) {
    return (
      <div className="flex gap-2">
        <span className="text-lg text-contrast">Oops! Looks like you're already logged in.</span>
        <LinkTextArrow href="/store" className="text-lg text-primary">Go to Shop</LinkTextArrow>
      </div>
    )
  }

  return (
    <>
      <div className="flex gap-2">
        <span className="text-lg text-contrast">New here?</span>
        <LinkTextArrow href="/auth/register" className="text-lg text-primary">Register</LinkTextArrow>
      </div>
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
    </>
  )
}

export default LoginForm