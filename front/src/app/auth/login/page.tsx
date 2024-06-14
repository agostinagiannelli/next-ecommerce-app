import LoginForm from "@/components/Form/LoginForm"
import Heading4xl from "@/components/Text/Heading4xl"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login · Codecraft",
  description: "Your one-stop shop for all things tech.",
}

const Login = () => {
  return (
    <>
      <Heading4xl>Login</Heading4xl>
      <LoginForm />
    </>
  )
}

export default Login