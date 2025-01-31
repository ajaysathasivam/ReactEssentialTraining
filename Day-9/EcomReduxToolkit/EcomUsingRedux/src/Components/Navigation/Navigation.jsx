import {Link} from "react-router-dom"
import { useSelector} from 'react-redux'
const Navigation = () => {
  const count =useSelector((state)=>state.cart.cartItems)
  return (
    <ul className="nav mx-3">
        <li className="mx-2"><Link to="/">Home</Link></li>
        <li><Link to="/cart">Add Cart<sup>{count.length}</sup></Link></li>
    </ul>
  )
}

export default Navigation