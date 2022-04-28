import Product from "../product/Product";

const ProductList = (props) => {
  return (
    <>
      <ul>
        {props.books.map((book) => {
          return <Product id={book.id} key={book.id} title={book.title} />;
        })}
      </ul>
    </>
  );
};

export default ProductList;
