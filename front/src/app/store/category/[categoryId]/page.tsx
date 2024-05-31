"use client"

import { useState, useEffect } from "react"
import { getProductsByCategory } from "@/services/apiServices"
import { categories } from "@/utils/categories"
import { ProductProps } from "@/types/ProductProps"
import Cards from "@/components/Product/Cards"
import Heading3xl from "@/components/Text/Heading3xl"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

const Category = ({ params }: { params: { categoryId: string } }) => {
    const [products, setProducts] = useState<ProductProps[]>()
    const [categoryName, setCategoryName] = useState<string>("")

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (!params.categoryId) return

                const categoryIndex = parseInt(params.categoryId, 10) - 1;
                const categoryName = categories[categoryIndex]?.name || "";
                setCategoryName(categoryName)

                const products = await getProductsByCategory(params.categoryId)
                setProducts(products)
            }
            catch (error: any) {
                throw new Error(error)
            }
        }

        fetchProducts()
    }, [params.categoryId])

    return (
        <>
            <Heading3xl>{categoryName}</Heading3xl>
            <Cards products={products} />
            <LinkTextArrow href="/store" className="mt-16 text-lg text-primary">Back to Shop</LinkTextArrow>
        </>
    )
}

export default Category