import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getFavouriteProducts } from 'redux/favourites/favourites.actions';
import ProductCard from '../productCard/index';
import Loader from 'components/loader';
const Favorites = ({ getFavourites, favourites, isLoading }) => {
  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <div className='px-5 py-5'>
      <h2 className='text-center text-4xl font-semibold leading-snug'>
        Our favorites
      </h2>
      <div className='w-full carousel  px-10 rounded-box'>
        <Loader show={isLoading} />
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

const mapStateToProps = (state) => ({
  favourites: state.favourites.data,
  isLoading: state.favourites.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getFavourites: () => dispatch(getFavouriteProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
