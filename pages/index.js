import Head from 'next/head';
import Banner from 'components/banner';
import Favorites from 'components/favorites';
import CollectionPromo from 'components/newCollectionPromo';
import ProductHighlight from 'components/productHighlight';
import NewProducts from 'components/newIn';
import Newsletter from 'components/newsletter';
import Footer from 'components/footer';
export default function Home() {
  return (
    <>
      <Head>
        <meta
          content='width=device-width, initial-scale=1, maximum-scale=1'
          name='viewport'
        ></meta>

        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Banner />
        <CollectionPromo />
        <Favorites />
        <ProductHighlight />
        <CollectionPromo />
        <NewProducts />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
