
import './Product.css';

const Product = ({product, onDelete}) => {
    return (
        <div className='product'>
            <h2 className='title'>{product.title}</h2>
            <button className='btn' onClick={() => onDelete(product.id)}>Delete</button>
        </div>
    );
}

export default Product;