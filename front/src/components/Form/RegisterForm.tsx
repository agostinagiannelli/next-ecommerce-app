"use client"

import { Formik, Form } from "formik"
import { useRouter } from "next/navigation"
import { registerUser } from "@/services/apiServices"
import { validateRegister } from "@/utils/validate"
import { notifySuccess, notifyFailure } from "@/utils/notify"
import { UserProps } from "@/types/UserProps"
import Input from "@/components/Form/Input"
import ButtonLight from "@/components/Button/ButtonLight"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

const RegisterForm = () => {
  const router = useRouter()

  const handleSubmit = async (user: UserProps) => {
    try {
      await registerUser(user)
      
      notifySuccess("Welcome aboard! Login to start shopping.", () => router.push("/auth/login"))
    } catch (error: any) {
      if (error.message.includes("User already exists")) {
        notifyFailure("Uh-oh, user already exists. Try signing in instead.")
        console.error(error)
      } else {
        notifyFailure("Uh-oh, something went wrong. Try again.")
        console.error(error)
      }
    }
  }

  return (
    <>
      <div className="flex gap-2">
        <span className="text-lg text-contrast">Already with us?</span>
        <LinkTextArrow href="/auth/login" className="text-lg text-primary">Login</LinkTextArrow>
      </div>

      <Formik
        initialValues={{ name: "", email: "", address: "", phone: "", username: "", password: "" }}
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
    </>
  )
}

export default RegisterForm