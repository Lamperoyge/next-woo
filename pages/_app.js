import '../styles/globals.css';
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Menu from 'components/menu';
import TopBar from 'components/Topbar';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <TopBar />
      <Menu />
      <Component {...pageProps} />
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
