import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from './ItemDetails';
import { getFirestore } from '../firebase';

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
          [{ id: 1, name: "Guitarra", description: "Guitarra Electrica", stock: 10, price: 15000 , image: "/img/guitar.png"}, 
          { id: 2, name: "Bajo", description: "Bajo Electrico 4 Cuerdas", stock: 10, price: 20000, image: "/img/bass.png"},
          { id: 3, name: "Piano", description: "Piano Digital", stock: 10, price: 25000 , image: "/img/piano.png"}].find((item) => item.id == id)
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
            const db = getFirestore();
            const itemCollection = db.collection('items');
            const catCollection = itemCollection.doc(itemId);
          
            catCollection.get().then((querySnapshot) => {
              if(querySnapshot.size === 0) {
                  console.log('No Data')
              }
              else {
                setItemData(((doc = querySnapshot) => ({ id: doc.id, name: doc.data().title, description: doc.data().description, stock: doc.data().stock, price:  doc.data().price, image: ('/img/'+doc.data().imageId), category: doc.data().categoryId})))
              }
            })
    }, []);

    useEffect(() => {
            const db = getFirestore();
            const itemCollection = db.collection('items');
            const catCollection = itemCollection.where('id', '==', itemId);
          
            catCollection.get().then((querySnapshot) => {
              if(querySnapshot.size === 0) {
                  console.log('No Data')
              }
              else {
                setItemData(querySnapshot.docs.map(doc => ({ id: doc.id, name: doc.data().title, description: doc.data().description, stock: doc.data().stock, price:  doc.data().price, image: ('/img/'+doc.data().imageId), category: doc.data().categoryId})).first())
              }
            })
    }, [itemId]);

    return <>    
        <div style={divStyle}>
            <ItemDetails data={itemData} />
        </div>
     </>;
}

export default ItemDetailsContainer;