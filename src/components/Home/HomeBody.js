import React from "react";
import { Link } from "react-router-dom";

const HomeBody = () => {
  return (
    <div className="home-body py-5">
      <div className="container-xl">
        <div className="row">
          <div>
            <h1 className="text-center display-2 text-custom-blue">
              Take control
            </h1>
            <p className="text-center">
              <h1 className="d-md-inline display-2">of your finace</h1>
              <h1 className="d-md-inline display-2 text-custom-blue">
                {" "}
                effortlessly
              </h1>
            </p>
          </div>
          <div className="d-flex justify-content-center gap-5 ">
            <div className="btn btn-custom-blue-bg-white px-4">
              <Link className="link" to={"/signin"}>Sign In</Link>
            </div>
            <div className="btn btn-custom-blue px-4">
              <Link className="link"to={"/signup"}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBody;
