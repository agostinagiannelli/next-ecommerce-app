import { getProducts } from "@/services/apiServices"
import { ProductProps } from "@/types/ProductProps"
import Heading3xl from "@/components/Text/Heading3xl"
import Heading4xl from "@/components/Text/Heading4xl"
import Subheading from "@/components/Text/Subheading"
import Cards from "@/components/Product/Cards"
import Video from "@/components/Block/Video"

const Shop = async () => {
  let products: ProductProps[] | undefined

  try {
    products = await getProducts()
  } catch (error: any) {
    console.error(error)
  }

  if (!products)
    return (
      <>
        <Heading4xl>Error</Heading4xl>
        <Subheading>Uh-oh, something went wrong. Please try again later.</Subheading>
      </>
    )

  return (
    <>
      <Video
        src="https://res.cloudinary.com/dlea3w6x8/video/upload/v1717404894/henry-m4/iPhone.mp4"
        title="Designed to amaze you."
        href="/store/product/1"
      />
      <Heading3xl>Shop Best Sellers</Heading3xl>
      <Cards products={products} />
    </>
  )
}

export default Shop