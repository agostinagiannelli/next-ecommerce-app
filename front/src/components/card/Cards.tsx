import Card from '@/components/Card/Card'
import { ProductProps } from '@/types/ProductProps'

interface CardsProps {
    products: ProductProps[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
    return (
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products && products.map(product => (
                <Card
                    key={product.id} {...product}
                />
            ))}
        </div>
    )
}

export default Cards