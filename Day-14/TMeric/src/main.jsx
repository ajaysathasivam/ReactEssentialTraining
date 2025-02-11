import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CreateUserPage from "./Pages/CreateUserPage.jsx";
import Main from "./Components/MainContents/Main.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="newuser" element={<CreateUserPage />} />
        <Route path="admin/dashboard" element={<Main />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
