import { connect } from 'react-redux';
import { addToCart } from 'redux/cart/cart.actions';
function AddToCart({
  findProduct,
  addToCart,
  selections = {},
  variationsCount = '0',
  productName,
}) {
  const handleClick = () => {
    const product = findProduct();
    product['name'] = productName;
    addToCart(product);
  };
  return (
    <div>
      <button
        name='add to cart'
        onClick={handleClick}
        className={`${
          Number(variationsCount) !== Object.keys(selections).length
            ? 'opacity-70 pointer-events-none	'
            : 'opacity-100'
        } btn btn-wide rounded-sm bg-black border-none text-white hover:text-white hover:bg-gray`}
      >
        Add to cart
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload) => dispatch(addToCart(payload)),
});

export default connect(null, mapDispatchToProps)(AddToCart);
