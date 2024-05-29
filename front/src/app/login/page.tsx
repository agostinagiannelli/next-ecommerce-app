import LoginForm from '@/components/Form/LoginForm'
import LinkTextArrow from '@/components/Link/LinkTextArrow'
import Heading4xl from '@/components/Text/Heading4xl'

const Login = () => {
  return (
    <>
      <Heading4xl>Login</Heading4xl>
      <div className="flex gap-2">
      <span className="text-lg text-contrast">New here?</span>
        <LinkTextArrow href="/register" className="text-primary">Register</LinkTextArrow>
      </div>
      <LoginForm />
    </>
  )
}

export default Login