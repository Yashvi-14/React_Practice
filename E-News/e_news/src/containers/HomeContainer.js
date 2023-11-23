// Home.js

import { connect } from 'react-redux';
import Home from '../components/Home';
import { addToCart,removeToCart } from '../services/actions/Action';

// const mapDispatchToProps = (dispatch) => ({
//   addToCartHandler: (data) => dispatch(addToCart(data)),
// });

const mapStateToProps = (state) => ({
   data:state.cardData
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addToCart(data)),
  removeToCart: (data) => dispatch(removeToCart(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
