import { useEffect } from "react"
import { useState } from "react"
const LocalStorage = () => {
    // Classical Way
    // localStorage.setItem("name","localStorage")
    // localStorage.setItem("BrowserName","firefox")
    // const browserName=localStorage.getItem("BrowserName")
    // localStorage.clear()    
    // localStorage.getItem("BrowserName","firefox")
    // Large data set
    // const userData = [{
    //     "id": 1,
    //     "first_name": "Jeanette",
    //     "last_name": "Penddreth",
    //     "email": "jpenddreth0@census.gov",
    //     "gender": "Female",
    //     "ip_address": "26.58.193.2"
    //   }, {
    //     "id": 2,
    //     "first_name": "Giavani",
    //     "last_name": "Frediani",
    //     "email": "gfrediani1@senate.gov",
    //     "gender": "Male",
    //     "ip_address": "229.179.4.212"
    //   }, {
    //     "id": 3,
    //     "first_name": "Noell",
    //     "last_name": "Bea",
    //     "email": "nbea2@imageshack.us",
    //     "gender": "Female",
    //     "ip_address": "180.66.162.255"
    //   }, {
    //     "id": 4,
    //     "first_name": "Willard",
    //     "last_name": "Valek",
    //     "email": "wvalek3@vk.com",
    //     "gender": "Male",
    //     "ip_address": "67.76.188.26"
    //   }]
    // localStorage.setItem('user',JSON.stringify(userData)) 
    // const getUserData = JSON.parse(localStorage.getItem("user"))
    // console.log(getUserData)
    const [state, setState] = useState()
    useEffect(() => {
        async function fetchData() {
            const url = "https://dummyjson.com/users"
            const res = await fetch(url)
            const json = await res.json();
            await localStorage.setItem("users", JSON.stringify(json.users))
        }
        fetchData()
    }, [])
    useEffect(() => {
        const users = setState(JSON.parse(localStorage.getItem("users")))
        if (users) {
            setState(users);
        }
    }, [])
    const style = {
        margin:"2rem",
        padding:'1rem',
        borderBottom:"1px solid gray"
    }
    // console.log(state)s
    return (
        <div>
            <h1>Local Storage</h1>
            <table style={{ border: "1px solid gray" }}>
                <thead style={{borderBottom:"1px solid gray"}}>
                    <th style={{...style}}>Name</th>
                    <th style={{...style}}>email</th>
                    <th style={{...style}}>Phone</th>
                    <th style={{...style}}>username</th>
                </thead>
                <tbody style={{ border: "1px solid gray" }}>
                    {state?.map((obj,i) => (
                        <tr key={i} style={{border:'1px solid red'}}>
                            <td style={{...style}}>{obj?.firstName}{obj?.lastName}</td>
                            <td style={{...style}}>{obj?.email}</td>
                            <td style={{...style}}>{obj?.phone}</td>
                             <td style={{...style}}>{obj?.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default LocalStorage