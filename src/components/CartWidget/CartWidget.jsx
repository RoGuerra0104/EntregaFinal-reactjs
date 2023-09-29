import { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";




const CartWidget = ()=>{

    const {cartItems} = useContext(CartContext);

    return (
        <span className="styleCartWidget" >🛒 <strong>{cartItems}</strong></span>
    )
}

export default CartWidget;