import Card from '@/components/Card/Card'
import { IProduct } from '@/types/IProduct'

interface CardsProps {
    products: IProduct[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
    return (
        <div className="grid w-full grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:px-0">
            {products && products.map(product => (
                <Card
                    key={product.id} {...product}
                />
            ))}
        </div>
    )
}

export default Cards