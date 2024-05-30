"use client"

import { useRouter } from "next/navigation"
import { Formik, Form } from "formik"
import { useAuth } from "@/context/AuthContext"
import { loginUser } from "@/services/apiServices"
import { validateLogin } from "@/utils/validate"
import { notifySuccess, notifyFailure } from "@/utils/notify"
import { CredentialsProps } from "@/types/CredentialsProps"
import Input from "@/components/Form/Input"
import ButtonLight from "@/components/Button/ButtonLight"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

const LoginForm = () => {
  const router = useRouter()
  const { token, setAuthData } = useAuth();

  const handleSubmit = async (values: CredentialsProps) => {
    try {
      const data = await loginUser(values);
      if (data && data.token) {
        setAuthData(data.token, data.user);
        notifySuccess('You’re in. Ready to start shopping?', () => router.push('/store'));
      } else {
        notifyFailure('Uh-oh, wrong email or password. Try again.');
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  if (token) {
    return (
      <div className="flex gap-2">
        <span className="text-lg text-contrast">Oops! Looks like you're already logged in.</span>
        <LinkTextArrow href="/store" className="text-primary">Go to Shop</LinkTextArrow>
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-2">
        <span className="text-lg text-contrast">New here?</span>
        <LinkTextArrow href="/auth/register" className="text-primary">Register</LinkTextArrow>
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