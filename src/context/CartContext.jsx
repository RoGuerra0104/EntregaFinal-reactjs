
import { useState } from "react";
import { createContext } from "react";



export const CartContext= createContext()

export const CardProvider = ({children})=>{
    const [cartItems, setCartItems] = useState(0);

    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}