import { useSelector, useDispatch } from 'react-redux'
import { updateQuantityInc, updateQuantityDec, updateQuantityReset, updateTotal, updateCartQty } from "../store/Cart/cartSlice"
const CartPage = () => {
    const { cartItems,cart_total } = useSelector((state) => state.cart)
    const { quantity } = useSelector((state) => state.cart)
    const { total } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    // bug code
    // const handleQuantity = (type, id) => {
    //     const getId = cartItems.findIndex((obj) => obj.id === id)
    //     console.log(getId)
    //     if (id === getId) {
    //         if (type === "inc") {
    //             dispatch(updateQuantityInc())
    //             const obj = cartItems[id]
    //             const pre = { ...obj, ["quantity"]: quantity + 1 }
    //             console.log(pre)
    //         }
    //         else {
    //             dispatch(updateQuantityDec())
    //             console.log(total, quantity)
    //         }
    //     }
    //     dispatch(updateQuantityReset())
    // }
    const handleUpdateQty = (type, id, qty) => {
        if (type === 'inc') {
            dispatch(updateCartQty({ id, qty: qty + 1,type }))
        }
        if (type === 'dec') {
            dispatch(updateCartQty({ id, qty: qty - 1 ,type}))
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col mb-5">
                        <p className='h2 text-center'>Your cart ({`${cartItems.length} Items`})</p>
                    </div>
                </div>
                {/* Heading */}
                <div className="row border-bottom pb-2">
                    <div className="col-6">Item</div>
                    <div className="col">Price</div>
                    <div className="col">Quantity</div>
                    <div className="col">Total</div>
                </div>
                {/* Body */}
                {cartItems.map((obj, index) => (
                    <>
                        {console.log(dispatch(updateTotal()))}
                        <div className="row border-bottom pb-2">
                            <div className="col-6">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <img src={obj.image} className='w-100 h-100' />
                                    </div>
                                    <div className="col-10 ">
                                        <p className=' text-truncate'>{obj.title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                ${obj.price}</div>
                            <div className="col">
                                <button onClick={() => handleUpdateQty("dec", obj.id, obj.quantity)}>-</button>
                                {obj.quantity}
                                <button onClick={() => handleUpdateQty("inc", obj.id, obj.quantity)}>+</button>
                            </div>
                            <div className="col">{obj.sub_total }</div>
                        </div>
                    </>
                ))}
                {/* Total  */}
                <div className="row">
                    <div className="col offset-7 border-bottom">Subtotal</div>
                    <div className="col border-bottom">{cart_total.toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}
export default CartPage 