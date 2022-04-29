import React from "react";
import Product from "../product/Product";

const ProductList = ({ products, onDelete }) => {
    return (
        <>
            <ul>
                {products.map((product) => {return <Product id={product.id} key={product.id} title={product.title} onDelete={onDelete}/>})}
            </ul>
        </>
    )
}

export default ProductList;