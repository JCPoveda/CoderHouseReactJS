import React, { useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemListContainer() {
    const [cartAmount, setCartAmount] = useState(0);

    return <>    
        <div>
            <p>Items in Cart: {cartAmount}</p>
            <ItemCount stock={3} initAmount={1} onAdd={(qty) => setCartAmount(cartAmount + qty)}/>
            <ItemList />
        </div>
     </>;
}

export default ItemListContainer;