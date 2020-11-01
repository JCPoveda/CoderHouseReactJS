import React, { useState, useEffect } from 'react';
import Item from './Item';


function getItems() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(
          [{ id: 1, name: "Guitarra", description: "Guitarra Electrica", stock: 10, price: 15000 , image: "img/guitar.png"}, 
          { id: 2, name: "Bajo", description: "Bajo Electrico 4 Cuerdas", stock: 10, price: 20000, image: "img/bass.png"},
          { id: 3, name: "Piano", description: "Piano Digital", stock: 10, price: 25000 , image: "img/piano.png"}]
        );
        rej([]);
      }, 2000);
    });
}

function ItemList() {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        getItems().then(
          res => {
            setList(res);
          },
          err => {
            console.log(err);
          }
        );
    }, []);
    
    return <>    
        <div>
            {list.map(item => <Item data={item} />)}
        </div>
     </>;
}

export default ItemList;