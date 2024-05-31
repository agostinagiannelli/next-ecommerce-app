import { getProducts } from "@/services/apiServices"
import { notifyFailure } from "@/utils/notify"
import Heading3xl from "@/components/Text/Heading3xl"
import Cards from "@/components/Product/Cards"
import Video from "@/components/Block/Video"

const Shop = async () => {
  let products

  try {
    products = await getProducts()

    if (!products) {
      notifyFailure("Yikes, something went wrong. Let’s get this sorted out!")
    }
  } catch (error: any) {
    throw new Error(error)
  }

  return (
    <>
      <Video
        src="https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge.mp4"
        title="Designed to amaze you."
        href="/store/product/1"
      />
      <div className="text-center">
        <Heading3xl>Shop Best Sellers</Heading3xl>
      </div>
      <Cards products={products} />
    </>
  )
}

export default Shop