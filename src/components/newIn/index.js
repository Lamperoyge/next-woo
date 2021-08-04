import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getFavouriteProducts } from 'redux/favourites/favourites.actions';
import { urlExtractor } from 'utils/extractUrl';
import Link from 'next/link';
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
            <div
              key={idx}
              className='flex flex-col w-1/2 lg:w-1/4 md:w-1/3  px-4 py-4 carousel-item'
            >
              <Link href={urlExtractor(item.permalink)}>
                <img src={item.images[0].src} className='w-80 cursor-pointer' />
              </Link>
              <div className='py-5'>
                <h3 className='text-lg'>{item.name}</h3>
                <h5 className='text-sm'>{item.categories[0].name}</h5>
                <h5 className='text-sm'>{item.price + ' LEI'}</h5>
              </div>
            </div>
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
