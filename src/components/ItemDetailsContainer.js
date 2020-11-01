import React, { useState, useEffect } from 'react';
import ItemDetails from './ItemDetails';

const divStyle={
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

function getItems(id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(
          [{ id: 1, name: "Guitarra", description: "Guitarra Electrica", stock: 10, price: 15000 , image: "img/guitar.png"}, 
          { id: 2, name: "Bajo", description: "Bajo Electrico 4 Cuerdas", stock: 10, price: 20000, image: "img/bass.png"},
          { id: 3, name: "Piano", description: "Piano Digital", stock: 10, price: 25000 , image: "img/piano.png"}].find((item) => item.id == id)
        );
        rej([]);
      }, 2000);
    });
}

function ItemDetailsContainer({pId, onClose}) {
    const [id, setId] = useState(0);
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);

    useEffect(() => {
        setId(pId);
        getItems(pId).then(
            res => {
                setDescription(res.description);
                setStock(res.stock);
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }, []);

    return <>    
        <div style={divStyle}>
            {console.log(description)}
            {console.log(stock)}
            <ItemDetails pDescription={description} pStock={stock} onClose={(aux) => onClose(aux)} />
        </div>
     </>;
}

export default ItemDetailsContainer;