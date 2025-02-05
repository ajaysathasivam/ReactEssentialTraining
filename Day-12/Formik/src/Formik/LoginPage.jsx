// import { useFormik } from 'formik';
// import * as yup from "yup";
// import "./LoginPage.scss"
// import { useEffect } from 'react';
// import { useNavigate, useNavigation } from "react-router-dom"
// const LoginPage = () => {

//     // const initState = {username:'',password:''}
//     // const validate = values => {
//     //     const error = {};
//     //     if (!values.username) {
//     //         error.username = 'Required'
//     //     }
//     //     if (!values.password) {
//     //         error.password = 'Required'
//     //     } else if (values.password.length < 8) {
//     //         error.password = 'password must be above 8 char'
//     //     }
//     //     return error;
//     // }
//     const navigate = useNavigate()
//     useEffect(() => {
//         try {
//             async function fetchData() {
//                 const res = await fetch("http://localhost:3000/users");
//                 if (res.ok) {
//                     const data = await res.json();
//                     const admin = await data.filter((obj) => (obj.admin === true))
//                     // localStorage.setItem("username", admin[0].username)
//                     // localStorage.setItem("password", admin[0].password)
//                 }

//             }
//             fetchData()
//         } catch (error) {
//             console.log(error, "error")

//         }

//     }, [])
//     const formik = useFormik({
//         initialValues: { username: '', password: '' },
//         // validate,
//         validationSchema: yup.object({
//             username: yup.string()
//                 .required("username is required"),
//             // password: yup.string().required("password is required")
//         }),
//         onSubmit: values => {
//             if (values.username) {
//                 localStorage.setItem('userName', values.username.toLowerCase())
//                 if(values.username.toLowerCase() ==='admin'){
//                     navigate('/admin/dashboard')
//                     return
//                 }
//                     navigate('/user')
//             }
//             // if (values.username === localStorage.getItem("username")) {
//             //     // && values.password === localStorage.getItem("password")
//             //     alert(0)
//             //     formik.setFieldValue({ username: '' }, { password: '' })
//             //     localStorage.setItem("admin","true")
//             //     navigate("/admin/dashboard")
//             // }
//             // else {

//             //     formik.setErrors({ "loginErr": 1 })
//             //     formik.setFieldValue({ username: '', password: '' })
//             // }

//         },
//     })

//     const inputFields = [
//         { lable: "User name", name: "username", type: "text" },
//         // { lable: "Password", name: "password", type: "password" },
//     ]
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <h1>Login</h1>
//             <div>{formik.errors.loginErr ? "Login id or password invalid" : null}</div>
//             {inputFields.map((obj) => (
//                 <>
//                     <label htmlFor="">{obj.lable}: </label>
//                     <br />

//                     <input type={obj.type}
//                         name={obj.name}
//                         value={formik.values?.[obj.name]}
//                         onBlur={formik.handleBlur}
//                         onChange={formik.handleChange}
//                         autoComplete='off'
//                         id="" />
//                     {formik.touched?.[obj.name] && formik.errors?.[obj.name] ?
//                         <span className={`error-${[obj.name]}`}>{formik.errors?.[obj.name]}</span> : null}
//                     <br />
//                 </>
//             ))}
//             <button>Login</button>
//         </form>
//     )
// }
// export default LoginPage
// {/* <label htmlFor="">User name: </label>
//             {formik.touched.username && formik.errors.username ?
//              <div>{formik.errors.username}</div> : null}
//             <input type="text"
//                 name="username" id=""
//                 value={formik.values.username}
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//             />
//             <br />
//             <label htmlFor="">Password:   </label>
//             {formik.touched.username && formik.errors.password ?
//              <div>{formik.errors.password}</div> : null}
//             <input type="password"
//                 name="password" id=""
//                 value={formik.values.password}
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//             />
//             <br /> */}

import { useFormik } from "formik";
import * as yup from "yup";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
const initialValues = {
  username: "",
};
const schema = yup.object({
  username: yup.string().required("username is required"),
});
const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    if (values.username) {
    
      const getData = async () => {
        const res = await fetch("http://localhost:3000/users");
        const json = await res.json();
        console.log(json, "json");
        const userExists = await json.find(
          (user) => user.username === values.username
        );
        if (!userExists) {
          formik.setErrors({ loginErr: 1 });
          return;
        }
        localStorage.setItem("userName", values.username.toLowerCase());
        if (
          userExists.username === values.username &&
          userExists.admin === "true"
        ) {
          localStorage.setItem("userName", "admin");
          navigate("/admin/dashboard");
          return;
        } else if (
          userExists.username === values.username ||
          userExists.admin === "false"
        ) {
          localStorage.setItem("userName", "user");
          navigate("/user");
        } else {
          navigate("/");
        }
      };
      getData();

    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  const inputFields = [
    { lable: "User name", name: "username", type: "text" },
    // { lable: "Password", name: "password", type: "password" },
  ];
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
      <div>
        {formik.errors.loginErr ? (
          <div style={{ fontSize: "12px", color: "red" }}>
            Login id or password invalid
          </div>
        ) : null}
      </div>
      {inputFields.map((obj, idx) => (
        <div key={idx}>
          <label htmlFor="">{obj.lable}: </label>
          <br />
          <input
            type={obj.type}
            name={obj.name}
            value={formik.values?.[obj.name]}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            autoComplete="off"
            style={{
              border:
                formik.touched?.[obj.name] &&
                formik.errors?.[obj.name] &&
                "1px solid red",
            }}
            id=""
          />
          {formik.touched?.[obj.name] && formik.errors?.[obj.name] ? (
            <span style={{ color: "red", fontSize: "12px" }}>
              {formik.errors?.[obj.name]}
            </span>
          ) : null}
          <br />
        </div>
      ))}
      <button>Login</button>
    </form>
  );
};
export default LoginPage;
