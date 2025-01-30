import { useSelector, useDispatch } from 'react-redux'
import { updateQuantityInc, updateQuantityDec } from "../store/Cart/cartSlice"
const CartPage = () => {
    const selectedCartCount = useSelector((state) => state.cart.value)
    const { cartItems } = useSelector((state) => state.cart)
    const { quantity } = useSelector((state) => state.cart)
    const{total} = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const handleQuantity =(type)=>{
       type === "inc"?dispatch(updateQuantityInc()):dispatch(updateQuantityDec())
       dispatch(total())
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col mb-5">
                        <p className='h2 text-center'>Your cart ({`${selectedCartCount} Items`})</p>
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
                                <button onClick={()=>handleQuantity("inc")}>+</button>
                                {quantity}
                                <button onClick={()=>handleQuantity("dec")}>-</button>
                            </div>
                            <div className="col">{total}</div>
                        </div>
                    </>
                ))}
                {/* Total  */}
                <div className="row">
                    <div className="col offset-7 border-bottom">Subtotal</div>
                    <div className="col border-bottom">$000000</div>
                    <div className="col offset-7 border-bottom">Sales Tax</div>
                    <div className="col border-bottom">$000000</div>
                    <div className="col offset-7 border-bottom">Cuppon Code</div>
                    <div className="col border-bottom">$000000</div>
                    <div className="col offset-7 border-bottom">Grand Total</div>
                    <div className="col border-bottom">$000000</div>
                </div>
            </div>
        </div>
    )
}
export default CartPage 