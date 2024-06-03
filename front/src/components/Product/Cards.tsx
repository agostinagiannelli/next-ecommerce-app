import Card from "@/components/Product/Card"
import { ProductProps } from "@/types/ProductProps"

const Cards: React.FC<{ products: ProductProps[] | undefined }> = ({ products }) => {
    return (
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products && products
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(product => (
                    <Card
                        key={product.id}
                        product={product}
                    />
                ))}
        </div>
    )
}

export default Cards