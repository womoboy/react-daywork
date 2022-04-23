
import './Product.css';

const Product = ({title}) => {
    const showTitle = () => {
        console.log(title);
    }

    return (
        <div className='product'>
            <h2 className='title'>{title}</h2>
            <button className='btn' onClick={showTitle}>clickMe</button>
        </div>
    );
}

export default Product;