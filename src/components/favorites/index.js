import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getFavouriteProducts } from 'redux/favourites/favourites.actions';
import ProductCard from '../productCard/index';
const Favorites = ({ getFavourites, favourites }) => {
  useEffect(() => {
    getFavourites();
  }, []);

  if (!favourites.length) return null;
  return (
    <div className='px-5 py-5'>
      <h2 className='text-center text-4xl font-semibold leading-snug'>
        Our favorites
      </h2>
      <div className='w-full carousel  px-10 rounded-box'>
        {favourites.map((item, idx) => {
          return <ProductCard item={item} idx={idx} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ favourites: state.favourites.data });

const mapDispatchToProps = (dispatch) => ({
  getFavourites: () => dispatch(getFavouriteProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
