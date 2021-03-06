import React, { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase';
import * as firebase from 'firebase/app';

const buttonStyle={
    color: "white",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "black",
    fontSize: 24,
};

const tableStyle={
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "grey",
    borderSpacing: 10,
    width: "80%",
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
};

const tableStyle2={
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "black",
    borderSpacing: 10,
    width: "30%",
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
};

function Cart() {
    const { cart, clearCart, removeItem } = useCartContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [verEmail, setVerEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("Your Shopping Cart is Empty!")

    async function createOrder(name, email, phone) {
        const order = {
            buyer: {name: name, telephone: phone, email: email}, 
            items: cart.map((obj) => ({id: obj.itemId, title: obj.item, price: obj.unitPrice, quantity: obj.quantity})), 
            total: cart.reduce((a, b) => a + ((b.unitPrice * b.quantity) || 0), 0),
            date: firebase.firestore.FieldValue.serverTimestamp(),
            state: "Generated"
        };
        console.log(order)

        const db = getFirestore();

        const itemQueryByManyId = await db.collection("items")
        .where(firebase.firestore.FieldPath.documentId(),
        'in', cart.map(obj => obj.itemId) )
        .get();

        

        console.log(itemQueryByManyId.docs);
        console.log(cart)

        itemQueryByManyId.docs.map((fireItem) => fireItem.ref.update({ stock: fireItem.data().stock - (cart.find((item) => item.itemId == fireItem.id).quantity) }));

        const orders = db.collection("orders");

        orders.add(order).then(id => {
            setMessage(`Congratulations! Your Order ID: ${id.id} was generated!` );
            clearCart();
        });
    }

    return <> 
    {(cart.length != 0) && <div>
        <p>Shopping Cart Items:</p>
        <table style={tableStyle}>
        {cart.map((obj) => <tr><td>{obj.item}</td><td>Quantity: {obj.quantity}</td><td>Total Price: {obj.unitPrice * obj.quantity}</td><td><button style={buttonStyle} onClick={() => removeItem(obj.item)}>Remove Item</button></td></tr>)}
        </table>
        <p>Total Price: {cart.reduce((a, b) => a + ((b.unitPrice * b.quantity) || 0), 0)}</p>
        <button style={buttonStyle} onClick={() => clearCart()}>Clear Cart</button>
        <table style={tableStyle2}>
        <tr>
            <td>Name:</td>
            <td><input onChange={event => setName(event.target.value)} /></td>
        </tr>
        <tr>
            <td>Email:</td>
            <td><input onChange={event => setEmail(event.target.value)} /></td>
        </tr>
        <tr>
            <td>Ver. Email:</td>
            <td><input onChange={event => setVerEmail(event.target.value)} /></td>
        </tr>
        <tr>
            <td>Phone:</td>
            <td><input onChange={event => setPhone(event.target.value)} /></td></tr>
        </table>
        <button style={buttonStyle}
            disabled={(!name || !email || !phone || email != verEmail)}
            onClick={() => createOrder(name, email, phone)}>Finalize Purchase</button>
    </div>}
    {(cart.length == 0) && <div>
        <p>{message}</p>
        <button style={buttonStyle}><Link to='/'>Go to Shop</Link></button>
    </div>}
 </>;
}

export default Cart;