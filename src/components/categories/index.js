import { connect } from 'react-redux';
import { useEffect } from 'react';
import getCategoriesData from 'redux/categories/categories.actions';

const mapStateToProps = (state) => ({ categories: state.categories });
const mapDispatchToProps = (dispatch) => ({
  getCategoriesData: () => dispatch(getCategoriesData()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function index({ getCategoriesData, categories }) {
  useEffect(() => {
    getCategoriesData();
  }, []);
  return null;
});
