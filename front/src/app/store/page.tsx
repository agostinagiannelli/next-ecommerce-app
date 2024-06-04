import { getProducts } from "@/services/apiServices"
import { notifyFailure } from "@/utils/notify"
import { ProductProps } from "@/types/ProductProps"
import Heading3xl from "@/components/Text/Heading3xl"
import Cards from "@/components/Product/Cards"
import Video from "@/components/Block/Video"

const Shop = async () => {
  let products: ProductProps[] | undefined

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
        src="https://res.cloudinary.com/dlea3w6x8/video/upload/v1717404894/henry-m4/iPhone.mp4"
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