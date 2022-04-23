const products = [
    {id: 1, title: "Book 1"},
    {id: 2, title: "Book 2"},
    {id: 3, title: "Book 3"}
];

const ProductList = () => {
    return (
        <div>
            {products.map((item)=>{
                return <p key={item.id}>{item.title}</p>
            })}
        </div>
    )
}

export default ProductList;