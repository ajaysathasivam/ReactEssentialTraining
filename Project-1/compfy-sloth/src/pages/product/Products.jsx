import React, { useEffect, useState } from "react";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import Layout from "../../components/layout/Layout";
import { useSelector } from "react-redux";
import Section from "../../components/layout/Section";
import Card from "../../components/card/Card";
import DropDown from "../../components/dropDown/DropDown";
import { filterData } from "../../utils/FilterData";
import { useFormik } from "formik";
import "./Products.scss"
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const data = useSelector((state) => state.products.value);
  const [products, setProducts] = useState(data);
  const [records, setRecords] = useState(products.length);
  const [layout, setLayout] = useState(" col-md-6 col-lg-4");
  const [sortItem, setSortItem] = useState(0);
  const [priceRange, setRange] = useState(0);
  const [sortCompany, setCompany] = useState(null)
  const [catogories, setCatogories] = useState()
  const initValue = {
    search: "",
    range: "",
    freeShiping: "",
  };
  const formik = useFormik({
    initialValues: initValue,
    onSubmit: (values) => {
      formik.setValues(initValue)
      setProducts(data)
      setRecords(data.length)
    },
  });
  const sortProducts = (products, type = "price", order = "asc") => {
    return [...products].sort((a, b) => {
      if (type === "price") {
        return order === "asc" ? a.price - b.price : b.price - a.price;
      } else if (type === "name") {
        return order === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
    });
  };

  useEffect(() => {
    switch (sortItem) {
      case 1:
        setProducts(sortProducts(data, "price", "desc"));
        break;
      case 2:
        setProducts(sortProducts(data, "price", "asc"));
        break;

      case 3:
        setProducts(sortProducts(data, "name", "asc"));
        break;
      case 4:
        setProducts(sortProducts(data, "name", "desc"));
        break;
      default:
        setProducts(data);
    }
  }, [sortItem]);

  useEffect(() => {
    switch (sortCompany) {
      case 1:
        const filteredProductsByMarcos = data.filter((obj) => obj.company == "marcos")
        setProducts(filteredProductsByMarcos)
        setRecords(filteredProductsByMarcos.length)
        // console.log(filteredProductsByMarcos)
        break;
      case 2:
        const filteredProductsByliddy = data.filter((obj) => obj.company == "liddy")
        setProducts(filteredProductsByliddy)
        setRecords(filteredProductsByliddy.length)
        break;

      case 3:
        const filteredProductsByikea = data.filter((obj) => obj.company == "ikea")
        setProducts(filteredProductsByikea)
        setRecords(filteredProductsByikea.length)
        break;
      case 4:
        const filteredProductsBycaressa = data.filter((obj) => obj.company == "caressa")
        setProducts(filteredProductsBycaressa)
        setRecords(filteredProductsBycaressa.length)
        break;

      default:
        setProducts(data);
    }
  }, [sortCompany]);

  useEffect(() => {
    const filteredProductsByCatogories = data.filter((obj) => obj.category == catogories)
    setProducts(filteredProductsByCatogories)
  }, [catogories])

  const handleColor = (color) => {
    const filteredProductsByColor = data.filter((obj) =>
      obj.colors.some((clr) => clr.toLowerCase() === color.toLowerCase())
    );

    setProducts(filteredProductsByColor)
    setRecords(filteredProductsByColor.length)
  }
  const handleClear = () => {
    setProducts(data)
  }
  const handleChange = (e, type) => {
    const { value } = e.target;
    switch (type) {
      case "name":
        const filteredProductsByName = data.filter((obj) =>
          obj.name.toLowerCase().includes(value.toLowerCase())
        );
        setProducts(filteredProductsByName);
        setRecords(filteredProductsByName.length);
        if (!value) {
          setProducts(data);
          setRecords(data.length);
        }
        formik.handleChange(e);
        break;
      case "range":
        const priceValue = Number(value);
        const filteredProductsByRange = data.filter(
          (obj) => Number(obj.price) > priceValue
        );
        setProducts(filteredProductsByRange);
        setRecords(filteredProductsByRange.length);
        setRange(priceValue);
        if (!value) {
          setProducts(data);
          setRecords(data.length);
        }
        formik.setValues(value);
        break;
      case "checkbox":
        const filteredProductsByCheckbox = data.filter(
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
        const filteredProductsByColor = data.filter(
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
  };
  const navigate = useNavigate()


  return (
    <>
      <BreadCrums current={"Products"} className={"position-relative"} />
      <Section>
        <div className="row ">
          <div
            className="col-lg-3 filter-container position-sticky"

          >
            <form onSubmit={formik.handleSubmit}>
              {filterData?.map((item) => (
                <>
                  <input
                    type={item.input.type}
                    value={formik.values?.[item.input.name]}
                    onChange={(e) => handleChange(e, "name")}
                    name={item.input.name}
                    placeholder="search"
                    className="border-0 input-search px-2 py-2 w-100 rounded"
                  />
                  <ul className="navbar-nav">
                    <span className="chead-color my-2 text-capitalize fw-bold">{item.catogories.title}</span>
                    <span className="chead-color my-1 phead-color text-decoration-underline" style={{ letterSpacing: "1.6px", fontSize: "0.8rem" }}>All</span>
                    {item.catogories.subCt.map((subCt) => (
                      <li className="nav-item my-1 text-capitalize   phead-color pointer" style={{ letterSpacing: "1.6px", fontSize: "0.9rem" }} onClick={() => setCatogories(subCt)}>{subCt}</li>
                    ))}
                  </ul>
                  <div>
                    <p className="p-0 m-0 chead-color fw-bold mt-4 text-capitalize">{item?.company?.title}</p>
                    <DropDown list={item?.company?.comLst} setSortItem={setCompany} />
                  </div>
                  {/* {color} */}
                  <div>
                    <p className="p-0 m-0  chead-color fw-bold mt-3 text-capitalize">{item.color.title}</p>
                    <div className="d-flex align-items-center my-4">
                      <span className="me-2 phead-color text-decoration-underline">All</span>
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
                    <p className="p-0 m-0 chead-color fw-bold mt-3 text-capitalize">{item.range.title}</p>
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
              <Button className="btn btn-danger my-2 mb-4  px-5" text={"clear fillter"} onClick={() => { formik.handleReset, handleClear }}>

              </Button>
            </form>
          </div>

          <div className="col">
            <div className="row py-3">
              <div className="col-lg-2 py-2  ">
                <i
                  className="bi bi-grid-fill pointer bg-dark text-light fs-6 p-1  rounded-1  mx-1"
                  onClick={() => setLayout(" col-md-6 col-lg-4")}
                ></i>
                <i
                  className="bi bi-list border pointer border-dark rounded-1 p-1  fs-6  "
                  onClick={() => setLayout(" col-12")}
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
              {products?.map((product) => (
                <div className={`${layout} col-12 `}>
                  <Card className={"featured-card"}>
                    <div className="">
                      <div
                        className={`${layout === "col-12" && "flow-column"}`}
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
                          <p className="chead-color text-capitalize">{product.name}</p>
                          <p className="chead primary">
                            $<span className="ms-1">{(product.price / 100).toFixed(2)}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
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
