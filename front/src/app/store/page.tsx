// "use client"
// import { useState, useEffect } from "react"
// import { useAuth } from "@/context/AuthContext"

import { getProducts } from "@/services/apiServices"
import { ProductProps } from "@/types/ProductProps"
import Heading3xl from "@/components/Text/Heading3xl"
import Heading4xl from "@/components/Text/Heading4xl"
import Subheading from "@/components/Text/Subheading"
import Cards from "@/components/Product/Cards"
import Video from "@/components/Block/Video"

// const Shop = () => { // Agregar filtro de búsqueda
//   const [products, setProducts] = useState<ProductProps[]>([])
//   const [filter, setFilter] = useState<string>("")

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts = await getProducts()
//         setProducts(fetchedProducts)
//       } catch (error: any) {
//         console.error(error)
//       }
//     }

//     fetchProducts()
//   }, [])

//   const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase())
//   )

//   const { token } = useAuth() // Restringir acceso a usuarios no autenticados

//   if (!token) {
//     return null
//   }

  const Shop = async () => {
    let products: ProductProps[] | undefined

    try {
      products = await getProducts()
    } catch (error: any) {
      console.error(error)
    }

  if (!products)
    return (
      <>
        <Heading4xl>Error</Heading4xl>
        <Subheading>Uh-oh, something went wrong. Please try again later.</Subheading>
      </>
    )

  return (
    <>
      <Video
        src="https://res.cloudinary.com/dlea3w6x8/video/upload/v1717404894/henry-m4/iPhone.mp4"
        title="Designed to amaze you."
        href="/store/product/1"
      />
      <Heading3xl>Shop Best Sellers</Heading3xl>
      <Cards products={products} />

      {/* <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search"
          className="w-full p-2 border border-contrast rounded-lg"
        />
      </div>
      <Cards products={filteredProducts} /> */}
    </>
  )
}

export default Shop