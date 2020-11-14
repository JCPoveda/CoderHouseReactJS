import React, { useEffect, useState } from 'react';
import shoppingCart from '../shoppingCart.jpg';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const style={
    marginTop: 10,
    float: "right",
    marginRight: 10,
    backgroundColor: "#333",
};

function CartWidget() {
    const { cart } = useCartContext();
    const [itemsInCart, setItemsInCart] = useState(0);

    useEffect(() => {
        setItemsInCart(cart.reduce((a, b) => a + ((b.quantity) || 0), 0));
    }, [cart]);

    return <>
        {(itemsInCart != 0) && <button style={style}>
            <Link to='/Cart'><img src={shoppingCart} title="Shopping Cart" alt="Shopping Cart" width="50" height="50"/></Link>
            <p>{itemsInCart}</p>
        </button>}
    </>;
}

export default CartWidget;