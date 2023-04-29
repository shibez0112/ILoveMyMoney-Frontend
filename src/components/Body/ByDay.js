import React from "react";
import Transaction from "./Transaction";

const ByDay = () => {
  return (
    <>
      <div className="d-flex flex-column py-3">
        <div className="row border-bottom border-top px-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="day-num">
                <h1>01</h1>
              </div>
              <div className="d-flex flex-column px-2 py-1">
                <div>
                  <span className="text-secondary">Saturday</span>
                </div>
                <div className="fw-light">
                  <span className="text-secondary">April </span>
                  <span className="text-secondary">2023</span>
                </div>
              </div>
            </div>
            <div className="py-3">
              <span className="bold fs-6">600000</span>
            </div>
          </div>
        </div>
        <div className="row">
          <Transaction />
          <Transaction />
          <Transaction />
        </div>
      </div>
    </>
  );
};
export default ByDay;
