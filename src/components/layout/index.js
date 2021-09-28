import Menu from 'components/menu';
import TopBar from 'components/Topbar';
import Categories from 'components/Categories';
import Footer from 'components/footer';
import BlockScreen from 'components/screenBlockerHOC';
import { useRouter } from 'next/router';

const NO_LAYOUT_PAGES = ['/checkout'];

export default function withLayoutHOC(Component) {
  return function (props) {
    const router = useRouter();
    if (!NO_LAYOUT_PAGES.includes(router.pathname)) {
      return (
        <BlockScreen>
          <TopBar />
          <Categories />
          <Menu />
          <Component {...props} />
          <Footer />
        </BlockScreen>
      );
    } else {
      return <Component {...props} />;
    }
  };
}
