import React from 'react';
import shoppingCart from '../shoppingCart.jpg';
import { Link } from 'react-router-dom';

const style={
    marginTop: 10,
    float: "right",
    marginRight: 10,
    backgroundColor: "#333",
};

function CartWidget() {
    return <button style={style}>
     <Link to='/Cart'><img src={shoppingCart} title="Shopping Cart" alt="Shopping Cart" width="50" height="50"/></Link></button>;
}

export default CartWidget;