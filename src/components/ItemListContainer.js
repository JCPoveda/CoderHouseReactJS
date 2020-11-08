import React, { useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemListContainer() {
    const [cartAmount, setCartAmount] = useState(0);

    return <>    
        <div>
            <ItemList />
        </div>
     </>;
}

export default ItemListContainer;