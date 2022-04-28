import { useState } from 'react'
import ProductList from './components/productList/ProductList';

const App = () => {
    const [products, setProducts] = useState([
        {id: "#1", title: "Book 1"},
        {id: "#2", title: "Book 2"},
        {id: '#3', title: "Book 3"},
        {id: '#4', title: "Book 4"}
    ]);

    const deleteProduct = (id) => {
        setProducts(products.filter((item) => item.id !== id));
    }

    return (
        <>
            <ProductList products={products} onDelete={deleteProduct}/>
        </>
    )
}

export default App;