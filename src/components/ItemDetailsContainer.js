import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

function ItemDetailsContainer() {
    // const [id, setId] = useState(0);
    const [itemData, setItemData] = useState();
    const { itemId } = useParams(); 

    useEffect(() => {
        // setId(itemId);
        getItems(itemId).then(
            res => {
                setItemData(res);
              },
              err => {
                console.log(err);
              }
            );
    }, []);

    useEffect(() => {
        getItems(itemId).then(
            res => {
                setItemData(res);
              },
              err => {
                console.log(err);
              }
            );
    }, [itemId]);

    return <>    
        <div style={divStyle}>
            <ItemDetails data={itemData} />
        </div>
     </>;
}

export default ItemDetailsContainer;