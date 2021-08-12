import { useEffect, useState } from 'react';
import ProductCard from 'components/productCard';
import { connect } from 'react-redux';
import getAsyncProductsData, {
  cleanShopCategory,
} from 'redux/shop-category/shop-category.actions';
import Pagination from 'react-paginate';
import { NextIcon, PrevIcon } from './paginationNext';

const listConfig = {
  numberOfCol: 2,
  DEFAULT_PER_PAGE: 2,
  DEFAULT_PAGE: 1,
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
    products: state.shopCategory.data,
    productsCount: state.shopCategory.count,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProductsData: (category, params) =>
    dispatch(getAsyncProductsData(category, params)),
  cleanShopCategory: () => dispatch(cleanShopCategory()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ShopCategoryList({
  config = listConfig,
  getProductsData,
  productsCount,
  products,
  categories,
  category,
  cleanShopCategory,
}) {
  const [currentPage, setPage] = useState(listConfig.DEFAULT_PAGE);

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
    return function () {
      cleanShopCategory();
    };
  }, [categories.length]);

  const handlePageChange = (data) => {
    if (categoryBySlug) {
      getProductsData(categoryBySlug.id, {
        page: data.selected,
        per_page: listConfig.DEFAULT_PER_PAGE,
      });
    }
  };

  const pageCount = Math.ceil(productsCount / listConfig.DEFAULT_PER_PAGE);

  return (
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
      <Pagination
        previousLabel={<PrevIcon />}
        nextLabel={<NextIcon />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        initialPage={currentPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </>
  );
});
