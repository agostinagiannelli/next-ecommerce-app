import Video from '@/components/Block/Video'
import Heading3xl from '@/components/Text/Heading3xl'
import Cards from '@/components/Card/Cards'
import { products } from '@/utils/products'

const Shop = () => {
  return (
    <>
      <Video
        src="https://www.apple.com/105/media/us/iphone/family/2024/1efec3e0-8619-4684-a57e-6e2310394f08/anim/welcome/xlarge.mp4"
        title="Designed to amaze you."
        href="/shop/product/1"
      />
      <div className="text-center">
        <Heading3xl>Shop Best Sellers</Heading3xl>
      </div>
      <Cards products={products} />
    </>
  )
}

export default Shop