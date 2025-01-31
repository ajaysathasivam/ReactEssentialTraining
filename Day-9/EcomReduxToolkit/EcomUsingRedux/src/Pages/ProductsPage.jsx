import { useEffect, useState } from "react"
import { apiData } from "../apiCalls/productsApi"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, decrement, increment, selectedObj, updateTotal } from "../store/Cart/cartSlice"
const ProductsPage = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState()
    useEffect(() => {
        async function fetchedData() {
            const url = " https://fakestoreapi.com/products"
            const fetchedData = await apiData(url)
            setData(fetchedData)
        }
        fetchedData()
    }, [])
    const handleAddCart = (id, obj) => {
        // dispatch(increment())
        dispatch(addToCart({ id, obj }))
       
    }
    return (
        <>
            <div className="d-flex flex-wrap justify-content-evenly ">
                {data?.map((obj, index) => (
                    <div key={index} className="card my-3" style={{ width: '18rem', height: "25rem" }}>
                        <img className="card-img-top h-50 w-50 mx-auto py-3 " src={obj?.image} alt="" />

                        <div className="card-body">
                            <h2 className="h5 text-truncate">{obj?.title}</h2>
                            <p>{obj?.category}</p>
                            <p className="fs-6 text-justity text-truncate">{obj?.description}</p>
                            <p className="">${obj?.price}</p>
                            <p>{obj?.rating.rate}|{obj?.rating.count}</p>

                        </div>
                        <button onClick={() => handleAddCart(obj.id, obj)}>add cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProductsPage