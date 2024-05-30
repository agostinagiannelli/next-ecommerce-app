import { getProducts } from "@/services/apiServices"
import Heading3xl from "@/components/Text/Heading3xl"
import Cards from "@/components/Product/Cards"
import Video from "@/components/Block/Video"

const Shop = async () => {
  const products = await getProducts();

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