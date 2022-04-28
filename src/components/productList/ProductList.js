import Product from "../product/Product";

const ProductList = (props) => {
  return (
    <>
      <ul>
        {props.products.map((product) => {
          return <Product id={product.id} key={product.id} title={product.title} onDelete={props.onDelete}/>;
        })}
      </ul>
    </>
  );
};

export default ProductList;
