import CartDetail from "@/components/Cart/CartDetail"
import Heading4xl from "@/components/Text/Heading4xl"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cart · Codecraft",
  description: "Your one-stop shop for all things tech.",
}

const Cart = () => {
  return (
    <>
      <Heading4xl>Cart</Heading4xl>
      <CartDetail />
    </>
  )
}

export default Cart