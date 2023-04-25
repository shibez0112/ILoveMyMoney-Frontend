import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100 vw-100 position-relative">
          <div className="bg-custom-dark-blue h-50">
            <div className="position-absolute py-5 start-50 translate-middle-x">
              <Link to={"/"}>
                <img
                  src="/img/logo-2.png"
                  className="logo-2 img-fluid "
                  alt="ILoveMyMoney"
                />
              </Link>
            </div>

            <div className="card position-absolute top-50 start-50 translate-middle">
              <div className="card-body">
                <h2 className="card-title text-center py-3">Sign In</h2>
                <form className="">

                  <div className="form-group py-3 w-50 ml-0 mr-0 mx-auto">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group py-3 w-50 ml-0 mr-0 mx-auto">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group py-3 w-50 ml-0 mr-0 mx-auto">
                    <button type="submit" className="btn btn-custom-blue w-100">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-custom-white h-50"></div>
        </div>
      </div>
    </>
  );
};

export default Signin;
