import React, { useState, useEffect } from 'react';

const divStyle={
    color: "white",
    marginTop: 10,
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

function Item({data}) {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(0);

    useEffect(() => {
        setId(data.id);
        setName(data.name);
        setDescription(data.description);
        setStock(data.stock);
        setPrice(data.price);
        setImage(data.image);
    }, []);

    return <>    
        <div style={divStyle}>
            <h3 style={h3Style}>Prod: {name}</h3>
            <img src={image} />
            <p>Price: {price}</p>
            <button style={buttonStyle}>Details</button>
        </div>
     </>;
}

export default Item;