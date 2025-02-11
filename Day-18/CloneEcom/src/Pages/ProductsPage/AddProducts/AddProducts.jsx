import React from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useFormik } from "formik";
import { postFetch, putFetch } from "../../../ApiCalls/FetchData";
import { useLocation, useNavigate } from "react-router-dom";

const AddProducts = () => {
  const prefillData = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams)
  const navigate = useNavigate()
  const queryObj = Object.fromEntries(
    new URLSearchParams(prefillData.search).entries()
  );
  const { id, title, description, price, category, pictureUrl } = queryObj;
  const initAddProductValues = {
    title: title ? title : "",
    description: description ? description : "",
    price: price ? price : "",
    category: category ? category : "",
    pictureUrl: pictureUrl ? pictureUrl : "",
  };
  // const initAddProductValues = {
  //   title: title ? title : "",
  //   description: description ? description : "",
  //   price: price ? price : "",
  //   category: category ? category : "",
  //   pictureUrl: pictureUrl ? pictureUrl : "",
  // };

  const formik = useFormik({
    initialValues: initAddProductValues,
    onSubmit: (values) => {
      if (id) {
        const updateData = { ...values, ["id"]: id };
        putFetch(updateData, id);
        const queryPara = new URLSearchParams({}).toString();
        navigate(`/add?${queryPara}`);  
        formik.setValues(initAddProductValues);
        formik.resetForm()
        
      } else {
        postFetch(values);
      }
      formik.setValues(initAddProductValues);
    },
  });

  const addFormInput = [
    { name: "title", label: "Title", type: "text" },
    { name: "description", label: "Description", type: "text" },
    { name: "price", label: "Price", type: "text" },
    { name: "category", label: "Category", type: "text" },
    { name: "pictureUrl", label: "Thumbnail Image URL", type: "url" },
  ];

  return (
    <div
      className="d-flex flex-column pt-5 w-100"
      style={{ minHeight: "100vh" }}
    >
      <div className="row h-100 justify-content-center">
        {/* Preview Section */}
        <div className="col-6">
          <p className="h4">Preview</p>
          <ProductCard
            price={formik.values.price || "Dummy Price"}
            title={formik.values.title || "Dummy Title"}
            image={formik.values.pictureUrl || ""}
            description={formik.values.description || "Dummy Description"}
            category={formik.values.category || "Dummy Category"}
            className={"h6 py-1"}
          />
        </div>

        {/* Form Section */}
        <div className="col-6">
          <form
            className="d-flex flex-column px-3"
            onSubmit={formik.handleSubmit}
          >
            {addFormInput.map((field) => (
              <div key={field?.id} className="mb-3">
                <label htmlFor={field.name} className="py-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  className="form-control"
                />
              </div>
            ))}
            <button type="submit" className="btn btn-success mt-2">
              Add New
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
