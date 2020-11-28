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