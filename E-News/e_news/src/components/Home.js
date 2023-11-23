// Home.js

import React from 'react';
import img from '../Images/img.png';
import './Home.css';
import { connect } from 'react-redux';
import { addToCart } from '../services/actions/Action'; // Adjust the import path based on your actual file structure

const Home = (props) => {
  console.warn("Home", props.data);

  return (
    <>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src={img}
            alt="Iphone"
            className="imageClass"
            style={{ width: '100px', height: 'auto' }}
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => { props.addToCart({ price: 1000, name: 'i phone 11' }) }}
          >Add To Cart</button>
           <button
            onClick={() => { props.removeToCart() }}
          >Remove from Cart</button>
          </div>
          
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.cardItems.cardData
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
