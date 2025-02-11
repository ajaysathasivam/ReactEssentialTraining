import React, { useContext, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Aside from "../../Components/Aside/Aside";
import MainSection from "../../Components/MainSection/MainSection";
import FetchData from "../../ApiCalls/FetchData";
import { useDispatch } from "react-redux";
import { setValue } from "../../Store/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    const data = await FetchData();
    dispatch(setValue(data));
  }, [dispatch]);
  return (
    <>
      <header className="container-fluid">
        <div className="row">
          <Header />
        </div>
      </header>
      <div className="row d-flex">
        <div className="col-2 w-25" style={{ minHeight: "90vh" }}>
          <Aside />
        </div>
        <div className="col w-75">
          <main>
            <MainSection />
          </main>
        </div>
      </div>

      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default HomePage;
