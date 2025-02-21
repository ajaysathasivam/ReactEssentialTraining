import { useEffect, useState } from "react";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import Section from "../../components/layout/Section";
import DropDown from "../../components/dropDown/DropDown";
import { convertPrice, filterData } from "../../utils/FilterData";
import "./Products.scss";
import Button from "../../components/button/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../utils/windowDimension";
const Products = () => {
  const [layout, setLayout] = useState(true);
  const [sortItem, setSortItem] = useState(0);
  const currentPath = useLocation();
  const [productLists, setProductLists] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    company: "all",
    shipping: false,
    color: "all",
    price: 0,
    sort: "",
  });

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

  useEffect(() => {
    let tempProduts = allProducts;
    if (filters.search) {
      tempProduts = tempProduts.filter((curr) =>
        curr.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.category && filters.category.toLowerCase() !== "all") {
      tempProduts = tempProduts.filter(
        (curr) => curr.category === filters.category
      );
    }
    if (filters.company && filters.company.toLowerCase() !== "all") {
      tempProduts = tempProduts.filter(
        (curr) => curr.company === filters.company
      );
    }
    if (filters.shipping) {
      tempProduts = tempProduts.filter(
        (curr) => curr.shipping === filters.shipping
      );
    }
    if (filters.color && filters.color !== "all") {
      tempProduts = tempProduts.filter((curr) =>
        curr.colors?.includes(filters?.color)
      );
    }
    if (filters.price) {
      tempProduts = tempProduts.filter((curr) => curr.price <= filters?.price);
    }
    if (filters.sort) {
      const temp = [...tempProduts];

      if (filters.sort === " a-z") {
        temp.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
      }
      if (filters.sort === "z-a") {
        temp.sort((a, b) =>
          b.name.toLowerCase().localeCompare(a.name.toLowerCase())
        );
      }

      if (filters.sort === "highest") {
        temp.sort((a, b) => b.price - a.price);
      }
      if (filters.sort === "lowest") {
        temp.sort((a, b) => a.price - b.price);
      }
      tempProduts = [...temp];
    }

    setProductLists(tempProduts);
  }, [filters, allProducts]);

  const handleFilter = (name, value) => {
    setFilters((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  useEffect(() => {
    const maxPriceRange = Math.max(
      ...(allProducts?.map((curr) => curr.price) || [0])
    );
    setFilters((pre) => ({
      ...pre,
      price: maxPriceRange,
    }));
  }, [allProducts]);

  const colors = [
    "all",
    ...new Set(allProducts?.flatMap((curr) => curr.colors) || []),
  ];
  const maxPriceRange = Math.max(
    ...(allProducts?.map((curr) => curr.price) || [0])
  );

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
                ? { height: "100vh", maxHeight: "100%", top: "10px" }
                : null
            }
          >
            <form style={{ fontSize: "12px" }}>
              {filterData?.map((item) => (
                <>
                  <input
                    type={item.input.type}
                    onChange={(e) => handleFilter("search", e.target.value)}
                    name={item.input.name}
                    placeholder="search"
                    className="border-0 input-search px-2 w-100 rounded"
                  />
                  <ul className="navbar-nav">
                    <span className="chead-color my-2 text-capitalize fw-bold">
                      {item.catogories.title}
                    </span>
                    {item.catogories.subCt.map((subCt, idx) => (
                      <li
                        key={idx}
                        className={`nav-item my-1 text-capitalize   phead-color pointer text-decoration-none
                          ${
                            filters.category === subCt
                              ? "text-decoration-underline"
                              : "null"
                          }`}
                        style={{ letterSpacing: "1.6px", fontSize: "12px" }}
                        onClick={() => handleFilter("category", subCt)}
                      >
                        {subCt}
                      </li>
                    ))}
                  </ul>
                  <div className="positon-relative ">
                    <p className="p-0 m-0 chead-color fw-bold mt-4 text-capitalize">
                      {item?.company?.title}
                    </p>
                    <span
                      className=""
                      onClick={() => setDrop((pre) => !pre)}
                    >
                     <span className=" bg-light phead-color">All <i className="bi bi-caret-down-fill"></i></span>
                      <ul className=" p-0 pt-2 position-absolute top-1 z-3 w-50 bg-light border-1   ">
                        {item?.company.comLst.map((company, idx) => (
                          <li
                            key={idx}
                            className={`${
                              drop ? "d-block" : "d-none"
                            }  list-unstyled pointer  phead-color hover ps-1 text-capitalize ${
                              filters.company === company
                                ? "text-decoration-underline"
                                : "null"
                            }`}
                            onClick={() => handleFilter("company", company)}
                            style={{ letterSpacing: "1.6px", fontSize: "12px" }}
                          >
                            {company}
                          </li>
                        ))}
                      </ul>
                    </span>
                  </div>
                  {/* {color} */}
                  <div>
                    <p className="p-0 m-0 fs-6 chead-color fw-bold mt-3 text-capitalize">
                      {item.color.title}
                    </p>
                    <div className="d-flex align-items-center ">
                      {!!colors?.length &&
                        colors?.map((color, idx) =>
                          color == "all" ? (
                            <span
                              key={idx}
                              className="me-2 text-capitalize pointer phead-color text-decoration-underline"
                              onClick={() => handleFilter("color", color)}
                            >
                              {color}
                            </span>
                          ) : (
                            <span
                              key={idx}
                              style={{
                                backgroundColor: color,
                                width: "20px",
                                height: "20px",
                                opacity: "0.5",
                              }}
                              className="rounded-circle border-0 mx-1 pointer text-center "
                              onClick={() => handleFilter("color", color)}
                            >
                              {filters?.color === color ? (
                                <i className="bi bi-check fw-bold text-white opacity-1"></i>
                              ) : null}
                            </span>
                          )
                        )}
                    </div>
                  </div>
                  <div>
                    <p className="p-0 m-0 fs-6 chead-color fw-bold mt-3 text-capitalize">
                      {item.range.title}
                    </p>
                    <p className="p-0 m-0 phead-color my-2">
                      {" "}
                      ${convertPrice(filters?.price)}
                    </p>
                    <input
                      value={filters.price}
                      type="range"
                      onChange={(e) => {
                        setFilters((pre) => ({
                          ...pre,
                          price: e.target.value,
                        }));
                      }}
                      max={maxPriceRange || 0}
                    />
                  </div>
                  <div className="my-2">
                    <label
                      htmlFor="shipping"
                      className="form-label chead-color me-5  "
                    >
                      {item.checkbox.title}
                    </label>
                    <input
                      id="shipping"
                      type={item.checkbox.type}
                      checked={filters?.shipping}
                      name="freeShiping"
                      onClick={(e) => {
                        setFilters((pre) => ({
                          ...pre,
                          shipping: e.target.checked,
                        }));
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
                  setProductLists(allProducts);
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
                  {productLists?.length
                    ? `${productLists?.length} product found`
                    : "0 product found"}
                </span>
              </div>
              <div className="col-12 col-lg-4">
                <hr />
              </div>
              <div className="col-6  col-lg-3   d-flex align-items-center justify-content-end">
                <div className="  align-item-center w-50">sort by</div>
                <div className=" bg-gray w-75">
                  <DropDown
                    list={["highest", "lowest", "a-z", "z-a"]}
                    setFilters={setFilters}
                  />
                </div>
              </div>
            </div>
            <div className="row gy-4 ">
              {productLists?.map((product, idx) => (
                <div
                  key={idx}
                  className={
                    layout ? " col-md-6 col-lg-4   d-block" : "col-12 d-flex"
                  }
                >
                  <div
                    className="position-relative pointer"
                    style={{
                      height: "175px",
                      width: `${!layout ? "45%" : "auto"}`,
                    }}
                    // onClick={() => navigate(`/poster/${product.id}`)}
                  >
                    <span className="position-absolute product-image opacity-0  rounded  primary fw-bold d-flex align-items-center justify-content-center  w-100 h-100 display-6 p-2">
                      <i
                        className="bi bi-search bgprimary rounded-circle fs-5  d-flex  justify-content-center align-items-center  fw-bolder"
                        style={{
                          width: "40px",
                          height: "40px",
                          fontWeight: "bolder",
                        }}
                        onClick={() => navigate(`/poster/${product.id}`)}
                      ></i>
                    </span>
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
