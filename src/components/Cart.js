import React, { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

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
    const [totalValue, setTotalValue] = useState(0);

    return <> 
    {(cart.length != 0) && <div>
        <p>Shopping Cart Items:</p>
        {cart.map((obj) => <p>Item: {obj.item}  -   Quantity: {obj.quantity} -   Total Price: {obj.unitPrice * obj.quantity} <button style={buttonStyle} onClick={() => removeItem(obj.item)}>Remove Item</button></p>)}
        <p>Total Price: {cart.reduce((a, b) => a + ((b.unitPrice * b.quantity) || 0), 0)}</p>
        <button style={buttonStyle} onClick={() => clearCart()}>Clear Cart</button>
    </div>}
    {(cart.length == 0) && <div>
        <p>Your Shopping Cart is Empty!</p>
        <button style={buttonStyle}><Link to='/'>Go to Shop</Link></button>
    </div>}
 </>;
}

export default Cart;