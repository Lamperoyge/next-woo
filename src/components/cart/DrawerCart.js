import { connect } from 'react-redux';
import { closeCart, deleteFromCart } from 'redux/cart/cart.actions';
import { useRef } from 'react';
import ProductCard from './ProductCard';
import EmptyState from 'components/EmptyState';
function DrawerCart({ data, deleteFromCart, isOpen = false, closeCart }) {
  const drawerRef = useRef(null);
  if (!isOpen) {
    return null;
  }

  const totalPrice = data.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.price),
    0
  );

  return (
    <div>
      <aside
        ref={drawerRef}
        className={`transform top-0 right-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}
      >
        <div>
          <button
            type='button'
            onClick={closeCart}
            className='w-full flex items-end justify-end py-3 px-3'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          {data.length ? (
            <>
              <ul className='menu-center' style={{ maxHeight: '200px' }}>
                {data.map((item, idx) => {
                  console.log(item);
                  return (
                    <li key={idx} className='flex w-full'>
                      <div className='w-6/12 px-4 py-4'>
                        <ProductCard product={item} />
                      </div>
                      <div className='w-6/12 flex flex-col justify-between pr-10 py-4'>
                        <span className='font-bold'>{item.price} LEI </span>
                        <span>{item.name}</span>
                        <div className='w-full flex justify-between'>
                          {item.attributes.map((attr, idx) => {
                            return <span key={idx}>{attr.option}</span>;
                          })}
                        </div>
                        <div className='flex justify-end'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            onClick={() => deleteFromCart(idx)}
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                          </svg>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div style={{ backgroundColor: '#f8f8f8' }}>
                <span className=''>Total: {totalPrice} LEI</span>
              </div>
            </>
          ) : (
            <EmptyState condition={true} />
          )}
        </div>
      </aside>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.cart.isOpen,
  data: state.cart.data,
});

const mapDispatchToProps = (dispatch) => ({
  closeCart: () => dispatch(closeCart()),
  deleteFromCart: (payload) => dispatch(deleteFromCart(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DrawerCart);
