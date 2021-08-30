import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getMenu } from 'redux/menu/menu.actions';
import Link from 'next/link';
import config from './config';
import Dropdown from './dropdown';
import Cart from '../cart/CartIcon';
import Menu from './menu';
const MainMenu = ({ menuData, getMenuData }) => {
  useEffect(() => {
    getMenuData();
  }, []);
  return (
    <nav className='px-4 py-3 bg-white items-center flex justify-between sticky top-0'>
      <Dropdown config={config} />
      <Menu config={config} />
      <Link href='/'>
        <div className='cursor-pointer flex lg:w-6/12'>
          <img className='h-9' src='/images/logo.svg' alt='Allbirds logo' />
        </div>
      </Link>
      <Cart />
    </nav>
  );
};

const mapStateToProps = (state) => ({ menuData: state.menu.data });

const mapDispatchToProps = (dispatch) => ({
  getMenuData: () => dispatch(getMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
