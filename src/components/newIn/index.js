import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getFavouriteProducts } from 'redux/favourites/favourites.actions';
import ProductCard from 'components/productCard';
const NewProducts = ({ getFavourites, favourites }) => {
  useEffect(() => {
    getFavourites();
  }, []);
  if (!favourites.length) return null;
  return (
    <div className='px-5 py-5'>
      <h2 className='text-center text-4xl font-semibold leading-snug'>
        New products
      </h2>
      <div className='w-full carousel  rounded-box'>
        {favourites.map((item, idx) => {
          return (
            <ProductCard
              classnames='w-1/2 lg:w-1/4 md:w-1/3  px-4 py-4 carousel-item'
              item={item}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ favourites: state.favourites.data });

const mapDispatchToProps = (dispatch) => ({
  getFavourites: () => dispatch(getFavouriteProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);
