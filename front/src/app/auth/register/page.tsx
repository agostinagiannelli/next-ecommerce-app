import RegisterForm from "@/components/Form/RegisterForm"
import Heading4xl from "@/components/Text/Heading4xl"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register · Codecraft",
  description: "Your one-stop shop for all things tech.",
}

const Register = () => {
  return (
    <>
      <Heading4xl>Register</Heading4xl>
      <RegisterForm />
    </>
  )
}

export default Register