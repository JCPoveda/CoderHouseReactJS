import React, {useContext, useState} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultCart}) {
    const [cart, setCart] = useState(defaultCart);

    function addItem({itemId, item, qty, unitPrice}) {
        console.log(item, qty);
        if (cart == [] || (!cart.find((val) => val.item == item))) {
            setCart([...cart,{itemId: itemId, item: item, quantity: qty, unitPrice: unitPrice}]);
        }
        else {
            setCart([...cart.filter((val) => val.item != item),({item: item, quantity: (cart.find((val) => val.item == item).quantity + qty), unitPrice: unitPrice})]);
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
  
