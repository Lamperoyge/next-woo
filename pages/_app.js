import '../styles/globals.css';
import '../styles/card-list.styles.css';
import '../styles/loader.styles.css';
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Menu from 'components/menu';
import TopBar from 'components/Topbar';
import Categories from 'components/Categories';
import Newsletter from 'components/newsletter';
import Footer from 'components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <TopBar />
      <Categories />
      <Menu />
      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
