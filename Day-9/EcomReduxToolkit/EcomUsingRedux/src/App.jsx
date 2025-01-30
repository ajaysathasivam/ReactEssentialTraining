import { Routes, BrowserRouter, Route } from "react-router"
import ProductsPage from "./Pages/ProductsPage"
import Navigation from "./Components/Navigation/Navigation"
import CartPage from "./Pages/CartPage"
const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App