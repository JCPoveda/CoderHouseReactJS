import React, {useContext, useState} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart}) {
    const [cart, setCart] = useState(defaultCart);

    function addItem({item, qty}) {
        console.log(item, qty);
        if (cart == [] || (!cart.find((val) => val.item == item))) {
            setCart([...cart,{item: item, quantity: qty}]);
        }
        else {
            setCart([...cart.filter((val) => val.item != item),({item: item, quantity: (cart.find((val) => val.item == item).quantity + qty)})]);
        }
    }

    function removeItem(item) {
        if (cart != []) {
            setCart(cart.filter((val) => val.item != item));
        }
    }

    function clearCart() {
        setCart([]);
    }


    return <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
        {children}
        </CartContext.Provider>
}
  
