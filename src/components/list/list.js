import { useEffect, useState } from 'react';
import ProductCard from 'components/productCard';
import { connect } from 'react-redux';
import getAsyncProductsData, {
  cleanShopCategory,
  setIsLoading,
} from 'redux/shop-category/shop-category.actions';
import Pagination from 'react-paginate';
import { NextIcon, PrevIcon } from './paginationNext';
import Loader from 'components/loader';
import { useRouter } from 'next/router';
import EmptyState from 'components/emptyState';
const listConfig = {
  numberOfCol: 2,
  DEFAULT_PER_PAGE: 8,
  DEFAULT_PAGE: 1,
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
    products: state.shopCategory.data,
    productsCount: state.shopCategory.count,
    isLoading: state.shopCategory.isLoading,
    isLoadingCategories: state.categories.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProductsData: (category, params) =>
    dispatch(getAsyncProductsData(category, params)),
  cleanShopCategory: () => dispatch(cleanShopCategory()),
  setIsLoadingProducts: (value) => dispatch(setIsLoading(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ShopCategoryList({
  config = listConfig,
  getProductsData,
  productsCount,
  isLoading,
  products,
  setIsLoadingProducts,
  isLoadingCategories,
  categories,
  category,
  cleanShopCategory,
}) {
  const [currentPage, setPage] = useState(listConfig.DEFAULT_PAGE);
  const router = useRouter();
  const categoryBySlug = categories.find((el) =>
    el ? el.slug === category : ''
  );

  useEffect(() => {
    if (categoryBySlug) {
      getProductsData(categoryBySlug.id, {
        page: currentPage,
        per_page: listConfig.DEFAULT_PER_PAGE,
      });
    }
    if (!categoryBySlug && !isLoadingCategories) {
      setIsLoadingProducts(false);
    }
    if (!categoryBySlug && products.length && !isLoading) {
      cleanShopCategory();
    }
    return function () {
      cleanShopCategory();
    };
  }, [categories.length, currentPage, router.asPath]);

  const handlePageChange = (data) => {
    setPage(data.selected + 1);
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth',
    });
  };
  const pageCount = Math.ceil(productsCount / listConfig.DEFAULT_PER_PAGE);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {products.length ? (
        <>
          <ul className='card-list'>
            {products.map((product, idx) => {
              return (
                <li key={idx} className='card-item w-6/12 flex justify-center'>
                  <ProductCard key={idx} item={product} />
                </li>
              );
            })}
          </ul>
          <div>
            <Pagination
              previousLabel={<PrevIcon />}
              nextLabel={<NextIcon />}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              disableInitialCallback
              forcePage={currentPage - 1}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={
                'pagination flex w-full sm:w-6/12 sm:m-25x justify-around align-center'
              }
              activeClassName={'active bg-black text-white	px-4 py-1'}
            />
          </div>
        </>
      ) : null}
      <EmptyState
        condition={!isLoadingCategories && !products.length && !isLoading}
      />
    </>
  );
});
