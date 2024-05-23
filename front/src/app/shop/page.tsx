import Cards from '@/components/Card/Cards'
import { products } from '../../../helpers/products'

const Shop = () => {
  return (
    <Cards products={products} />
  )
}

export default Shop