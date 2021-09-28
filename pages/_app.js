import '../styles/globals.css';
import '../styles/card-list.styles.css';
import '../styles/loader.styles.css';
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Menu from 'components/menu';
import TopBar from 'components/Topbar';
import Categories from 'components/Categories';
import Footer from 'components/footer';
import DrawerCart from 'components/cart/DrawerCart';
import { PersistGate } from 'redux-persist/integration/react';
import BlockScreen from 'components/screenBlockerHOC';
import withLayout from 'components/layout';
function MyApp({ Component, pageProps }) {
  const ComponentWithLayout = withLayout(Component);
  return (
    <Provider store={store}>
      <PersistGate persistor={store.__PERSISTOR} loading={null}>
        <DrawerCart />
        <ComponentWithLayout {...pageProps} />
        {/* <BlockScreen>
          <TopBar />
          <Categories />
          <Menu />
          <Component {...pageProps} />
          <Footer />
        </BlockScreen> */}
      </PersistGate>
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
