const Category = ({ params }: { params: { categoryId: number } }) => {
    return (
        <div>Category: {params.categoryId}</div>
    )
}

export default Category