import React, { useState, useEffect } from 'react';

const buttonStyle={
    color: "white",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "black",
    fontSize: 24,
};

const divStyle={
    color: "white",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "black",
    fontSize: 24,
};

function ItemCount({stock, initAmount, onAdd})  {
    const [itemAmount, setItemAmount] = useState();

    useEffect(() => {
        setItemAmount(1);
      }, []);

    function addItem() {
        if ((itemAmount) < stock){
            setItemAmount(itemAmount + 1);
        }
    }
    
    function removeItem() {
        if ((itemAmount) > initAmount){
            setItemAmount(itemAmount - 1);
        }
    }

    return <>    
        <div style={divStyle}>
        <button style={buttonStyle} onClick={removeItem}>-</button>{itemAmount}
        <button style={buttonStyle} onClick={addItem}>+</button>
        <br></br>
        <button style={buttonStyle} onClick={() => onAdd(itemAmount)}>Add to Cart</button>
        </div>
     </>;
}

export default ItemCount;