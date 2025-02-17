import React, { useEffect, useMemo, useState } from "react";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../components/layout/Section";
import Card from "../../components/card/Card";
import DropDown from "../../components/dropDown/DropDown";
import { filterData } from "../../utils/FilterData";
import { useFormik } from "formik";
import "./Products.scss";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { setValue } from "../../store/productsSlice/ProductsSlice";

const Products = () => {
  // const init= useSelector((state)=>state.products.value ||[])
  const [data, setData] = useState();
  const [products, setProducts] = useState(data || []);
  const [records, setRecords] = useState(products.length);
  const [layout, setLayout] = useState(false);
  const [sortItem, setSortItem] = useState(0);
  const [priceRange, setRange] = useState(0);
  const [sortCompany, setCompany] = useState(null);
  const [defaultCatagory, setCatagory] = useState("all");
  const dispatch = useDispatch();

  const [productLists, setProductLists] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const initValue = {
    search: "",
    range: "",
    freeShiping: "",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.course-api.com/react-store-products"
        );
        const result = await response.json();
        setProductLists(result || []);
        setAllProducts(result || []);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Fetch error:", error);
        }
      }
    };

    fetchData();
  }, []);
  const formik = useFormik({
    initialValues: initValue,
    onSubmit: (values) => {
      formik.setValues(initValue);
      setProducts(data);
      setRecords(data.length);
    },
  });

  const handleClear = () => {
    setProducts(allProducts);
  };
  const categoryFilter = (arr, type) => {
    const filteredItems = arr.filter(
      (curr) =>
        curr.category.toLowerCase().replaceAll(" ", "") === type.toLowerCase()
    );
    arr = type && type !== "all" ? [...filteredItems] : [...arr];
    return arr;
  };
  const handleChange = (e, type) => {
    // const { value } = e.target;
    let allNewValues = [...productLists];

    switch (type) {
      case "name":
        if(allNewValues){
          alert(0)
        }
        const { value: textvalue } = e.target;
        const filteredItems = allNewValues.filter((curr) =>
          curr.name.toLowerCase().includes(textvalue.toLowerCase())
        );
        allNewValues = textvalue ? [...filteredItems] : [...allProducts];
        break;

      case "catogories":
        const value = e.trim().replaceAll(" ", "").toLowerCase();
        allNewValues = categoryFilter(allNewValues, value);
        break;

      case "range":
        console.log(e)
        // const priceValue = Number(value);
        // const filteredProductsByRange = data.filter(
        //   (obj) => Number(obj.price) > priceValue
        // );
        // setProducts(filteredProductsByRange);
        // setRecords(filteredProductsByRange.length);
        // setRange(priceValue);
        // if (!value) {
        //   setProducts(data);
        //   setRecords(data.length);
        // }
        // formik.setValues(value);
        break;
      case "checkbox":
        const filteredProductsByCheckbox = products.filter(
          (obj) => obj.shipping === (value === "on")
        );
        setProducts(filteredProductsByCheckbox);
        setRecords(filteredProductsByCheckbox.length);
        if (!value) {
          setProducts(data);
          setRecords(data.length);
        }
        formik.setValues(value);
        break;
      case "color":
        console.log(e);
        const filteredProductsByColor = products.filter(
          (obj) => obj.shipping === (value === "on")
        );
        setProducts(filteredProductsByColor);
        setRecords(filteredProductsByColor.length);
        if (!value) {
          setProducts(data);
          setRecords(data.length);
        }
        formik.setValues(value);
        break;

      default:
    }
    setProductLists(allNewValues);
  };
  const navigate = useNavigate();

  return (
    <>
      <BreadCrums current={"Products"} className={"position-relative"} />
      <Section>
        <div className="row ">
          <div className="col-lg-3 filter-container position-sticky">
            <form onSubmit={formik.handleSubmit}>
              {filterData?.map((item) => (
                <>
                  <input
                    type={item.input.type}
                    onChange={(e) => handleChange(e, "name")}
                    name={item.input.name}
                    placeholder="search"
                    className="border-0 input-search px-2 py-2 w-100 rounded"
                  />
                  <ul className="navbar-nav">
                    <span className="chead-color my-2 text-capitalize fw-bold">
                      {item.catogories.title}
                    </span>

                    {item.catogories.subCt.map((subCt) => (
                      <li
                        className={`nav-item my-1 text-capitalize   phead-color pointer text-decoration-none`}
                        style={{ letterSpacing: "1.6px", fontSize: "0.9rem" }}
                        onClick={() => handleChange(subCt, "catogories")}
                      >
                        {subCt}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="p-0 m-0 chead-color fw-bold mt-4 text-capitalize">
                      {item?.company?.title}
                    </p>
                    <DropDown
                      list={item?.company?.comLst}
                      setSortItem={setCompany}
                    />
                  </div>
                  {/* {color} */}
                  <div>
                    <p className="p-0 m-0  chead-color fw-bold mt-3 text-capitalize">
                      {item.color.title}
                    </p>
                    <div className="d-flex align-items-center my-4">
                      <span className="me-2 phead-color text-decoration-underline">
                        All
                      </span>
                      {item.color.colors.map((color) => (
                        <span
                          style={{
                            backgroundColor: color,
                            width: "20px",
                            height: "20px",
                            opacity: "0.5",
                          }}
                          className="rounded-circle border-0 mx-1 pointer"
                          onClick={() => handleColor(color)}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="p-0 m-0 chead-color fw-bold mt-3 text-capitalize">
                      {item.range.title}
                    </p>
                    <p className="p-0 m-0 phead-color my-2"> ${priceRange}</p>
                    <input
                      type={item.range.type}
                      min={item.range.min}
                      value={formik.values?.[item.range.type]}
                      onChange={(e) => handleChange(e, "range")}
                      max={item.range.max}
                    />
                  </div>

                  <div className="my-2">
                    <label htmlFor="" className="form-label chead-color me-5  ">
                      {item.checkbox.title}
                    </label>
                    <input
                      type={item.checkbox.type}
                      value={formik.value?.[item.checkbox.name]}
                      onChange={(e) => handleChange(e, "checkbox")}
                      className="mx-2"
                    />
                  </div>
                </>
              ))}
              <Button
                className="btn btn-danger my-2 mb-4  px-5"
                text={"clear fillter"}
                onClick={() => {
                  formik.handleReset, handleClear;
                }}
              ></Button>
            </form>
          </div>

          <div className="col">
            <div className="row py-3">
              <div className="col-lg-2 py-2  ">
                <i
                  className="bi bi-grid-fill pointer bg-dark text-light fs-6 p-1  rounded-1  mx-1"
                  onClick={() => setLayout(true)}
                ></i>
                <i
                  className="bi bi-list border pointer border-dark rounded-1 p-1  fs-6  "
                  onClick={() => setLayout(false)}
                ></i>
              </div>
              <div className="col-lg-3 my-2">
                <span className="phead-color fs-6">
                  {records ? `${records} product found` : "0 product found"}
                </span>
              </div>
              <div className="col-12 col-lg-4">
                <hr />
              </div>
              <div className="col-6  col-lg-3   d-flex align-items-center justify-content-end">
                <div className="  align-item-center w-50">sort by</div>
                <div className=" bg-gray w-75">
                  <DropDown
                    list={[
                      "price-(highest)",
                      "price-(lowest)",
                      "price-(a-z)",
                      "price-(z-a)",
                    ]}
                    setSortItem={setSortItem}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {productLists?.map((product) => (
                <div
                  className={layout ? "col-4  d-block" : "col-12 d-flex"}
                  onClick={() => navigate(`/poster/${product.id}`)}
                >
                  <div className="" style={{ height: "175px" }}>
                    <img
                      src={product?.image}
                      className="w-100 h-100 object-fit-cover rounded"
                      alt={product?.name}
                    />
                  </div>

                  <div className="d-flex justify-content-between my-2">
                    <p className="chead-color text-capitalize">
                      {product.name}
                    </p>
                    <p className="chead primary">
                      $
                      <span className="ms-1">
                        {(product.price / 100).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Products;



// const sortProducts = (products, type = "price", order = "asc") => {
//   return [...products].sort((a, b) => {
//     if (type === "price") {
//       return order === "asc" ? a.price - b.price : b.price - a.price;
//     } else if (type === "name") {
//       return order === "asc"
//         ? a.name.localeCompare(b.name)
//         : b.name.localeCompare(a.name);
//     }
//   });
// };
// useEffect(() => {
//   setRecords(products.length);
// }, [products]);
// useEffect(() => {
//   switch (sortItem) {
//     case 1:
//       setProducts(sortProducts(products, "price", "desc"));
//       break;
//     case 2:
//       setProducts(sortProducts(products, "price", "asc"));
//       break;

//     case 3:
//       setProducts(sortProducts(products, "name", "asc"));
//       break;
//     case 4:
//       setProducts(sortProducts(products, "name", "desc"));
//       break;
//     default:
//       setProducts(data);
//   }
// }, [sortItem]);

// useEffect(() => {
//   switch (sortCompany) {
//     case 1:
//       const filteredProductsByMarcos = products.filter(
//         (obj) => obj.company == "marcos"
//       );
//       setProducts(filteredProductsByMarcos);
//       setRecords(filteredProductsByMarcos.length);
//       // console.log(filteredProductsByMarcos)
//       break;
//     case 2:
//       const filteredProductsByliddy = products.filter(
//         (obj) => obj.company == "liddy"
//       );
//       setProducts(filteredProductsByliddy);
//       setRecords(filteredProductsByliddy.length);
//       break;

//     case 3:
//       const filteredProductsByikea = products.filter(
//         (obj) => obj.company == "ikea"
//       );
//       setProducts(filteredProductsByikea);
//       setRecords(filteredProductsByikea.length);
//       break;
//     case 4:
//       const filteredProductsBycaressa = products.filter(
//         (obj) => obj.company == "caressa"
//       );
//       setProducts(filteredProductsBycaressa);
//       setRecords(filteredProductsBycaressa.length);
//       break;

//     default:
//       setProducts(products);
//   }
// }, [sortCompany]);

// useEffect(() => {
//   const filteredProductsByCatogories = products.filter(
//     (obj) => obj.category == catogories
//   );
//   setProducts(filteredProductsByCatogories);
// }, []);

// const handleColor = (color) => {
//   const filteredProductsByColor = products.filter((obj) =>
//     obj.colors.some((clr) => clr.toLowerCase() === color.toLowerCase())
//   );

//   setProducts(filteredProductsByColor);
//   setRecords(filteredProductsByColor.length);
// };