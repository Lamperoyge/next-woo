import { connect } from 'react-redux';
import ProductCard from 'components/cart/ProductCard';
const mapStateToProps = (state) => ({
  data: state.cart.data,
});

export default connect(mapStateToProps)(function CheckoutProducts({ data }) {
  const totalPrice = data.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.price),
    0
  );

  return (
    <div
      className='py-10 pr-20 border-l'
      style={{ backgroundColor: '#fafafa' }}
    >
      <div style={{ maxHeight: '350px', overflow: 'scroll' }}>
        {data.map((item, idx) => {
          return (
            <li key={idx} className='flex w-full border-b-2'>
              <div className='w-2/12 px-4 py-4'>
                <ProductCard product={item} />
              </div>
              <div className='w-2/12 flex flex-col justify-evenly py-4'>
                <div className='flex justify-between'>
                  <span className='tracking-widest leading-snug font-bold'>
                    {item.price} LEI{' '}
                  </span>
                </div>
                <span className='tracking-widest leading-snug'>
                  {item.name}
                </span>
                <div className='w-full'>
                  {item.attributes.map((attr, idx) => {
                    return (
                      <div className='flex justify-between' key={idx}>
                        <h2 className='tracking-widest uppercase font-semibold leading-snug text-sm'>
                          {attr.name + ': '}
                        </h2>
                        <span className='tracking-widest uppercase font-semibold leading-snug text-sm'>
                          {' ' + attr.option}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </div>
      <div className='px-2 py-4 flex'>
        <div className='px-5 py-5 w-full space-around flex px-3 mb-6 md:mb-0'>
          <input
            className='appearance-none w-6/12 block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='grid-zip'
            type='text'
            placeholder={'Gift card'}
          />
          <button
            onClick={() => {}}
            name='checkout'
            className='w-3/12 btn btn-wide rounded-sm bg-black text-white hover:text-black hover:bg-white hover:border-4'
          >
            Apply
          </button>
        </div>
      </div>
      <div className='px-2 py-4 flex justify-between bg-coolGray-100'>
        <span className='tracking-widest uppercase font-semibold leading-snug'>
          Total:{' '}
        </span>
        <span className='tracking-widest text-2xl uppercase font-semibold leading-snug'>
          {totalPrice} LEI
        </span>
      </div>
    </div>
  );
});
