

import { connect } from 'react-redux';
import Header from '../components/Header';
import { addToCart } from '../services/actions/Action';

const mapStateToProps = (state) => {
    console.log('Mapped State:', state);
    return {
      data: state.cardItems.cardData,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    console.log('Mapped Dispatch:', dispatch);
    return {
      addToCartHandler: (data) => dispatch(addToCart(data)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
