import React from "react";
import Input from "../Components/Input/Input";
import { useFormik } from "formik";
import {useState} from "react"
import {toast, ToastContainer} from "react-toastify"
import {validationSchma} from "../utils/utils"
import { fetchData } from "../utils/utils";


const initalValues = {
  name: "",
  userId	:"",
  jobRole	:"",
  url	:""
};
const CreateUserPage = () => {
  // const [success,setSucess] = useState()


  const notify = (value) => toast(value);
  const formik = useFormik({
    initialValues: initalValues,
    validationSchema:validationSchma,
    onSubmit: (values) => {
      
      async function sendData(params) {
        const method={
          method:"POST",
          body:JSON.stringify(params)
        }
        const response = await fetch ("http://localhost:3000/users", method)
       if(response.ok){
         notify("Successfully added")
         formik.setValues(initalValues)
         fetchData("http://localhost:3000/users")
       }
        
      }
      sendData(values)
    },
  });

  const inputForm = [
    { name: "name", type: "text", lable: "Name", placeholder: "Enter name" },
    { name: "userId", type: "text", lable: "User Id", placeholder: "Enter id" },
    {
      name: "jobRole",
      type: "text",
      lable: "Job Role",
      placeholder: "Enter  job role",
    },
    {
      name: "url",
      type: "url",
      lable: "Profile Url",
      placeholder: "Enter Profile url ",
    },
  ];
  return (
    <div className="row h-100 justify-content-center  ">
      <ToastContainer/>
      <div className="col-7">
      
        <form onSubmit={formik.handleSubmit} className=" d-flex flex-column p-3 shadow-lg rounded ">
          {inputForm.map((input,idx) => (
         <>
        
         <Input
            key={idx}
            name={input.name}
            value={formik.values?.[input.name]}
            onChange={formik.handleChange}
            label={input.lable}
            type={input.type}
            placeholder={input.placeholder}
          
          />
          {formik.errors?.[input.name]?<span style={{color:"red"}}>{input.name} is required</span>:null}
         </>
            
          ))}
          <button className="w-50 mx-auto my-2 btn btn-success" >submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserPage;
