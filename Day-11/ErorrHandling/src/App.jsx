import Auth from "./Component/Auth"
import Form from "./Component/Form"

const App = () => {
  return (
   <>
    {/* <Form/> */}
    <Auth/>
   </>
  )
}

export default App























// old error and form handling


// import { useEffect,useState } from "react";
// const App = () => {
//   const [err, setErr] = useState("");
//   const [value, setValue] = useState(1)
//   const [inputValue, setInputValue] = useState('')
//   const handleChange = (e) => {
//     setInputValue(e.target.value)
//   }
//   const handleClick = (e) => {
//     e.preventDefault()
//     setValue(inputValue)
//   }
//   useEffect(() => {
//     try {
//       if (value === '') {
//         throw "The phone must be filled!!!"
//       }
//       else if (isNaN(value)) {
//         throw "You should provide valid number not include text"
//       }
//       else if (value.length < 10) {
//         setInputValue('')
//         throw "Phone number must be at least 10 digits";
//       } else if (value.length > 10) {
//         setInputValue('')
//         throw "Phone number must not exceed 10 digits";
//       }
//       else {
//         setInputValue('')
//         throw ""
//       }
//     } catch (error) {
//       setErr(error)
//     }
//   }, [value])
//   return (
//     <div>
//       <h1>Error Handling</h1>
//       <p>{err ? `Message:${err}` : null}</p>
//       <form action="" onSubmit={(e) => handleClick(e)}>
//         Phone:
//         <input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
        
//         <button >submit</button>
//       </form>
//     </div>
//   )
// }
// export default App 