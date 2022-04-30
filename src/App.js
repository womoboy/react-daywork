import { useState, useEffect } from 'react';
import ProductList from './component/productList/ProductList';
import AddProduct from './component/addProduct/AddProduct';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const sendRequest = async () => {
            const response = await fetch("http://localhost:8000/products");
            const responseData = await response.json();
            setProducts(responseData);        
        };

        sendRequest();
    }, []);

    const productAddition = async (title) => {
        const response = await fetch(`http://localhost:8000/products/`, {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(title)
        });

        const responseData = await response.json();

        setProducts([...products, responseData]);
    }

    const deleteProducts = async (id) => {
        fetch(`http://localhost:8000/products/${id}`, {
            method: "DELETE"
        });

        setProducts(products.filter((product) => {return product.id !== id}))
    }

    return (
        <>
            <AddProduct onAdd={productAddition}/> 
            <ProductList products={products} onDelete={deleteProducts}/> 
        </>
    )
}

export default App;