import React from 'react';
import shoppingCart from '../shoppingCart.jpg';

const style={
    marginTop: 10,
    float: "right",
    marginRight: 10,
    backgroundColor: "#333",
};

function CartWidget() {
    return <button style={style}><img src={shoppingCart} title="Shopping Cart" alt="Shopping Cart" width="50" height="50"/>
     </button>;
}

export default CartWidget;