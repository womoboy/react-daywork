import './Product.css';

function Product(probs){
    return (
        <div className="product">
            <p>{probs.title}</p>
            <button>ClickMe</button>
        </div>
    )
}

export default Product;