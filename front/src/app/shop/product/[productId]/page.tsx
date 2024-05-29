import ProductDetail from "@/components/Product/ProductDetail"

const Product = ({ params }: { params: { productId: number } }) => {
    return (
        <>
            {/* Product: {params.productId} */}
            <ProductDetail />
        </>
    )
}

export default Product