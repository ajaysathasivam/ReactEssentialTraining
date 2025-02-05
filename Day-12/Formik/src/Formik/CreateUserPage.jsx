import { useFormik } from "formik";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import * as yup from "yup";
const CreateUserPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName !== "admin") {
      navigate("/");
    }
  }, [navigate]);
  const postData = (values) => {
    const data = {
      method: "POST",
      body: JSON.stringify(values),
    };
    try {
      async function fetchData(data) {
        const res = await fetch("http://localhost:3000/users", data);
        if (res.ok) {
          navigate("/admin/dashboard");
        }
      }
      fetchData(data);
    } catch (error) {
      console.log(error, "error");
    }
  };
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    // validate,
    validationSchema: yup.object({
      username: yup.string().required("username is required"),
      //   password: yup.string().required("password is required"),
    }),
    onSubmit: (values) => {
        postData(values)
    },
  });
  const inputFields = [
    { lable: "new User name", name: "username", type: "text" },
    // { lable: " new Password", name: "password", type: "password" },
  ];
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Create new user</h1>
      <div>
        {formik.errors.loginErr ? "Login id or password invalid" : null}
      </div>
      {inputFields.map((obj) => (
        <>
          <label htmlFor="">{obj.lable}: </label>
          <br />
          {formik.touched?.[obj.name] && formik.errors?.[obj.name] ? (
            <div className={`error-${[obj.name]}`}>
              {formik.errors?.[obj.name]}
            </div>
          ) : null}
          <input
            type={obj.type}
            name={obj.name}
            value={formik.values?.[obj.name]}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            id=""
          />
          <br />
        </>
      ))}
      <button>Created</button>
    </form>
  );
};
export default CreateUserPage;
