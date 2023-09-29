import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'


import "./itemCount.css"





const ItemCount = () => {
    // const {data} = useCollection("products")

    const [count, setCount] = useState(0);
    const {cartItems, setCartItems} = useContext(CartContext)

    const handleAddProduct = () => {
        setCartItems(cartItems+1)
        setCount(count+1)
    }

    const handleDeleteProduct = () => {
        if(count > 0) {
        setCartItems(cartItems-1)
        setCount(count-1)};
    }
    
    return (
        <div className="itemCount">
            <button onClick={handleDeleteProduct} className="btnRemove" >-</button>
            
            <label className="countItem">{count}</label>
            <button onClick={handleAddProduct} className="btnAdd">+</button>
        </div>
    )
}

export default ItemCount