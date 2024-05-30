"use client"

import { useRouter } from "next/navigation"
import { Formik, Form } from "formik"
import { registerUser } from "@/services/apiServices"
import { validateRegister } from "@/utils/validate"
import { notifySuccess, notifyFailure } from "@/utils/notify"
import { UserProps } from "@/types/UserProps"
import Input from "@/components/Form/Input"
import ButtonLight from "@/components/Button/ButtonLight"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

const RegisterForm = () => {
  const router = useRouter()

  const handleSubmit = async (values: UserProps) => {
    try {
      const data = await registerUser(values);
      if (data) {
        notifySuccess('Welcome aboard! Login to start shopping.', () => router.push('/auth/login'));
      } else {
        notifyFailure('Yikes, something went wrong. Try again.');
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return (
    <>
      <div className="flex gap-2">
        <span className="text-lg text-contrast">Already with us?</span>
        <LinkTextArrow href="/auth/login" className="text-primary">Login</LinkTextArrow>
      </div>

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
    </>
  )
}

export default RegisterForm