import { connect } from 'react-redux';
import { deleteFromCart } from 'redux/cart/cart.actions';
import { closeCart } from 'redux/ui/ui.actions';
import ProductCard from './ProductCard';
import EmptyState from 'components/emptyState';
import useOnClickOutside from 'utils/onClickOutside';
import Link from 'next/link';
function DrawerCart({ data, deleteFromCart, isOpen = false, closeCart }) {
  const { ref } = useOnClickOutside(closeCart);

  const totalPrice = data.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.price),
    0
  );
  return (
    <div>
      <aside
        ref={ref}
        className={`transform top-0 right-0 w-96 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        // className={`transform top-0 right-0 sm:w-96 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}
      >
        <div>
          <div className='tracking-widest leading-snug flex justify-between w-full bg-black items-center'>
            <h1 className='text-white px-3 py-3'>CART</h1>
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
                stroke='white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          {data.length ? (
            <>
              <ul
                className='menu-center'
                style={{ maxHeight: '400px', overflow: 'scroll' }}
              >
                {data.map((item, idx) => {
                  return (
                    <li key={idx} className='flex w-full border-b-2'>
                      <div className='w-6/12 px-4 py-4'>
                        <ProductCard product={item} onClick={closeCart} />
                      </div>
                      <div className='w-6/12 flex flex-col justify-evenly pr-10 py-4'>
                        <div className='flex justify-between'>
                          <span className='tracking-widest leading-snug font-bold'>
                            {item.price} LEI{' '}
                          </span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            onClick={() => deleteFromCart(idx)}
                            className='h-6 w-6 cursor-pointer'
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
              </ul>
              <div className='px-2 py-4 flex justify-between bg-coolGray-100'>
                <span className='tracking-widest uppercase font-semibold leading-snug'>
                  Total:{' '}
                </span>
                <span className='tracking-widest uppercase font-semibold leading-snug'>
                  {totalPrice} LEI
                </span>
              </div>
              <div>
                <div className='px-5 py-5 flex justify-center flex-col items-center'>
                  <Link href='/checkout'>
                    <button
                      onClick={closeCart}
                      className='btn btn-wide rounded-sm bg-black text-white hover:text-black hover:bg-white hover:border-4'
                    >
                      CHECKOUT
                    </button>
                  </Link>
                  <button
                    onClick={closeCart}
                    className='btn my-5 btn-wide rounded-sm hover:bg-black hover:text-white text-black bg-white border-4'
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
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
  isOpen: state.ui.cart.isOpen,
  data: state.cart.data,
});

const mapDispatchToProps = (dispatch) => ({
  closeCart: () => dispatch(closeCart()),
  deleteFromCart: (payload) => dispatch(deleteFromCart(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DrawerCart);
