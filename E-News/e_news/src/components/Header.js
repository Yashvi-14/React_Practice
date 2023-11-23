import React from 'react';
import cart from '../Images/cart.png'
function Header(props) {
  console.warn("Header",props.data);

  return (
    <div>
       <div className="add-to-cart">
        {/* <span className="cart-count">{ 0 }</span> */}
        <span className="cart-count">{Array.isArray(props.data) ? props.data.length : 0}</span>

        <img
          src={cart}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
