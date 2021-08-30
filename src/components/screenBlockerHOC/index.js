import { connect } from 'react-redux';

function BlockScreen({ children, isOpen }) {
  return (
    <div
      style={{ opacity: isOpen ? 0.6 : 1, pointerEvents: isOpen ? 'none' : '' }}
    >
      {children}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.cart.isOpen,
});

export default connect(mapStateToProps)(BlockScreen);
