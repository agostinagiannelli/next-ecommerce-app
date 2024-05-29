import RegisterForm from '@/components/Form/RegisterForm'
import LinkTextArrow from '@/components/Link/LinkTextArrow'
import Heading4xl from '@/components/Text/Heading4xl'

const Register = () => {
  return (
    <>
      <Heading4xl>Register</Heading4xl>
      <div className="flex gap-2">
        <span className="text-lg text-contrast">Already with us?</span>
        <LinkTextArrow href="/auth/login" className="text-primary">Login</LinkTextArrow>
      </div>
      <RegisterForm />
    </>
  )
}

export default Register