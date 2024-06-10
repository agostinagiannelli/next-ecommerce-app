"use client"

import { useState, useEffect } from "react"
import { getProductById } from "@/services/apiServices"
import { ProductProps } from "@/types/ProductProps"
import ProductDetail from "@/components/Product/ProductDetail"
import Heading4xl from "@/components/Text/Heading4xl"
import Subheading from "@/components/Text/Subheading"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

const Product = ({ params }: { params: { productId: string } }) => {
    const [product, setProduct] = useState<ProductProps>()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!params.productId) return

                const product = await getProductById(params.productId)
                setProduct(product)
            }
            catch (error: any) {
                console.error(error)
            }
        }

        fetchProduct()
    }, [params.productId])

    if (!product)
        return (
            <>
                <Heading4xl>Error</Heading4xl>
                <Subheading>Uh-oh, something went wrong. Please try again later.</Subheading>
            </>
        )

    return (
        <>
            <ProductDetail product={product} />
            <LinkTextArrow href="/store" className="mt-16 text-lg text-primary">Back to Shop</LinkTextArrow>
        </>
    )
}

export default Product