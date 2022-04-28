import { useState } from 'react'
import ProductList from './components/productList/ProductList';
import AddProduct from './components/addProduct/AddProduct';

const App = () => {
    const [products, setProducts] = useState([
        {id: "#1", title: "Book 1"},
        {id: "#2", title: "Book 2"},
        {id: '#3', title: "Book 3"},
        {id: '#4', title: "Book 4"}
    ]);

    const productAdd = (title)=>{
        const id = Math.floor(Math.random() * 1000);
        const newProduct = {id, ...title};
        setProducts([...products, newProduct]);
    }

    const deleteProduct = (id) => {
        setProducts(products.filter((item) => item.id !== id));
    }

    return (
        <>
            <AddProduct onAdd={productAdd}/>
            <ProductList products={products} onDelete={deleteProduct}/>
        </>
    )
}

export default App;