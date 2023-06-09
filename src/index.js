import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./routes/Signin";
import Home from "./routes/Home";
import App from "./App";
import HomeBody from "./components/Home/HomeBody";
import About from "./components/About/About";
import Privacy from "./components/Privacy/Privacy";
import Contact from "./components/Contact/Contact";
import Signup from "./routes/Signup";
import TransactionsCard from "./components/Transaction/TransactionsCard";
import WalletsCard from "./components/Wallet/WalletsCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        <Route path="/user" element={<App />}>
          <Route index element={<TransactionsCard />}></Route>
          <Route path="wallet" element={<WalletsCard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
