import ProductCard from 'components/ProductCard';
import { connect } from 'react-redux';

const listConfig = {
  numberOfCol: 2,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function ShopCategoryList({ config = listConfig, items }) {
  return <div></div>;
});
