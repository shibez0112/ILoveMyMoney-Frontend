import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="py-4 pb-5">
      <div className="container-xl">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-4">
              <Link to={"/"}>
                <img
                  className="img-fluid w-50"
                  src="/img/logo.png"
                  alt="ILoveMyMoney"
                />
              </Link>
            </div>
            <div className="col-3">
              <ul className="d-flex list-unstyled justify-content-between my-2">
                <li>
                  <Link className="link text-custom-black" to={"/about"}>About</Link>
                </li>
                <li>
                  <Link className="link text-custom-black" to={"/privacy"}>Privacy</Link>
                </li>
                <li>
                  <Link className="link text-custom-black" to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
