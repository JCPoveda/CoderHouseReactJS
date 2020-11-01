import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';

const buttonStyle={
    color: "white",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "black",
    fontSize: 24,
};

const h3Style={
    color: "white",
    marginTop: 10,
    paddingTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "black",
    fontSize: 24,
};

function ItemDetails({pDescription, pStock, onClose}) {
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);

    useEffect(() => {
        setDescription(pDescription);
        setStock(pStock);
        console.log(stock);
    }, []);

    useEffect(() => {
        setDescription(pDescription);
        setStock(pStock);
    }, [pDescription, pStock]);

    return <>    
        <h3 style={h3Style}>{description}</h3>
        <ItemCount stock={stock} initAmount={1} onAdd={(qty) => console.log(qty)}/>
        <button style={buttonStyle} onClick={() => onClose(false)}>Close Details</button>
     </>;
}

export default ItemDetails;