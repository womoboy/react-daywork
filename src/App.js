import { useState } from 'react'
import ProductList from './components/productList/ProductList';

const App = () => {
    const [products, setProducts] = useState([
        {id: 1, title: "Book 1"},
        {id: 2, title: "Book 2"},
        {id: 3, title: "Book 3"}
    ])

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    }

    return (
        <>
            <ProductList products={products} onDelete={deleteProduct}/>
        </>
    )
}

export default App