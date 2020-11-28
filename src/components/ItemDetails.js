import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';

const h2Style={
    color: "white",
    marginTop: 10,
    paddingTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "black",
    fontSize: 26,
};

const h3Style={
    color: "white",
    marginTop: 10,
    paddingTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "black",
    fontSize: 21,
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

    const { addItem } = useCartContext();

    function onAdd(qty) {
        setPurchaseQty(qty);
        addItem({itemId: data.id, item: data.name, qty: qty, unitPrice: data.price});
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
        {(name != "") && <div>
            <h3 style={h2Style}>{name}</h3>
            <img src={image} width="350" heigth="350"/>
            <p>Price: {price}</p>
            <h3 style={h3Style}><i>{description}</i></h3>
            {(purchaseQty == 0) && <ItemCount stock={stock} initAmount={1} onAdd={(qty) => onAdd(qty)}/>}
            {(purchaseQty != 0) && <button style={buttonStyle} onClick={() => console.log({item: data.name, qty: purchaseQty})}><Link to='/Cart'>Finalize Purchase</Link></button>}
        </div>}
        {(name == "") && <div>
            <h3 style={h3Style}>Loading...</h3>
        </div>}
    </>;
}

export default ItemDetails;