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

function ItemDetails({data}) {
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(0);

    useEffect(() => {
        if (data != undefined) {
        setDescription(data.description);
        setStock(data.tock);
        setName(data.name);
        setPrice(data.price);
        setImage(data.image);
        }
    }, []);

    useEffect(() => {
        if (data != undefined) {
        setDescription(data.description);
        setStock(data.tock);
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
        <ItemCount stock={stock} initAmount={1} onAdd={(qty) => console.log(qty)}/>
     </>;
}

export default ItemDetails;