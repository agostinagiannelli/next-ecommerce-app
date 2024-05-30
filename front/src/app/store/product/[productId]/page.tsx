"use client"

import { useState, useEffect } from "react"
import { getProductById } from "@/services/apiServices"
import { IProduct } from "@/types"
import ProductDetail from "@/components/Product/ProductDetail"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

const Product = ({ params }: { params: { productId: string } }) => {
    const [product, setProduct] = useState<IProduct>()

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

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <ProductDetail product={product} />
            <LinkTextArrow href="/store" className="mt-16 text-primary">Back to Shop</LinkTextArrow>
        </>
    )
}

export default Product