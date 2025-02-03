import { useEffect, useState } from "react"
import Hoc from "./Hoc"
const Auth = () => {
    const initFormState = {
        username: "",
        password: ""
    }
    localStorage.setItem("username", "asd@123")
    localStorage.setItem("password", '123')
    const [isLogin, setLogin] = useState(null)
    const [formValue, setFormData] = useState(initFormState)
    const inputs = [
        { lable: "User Name: ", type: "text", name: "username", value: formValue.username },
        { lable: "Password: ", type: "password", name: "password", value: formValue.password }
    ]
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData((pre) => ({ ...pre, [name]: value }))
    }
    const welcome = () => { return <div>Welcome</div> }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (formValue.username !== "" && formValue.password !== "") {
            const username = localStorage.getItem("username")
            const password = localStorage.getItem("password")
            if (formValue.username === username && formValue.password === password) {
                setLogin(true)
                setFormData(initFormState)
            }
            else{
                setLogin(false )
            }
        }
    }
    const handleLogOut = (e) => {
        e.preventDefault();
        setLogin(false)
    }
    useEffect(() => { }, [isLogin])
    const EnhancedComponent = Hoc(welcome)
    return (
        <div>
            <h1><EnhancedComponent isLogin={isLogin} /></h1>
            <form action="" onSubmit={(e) => handleOnSubmit(e)}>
                {inputs.map((obj) => (
                    <>
                        <br />
                        <label htmlFor="">{obj.lable} </label>
                        <br />
                        <input type={obj.type} name={obj.name} value={obj.value} id="" onChange={(e) => handleOnChange(e)} />
                    </>
                ))}
                <button>Log in</button>
                <button onClick={(e) => handleLogOut(e)}>Log out</button>
            </form>
        </div>
    )
}
export default Auth
// import { useState } from "react";
// import Hoc from "./Hoc"; // Import the HOC
// const Auth = () => {
//     const initFormState = {
//         username: "",
//         password: ""
//     };
//     const [isLogin, setLogin] = useState(false); // Initial login state (not logged in)
//     const [formValue, setFormData] = useState(initFormState);
//     const inputs = [
//         { label: "User Name: ", type: "text", name: "username", value: formValue.username },
//         { label: "Password: ", type: "password", name: "password", value: formValue.password }
//     ];
//     // Handle input change
//     const handleOnChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };
//     // Handle form submission
//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         if (formValue.username !== "" && formValue.password !== "") {
//             // Simulate login by setting isLogin to true
//             setLogin(true);
//         }
//     };
//     // Component to display upon successful login
//     const WelcomeMessage = () => {
//         return <div>Welcome!</div>;
//     };
//     // Wrap the WelcomeMessage component with HOC
//     const EnhancedWelcomeMessage = Hoc(WelcomeMessage);
//     return (
//         <div>
//             <form onSubmit={handleOnSubmit}>
//                 {inputs.map((input, index) => (
//                     <div key={index}>
//                         <label>{input.label}</label>
//                         <input
//                             type={input.type}
//                             name={input.name}
//                             value={input.value}
//                             onChange={handleOnChange}
//                         />
//                     </div>
//                 ))}
//                 <button type="submit">Submit</button>
//             </form>
//             {/* Show enhanced component after successful login */}
//             <EnhancedWelcomeMessage isLogin={isLogin} />
//         </div>
//     );
// };
// export default Auth;
