import React, {useContext, useState} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart}) {
    const [cart, setCart] = useState(defaultCart);

    function add(item, qty) {
        if (cart == [] || (!cart.find((val) => val.item == item))) {
            setCart(cart.append({item: item, quantity: qty}));
        }
        else {
            setCart(cart.filter((val) => val.item != item).append({item: item, quantity: (cart.find((val) => val.item == item).quantity + qty)}));
        }
    }

    function remove(item) {
        if (cart != []) {
            setCart(cart.filter((val) => val.item != item));
        }
    }

    function clear() {
        setCart([]);
    }


    return <CartContext.Provider value={{cart, add, remove, clear}}>
        {children}
        </CartContext.Provider>
}
  
