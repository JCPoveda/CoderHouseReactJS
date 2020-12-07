import React, { useState, useEffect } from 'react';
import Item from './Item';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';

function ItemList({data}) {
    const [list, setList] = useState([]);
    
    useEffect(() => {        
        setList(data);
    }, [data]);
    
    return <>    
        <div>
            {list.map(item => <Item data={item} />)}
        </div>
     </>;
}

export default ItemList;