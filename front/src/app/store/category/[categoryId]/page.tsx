import { getProductsByCategory } from "@/services/apiServices"
import { categories } from "@/utils/categories"
import { ProductProps } from "@/types/ProductProps"
import Cards from "@/components/Product/Cards"
import Heading3xl from "@/components/Text/Heading3xl"
import Heading4xl from "@/components/Text/Heading4xl"
import Subheading from "@/components/Text/Subheading"
import LinkTextArrow from "@/components/Link/LinkTextArrow"

export const generateMetadata = async ({ params }: { params: { categoryId: string } }) => {
    let products: ProductProps[] | undefined
    let categoryName: string = ""
    let categoryDescription: string = ""

    try {
        const categoryIndex = parseInt(params.categoryId, 10) - 1
        categoryName = categories[categoryIndex]?.name || ""
        categoryDescription = categories[categoryIndex]?.description || ""

        products = await getProductsByCategory(params.categoryId)
    } catch (error: any) {
        console.error(error)
    }

    return {
        title: `${categoryName} · Codecraft`,
        description: categoryDescription
    }
}

const Category = async ({ params }: { params: { categoryId: string } }) => {
    let products: ProductProps[] | undefined
    let categoryName: string = ""

    try {
        const categoryIndex = parseInt(params.categoryId, 10) - 1
        categoryName = categories[categoryIndex]?.name || ""

        products = await getProductsByCategory(params.categoryId)
    } catch (error: any) {
        console.error(error)
    }

    if (!products) {
        return (
            <>
                <Heading4xl>Error</Heading4xl>
                <Subheading>Uh-oh, something went wrong. Please try again later.</Subheading>
            </>
        )
    }

    return (
        <>
            <Heading3xl>{categoryName}</Heading3xl>
            <Cards products={products} />
            <LinkTextArrow href="/store" className="mt-16 text-lg text-primary">Back to Shop</LinkTextArrow>
        </>
    )
}

export default Category