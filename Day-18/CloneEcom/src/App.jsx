import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../src/Pages/HomePage/HomePage";
import ProductsList from "../src/Pages/ProductsPage/ProductsList/ProductsList";
import BrandPage from "./Pages/ProductsPage/Brands/BrandPage";
import Categories from "./Pages/ProductsPage/Categories/Categories";
import AddProducts from "./Pages/ProductsPage/AddProducts/AddProducts";
import FetchData from "./ApiCalls/FetchData";
import { Provider } from "react-redux";
import store from "./Store/Store";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage />}>
        <Route
          path="productslist"
          element={<ProductsList />}
          loader={FetchData}
        />
        <Route path="brands" element={<BrandPage />} />
        <Route path="categories" element={<Categories />} />
        <Route path="add" element={<AddProducts />} />
      </Route>
    )
  );

  return (
    // <div>
    //   <RouterProvider router={router} />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            path="productslist"
            element={<ProductsList />}
            // loader={FetchData}
          />
          <Route path="brands" element={<BrandPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="add" element={<AddProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
