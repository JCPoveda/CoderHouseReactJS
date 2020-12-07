import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [cartAmount, setCartAmount] = useState(0);
    const [list, setList] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {        
        const db = getFirestore();
        const itemCollection = db.collection('items');
        
  
        if (categoryId != undefined) {
          const catCollection = itemCollection.where('categoryId', '==', categoryId);
  
          catCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No Data')
            }
            else {
              setList(querySnapshot.docs.map(doc => ({ id: doc.id, name: doc.data().title, description: doc.data().description, stock: doc.data().stock, price:  doc.data().price, image: ('/img/'+doc.data().imageId), category: doc.data().categoryId})))
            }
          })
        }
        else {
          itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No Data')
            }
            else {
              setList(querySnapshot.docs.map(doc => ({ id: doc.id, name: doc.data().title, description: doc.data().description, stock: doc.data().stock, price:  doc.data().price, image: ('/img/'+doc.data().imageId), category: doc.data().categoryId})))
            }
          })
        }
      }, [categoryId]);

    return <>    
        <div>
            <ItemList data={list}/>
        </div>
     </>;
}

export default ItemListContainer;