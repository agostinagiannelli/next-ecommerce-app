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
// import { toast } from "react-toastify"

const LoginForm = () => {
  const { token, setAuthData } = useAuth()

  const handleSubmit = async (user: CredentialProps) => {
    try {
      const data = await loginUser(user)

      setAuthData(data.token, data.user)
      notifySuccess("You’re in. Ready to start shopping?")
      // toast("Test toast",
      // {
      //     className: "font-sans text-black border border-black rounded-lg shadow-none",
      //     position: "top-center",
      //     autoClose: 2000,
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light"
      // })
    } catch (error: any) {
      if (error.message.includes("Invalid password")) {
        notifyFailure("Uh-oh, your password isn't quite right. Try again.")
      } else if (error.message.includes("User does not exist")) {
        notifyFailure("Uh-oh, user not found. Check your details.")
      } else {
        notifyFailure("Uh-oh, something went wrong. Try again.")
      }
      console.error(error)
    }
  }

  if (token) {
    return (
      <div className="flex gap-2">
        <span className="text-lg text-contrast">Looks like you&apos;re already logged in.</span>
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
        initialValues={{ email: "", password: "" }}
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