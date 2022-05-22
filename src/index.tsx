import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PhonesSection from "./phonesSection/PhonesSection";
import BrandsSection from "./brands/BrandsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrandPhonesSection from "./brands/BrandPhonesSection";
import ErrorComponent from "./error/ErrorComponent";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<BrandsSection />} />
        <Route path="/phones/:brand" element={<BrandPhonesSection />} />
        <Route path="/phones" element={<BrandsSection />} />
        <Route path="/error" element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
