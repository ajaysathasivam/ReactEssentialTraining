import React, { useEffect, useMemo, useRef, useState } from "react";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../components/layout/Section";
import Card from "../../components/card/Card";
import DropDown from "../../components/dropDown/DropDown";
import { convertPrice, filterData } from "../../utils/FilterData";
import { useFormik } from "formik";
import "./Products.scss";
import Button from "../../components/button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setValue } from "../../store/productsSlice/ProductsSlice";
import useWindowDimensions from "../../utils/windowDimension";
const Products = () => {
  // const init= useSelector((state)=>state.products.value ||[])
  const [data, setData] = useState();
  const [products, setProducts] = useState(data || []);
  const [layout, setLayout] = useState(true);
  const [sortItem, setSortItem] = useState(0);
  const [priceRange, setRange] = useState(0);
  const currentPath = useLocation();
  const dispatch = useDispatch();
  const [defaultColor, setdefColor] = useState("all");
  const [productLists, setProductLists] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [records, setRecords] = useState();
  const [companyActive, setCompanyActive] = useState({default:"all",track:0});
  const [defaultCatagory, setCatagory] = useState({default:"all",track:0});
  const { width } = useWindowDimensions();
  const [track, setTracker] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef();

  
  const initValue = {
    search: "",
    range: 0,
    freeShiping: true,
  };
  console.log(allProducts);
  console.log(defaultCatagory)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.course-api.com/react-store-products"
        );
        const result = await response.json();
        setProductLists(result || []);
        setAllProducts(result || []);
        setRecords(result.length);
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
  const categoryFilter = (arr, type, obj) => {
    const filteredItems = arr.filter(
      (curr) =>
        curr?.[obj].toLowerCase().replaceAll(" ", "") === type.toLowerCase()
    );
    arr = type && type !== "all" ? [...filteredItems] : [...arr];
    return arr;
  };
  const handleChange = (e, type) => {
    let allNewValues = [...productLists];
    switch (type) {
      case "name":
        const { value: textvalue } = e.target;
        const filteredItems = allNewValues.filter((curr) =>
          curr.name.toLowerCase().includes(textvalue.toLowerCase())
        );
        allNewValues = textvalue ? [...filteredItems] : [...allProducts];
        break;
      case "catogories":
        const value = e.trim().replaceAll(" ", "").toLowerCase();
        allNewValues = categoryFilter(allProducts, value, "category")
        // if (defaultCatagory.track === 0) {
          setCatagory((pre)=>({...pre,default:e}));
        //   setProductLists( categoryFilter(allNewValues, value, "category"));
        //   setCatagory((pre)=>({...pre,track:track+1}))
        // } else {
        //   const copyProductList = [...allProducts];
        //   allNewValues = categoryFilter(copyProductList, value, "category");
        // }
       
        break;
      case "range":
        const range = inputRef.current.value;
        console.log(range);
        const filteredRangeItems = allNewValues.filter(
          (curr) => range > curr.price
        );
        allNewValues = filteredRangeItems;
        break;
      case "checkbox":
        const shipping = formik.values.freeShiping;
        if (shipping) {
          const filteredProductsByCheckbox = allNewValues.filter(
            (obj) => obj.shipping == shipping
          );
          allNewValues = filteredProductsByCheckbox;
        }
        break;
      case "clr":
        if (track === 0) {
          // if (typeof e === "object") setdefColor("all")
          // setdefColor(e);
          console.log(allNewValues)
          // allNewValues = allNewValues.filter((obj) =>
          //   obj.colors.includes(e)
          // );
          setTracker((pre) => pre + 1);
        } else {
          alert(0)
          const copyProductList = [...allProducts];
          allNewValues = copyProductList.filter((obj) =>
            obj.colors.includes(e)
          );
        }
        
        // if (typeof e === "object") {
        //   setdefColor("all");
        //   console.log(allNewValues);
        // } else {
        //   setdefColor(e);
        //   const filteredClrItems = allNewValues.filter((obj) =>
        //     obj.colors.includes(e)
        //   );
        //   allNewValues = filteredClrItems;
        // }

        break;
      case "company":
        setCompanyActive((pre)=>({...pre,default:e}));
        
        if (companyActive.track === 0) {
          allNewValues = categoryFilter(allNewValues, e, type);
          setCompanyActive(((pre) =>({...pre,track:track+1})));
        } else {
          const copyProductList = [...allProducts];
          allNewValues = categoryFilter(copyProductList, e, type);
        }
        setCatagory((pre)=>({...pre,track:0}))
        
        break;
      default:
    }
    setProductLists(allNewValues);
    setRecords(allNewValues.length);
  };

  return (
    <>
      <BreadCrums
        current={currentPath.pathname}
        className={"position-relative"}
      />
      <Section>
        <div className="row py-5 ">
          <div
            className="col-lg-2 filter-container position-sticky"
            style={
              width > 992
                ? { height: "70vh", maxHeight: "500px", top: "10px" }
                : null
            }
          >
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
                        className={`nav-item my-1 text-capitalize   phead-color pointer text-decoration-none
                          ${
                            defaultCatagory?.default.toLowerCase() ===
                            subCt.toLowerCase()
                              ? "text-decoration-underline"
                              : "null"
                          }`}
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
                    <ul className=" p-0 pt-2  ">
                      {item?.company.comLst.map((company) => (
                        <li
                          className={`list-unstyled pointer pb-2 phead-color  text-capitalize ${
                            companyActive?.default === company
                              ? "text-decoration-underline"
                              : "null"
                          }`}
                          onClick={() => handleChange(company, "company")}
                        >
                          {company}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* {color} */}
                  <div>
                    <p className="p-0 m-0  chead-color fw-bold mt-3 text-capitalize">
                      {item.color.title}
                    </p>
                    <div className="d-flex align-items-center my-4">
                      {item.color.colors.map((color) =>
                        color == "all" ? (
                          <span
                            className="me-2 text-capitalize pointer phead-color text-decoration-underline"
                            onClick={() => handleChange(item.color, "clr")}
                          >
                            {color}
                          </span>
                        ) : (
                          <span
                            style={{
                              backgroundColor: color,
                              width: "20px",
                              height: "20px",
                              opacity: "0.5",
                            }}
                            className="rounded-circle border-0 mx-1 pointer text-center "
                            onClick={() => handleChange(color, "clr")}
                          >
                            {defaultColor === color ? (
                              <i className="bi bi-check fw-bold text-dark opacity-1"></i>
                            ) : null}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="p-0 m-0 chead-color fw-bold mt-3 text-capitalize">
                      {item.range.title}
                    </p>
                    <p className="p-0 m-0 phead-color my-2">
                      {" "}
                      ${convertPrice(formik.values.range)}
                    </p>
                    <input
                      type={item.range.type}
                      min={item.range.min}
                      value={formik.values.range}
                      // value={0}?
                      name="range"
                      ref={inputRef}
                      onChange={(e) => {
                        handleChange(e, "range"), formik.handleChange(e);
                      }}
                      max={Number(item.range.max)}
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="" className="form-label chead-color me-5  ">
                      {item.checkbox.title}
                    </label>
                    <input
                      type={item.checkbox.type}
                      value={formik.values.freeShiping}
                      name="freeShiping"
                      onClick={(e) => {
                        handleChange(true, "checkbox"),
                          formik.setValues({
                            ...formik.values,
                            freeShiping: !formik.values.freeShiping,
                          });
                      }}
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
          <div className="col ">
            <div className="row py-3">
              <div className="col-lg-2 py-2  ">
                <i
                  className={`bi bi-grid-fill border  pointer  fs-6 p-1  rounded-1  mx-1 ${
                    layout && "bg-dark text-light"
                  }`}
                  onClick={() => setLayout(() => !false)}
                ></i>
                <i
                  className={`bi bi-list border pointer  border-dark rounded-1 p-1  fs-6 ${
                    !layout && "bg-dark text-light"
                  }`}
                  onClick={() => setLayout(() => !true)}
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
            <div className="row gy-4 ">
              {productLists?.map((product) => (
                <div
                  className={
                    layout ? " col-md-6 col-lg-4   d-block" : "col-12 d-flex"
                  }
                  onClick={() => navigate(`/poster/${product.id}`)}
                >
                  <div
                    className=""
                    style={{
                      height: "175px",
                      width: `${!layout ? "45%" : "auto"}`,
                    }}
                  >
                    <img
                      src={product?.image}
                      className="w-100 h-100 object-fit-cover rounded"
                      alt={product?.name}
                    />
                  </div>
                  <div
                    className={`d-flex   ${
                      !layout
                        ? "mx-2 ms-5  flex-column justify-content-center my-2 w-100"
                        : "justify-content-between"
                    } `}
                  >
                    <p
                      className={`chead-color text-capitalize mb-0 ${
                        !layout ? "fs-4 fw-bold " : ""
                      } `}
                    >
                      {product.name}
                    </p>
                    <p
                      className={`chead primary mb-0 ${
                        !layout ? " fw-bold " : ""
                      }`}
                    >
                      $
                      <span className="ms-1">
                        {convertPrice(product.price)}
                      </span>
                    </p>
                    {!layout && (
                      <p
                        className="text-truncate text-no-wrap phead-color pe-5 mb-0"
                        style={{ width: "500px" }}
                      >
                        <span className="mt-4 mb-4">
                          {product?.description}
                        </span>
                        <div>
                          <Link
                            className="nav-link rounded px-3 primary bgprimary d-inline-block"
                            to={`{/products/${product?.id}`}
                          >
                            Details
                          </Link>
                        </div>
                      </p>
                    )}
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
