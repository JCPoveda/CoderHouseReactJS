import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

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

const buttonStyle={
    color: "white",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "black",
    fontSize: 24,
};

function ItemDetails({data}) {
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(0);
    const [purchaseQty, setPurchaseQty] = useState(0);

    function onAdd(qty) {
        setPurchaseQty(qty);
    }

    useEffect(() => {
        if (data != undefined) {
        setDescription(data.description);
        setStock(data.tock);
        setName(data.name);
        setPrice(data.price);
        setImage(data.image);
        }

        window.addEventListener('addPurchase', onAdd);

        return () => {
            window.removeEventListener('addPurchase', onAdd);
        }
    }, []);

    useEffect(() => {
        if (data != undefined) {
        setDescription(data.description);
        setStock(data.stock);
        setName(data.name);
        setPrice(data.price);
        setImage(data.image);
        }
    }, [data]);

    return <>    
        <h3 style={h3Style}>Prod: {name}</h3>
        <img src={image} />
        <p>Price: {price}</p>
        <h3 style={h3Style}>{description}</h3>
        {(purchaseQty == 0) && <ItemCount stock={stock} initAmount={1} onAdd={(qty) => onAdd(qty)}/>}
{(purchaseQty != 0) && <button style={buttonStyle}><Link to='/Cart'>Finalize Purchase ({purchaseQty} Items)</Link></button>}
     </>;
}

export default ItemDetails;