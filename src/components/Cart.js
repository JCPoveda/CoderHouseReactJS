import React from 'react';
import { useCartContext } from '../context/cartContext';

const buttonStyle={
    color: "white",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "black",
    fontSize: 24,
};

function Cart() {
    const { cart, clearCart, removeItem } = useCartContext();

    return <>    
    <div>
        <p>Shopping Cart Items:</p>
        {cart.map((obj) => <p>Item: {obj.item}  -   Quantity: {obj.quantity} <button style={buttonStyle} onClick={() => removeItem(obj.item)}>Remove Item</button></p>)}
        <button style={buttonStyle} onClick={() => clearCart()}>Clear Cart</button>
    </div>
 </>;
}

export default Cart;