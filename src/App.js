import { useState } from 'react'
import ProductList from './components/productList/ProductList';

const App = () => {
    const [books, setBook] = useState([
        {id: "#1", title: "Book 1"},
        {id: "#2", title: "Book 2"},
        {id: '#3', title: "Book 3"},
        {id: '#4', title: "Book 4"}
    ]);

    return (
        <>
            <ProductList books={books}/>
        </>
    )
}

export default App;