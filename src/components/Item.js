import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(0);

    useEffect(() => {
        setId(data.id);
        setName(data.name);
        setPrice(data.price);
        setImage(data.image);
    }, []);

    useEffect(() => {
        setId(data.id);
        setName(data.name);
        setPrice(data.price);
        setImage(data.image);
    }, [data]);

    return <>    
        {(name != "") && <div style={divStyle}>
            <h3 style={h3Style}>{name}</h3>
            <img src={image} width="250" heigth="250"/>
            <p>Price: {price}</p>
            <button style={buttonStyle}><Link to={`/item/${id}`} >See Details</Link></button>
        </div>}
        {(name == "") && <div style={divStyle}>
            <h3 style={h3Style}>Loading...</h3>
            </div>}
     </>;
}

export default Item;