import React, {  useContext } from "react";
import { ThemeProvider } from "../../Context/ThemeContext/ThemeContext";
import { useFormik } from "formik";
const Search = ({className,placeholder}) => {
    // const {backgroundColor,color} = useContext(ThemeProvider);
  const initialValues = {
    headerSearch: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <input
      className={className}
      placeholder={placeholder}
        type="search"
        name="headerSearch"
        id=""
        value={formik?.values.value}
        onChange={formik?.handleChange}
      />
    </form>
  );
};

export default Search;
