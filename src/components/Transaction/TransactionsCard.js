import React from "react";
import ByDay from "./ByDay";

const TransactionsCard = () => {
  return (
    <>
      <div className="card-container py-3 bg-white rounded shadow ">
        <ul
          className="nav nav-tabs d-flex justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active text-uppercase"
              id="last-month-tab"
              data-bs-toggle="tab"
              data-bs-target="#last-month"
              type="button"
              role="tab"
              aria-controls="last-month"
              aria-selected="true"
            >
              Last Month
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-uppercase"
              id="this-month-tab"
              data-bs-toggle="tab"
              data-bs-target="#this-month"
              type="button"
              role="tab"
              aria-controls="this-month"
              aria-selected="false"
            >
              This Month
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link text-uppercase"
              id="next-month-tab"
              data-bs-toggle="tab"
              data-bs-target="#next-month"
              type="button"
              role="tab"
              aria-controls="next-month"
              aria-selected="false"
            >
              Next Month
            </button>
          </li>
        </ul>

        <div className="gap-15 p-3 ">
          <div className="d-flex justify-content-between">
            <span>Money In</span>
            <span className="text-primary">0</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Money Out</span>
            <span className="text-danger">600000.00</span>
          </div>
          <div className="d-flex justify-content-end pb-1">
            <span className="border-top fs-6">-200000000</span>
          </div>
        </div>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="last-month"
            role="tabpanel"
            aria-labelledby="last-month-tab"
          >
            <ByDay />
            <ByDay />
            <ByDay />
            <ByDay />
            <ByDay />
          </div>
          <div
            className="tab-pane fade"
            id="this-month"
            role="tabpanel"
            aria-labelledby="this-month-tab"
          >
            <ByDay />
          </div>
          <div
            className="tab-pane fade"
            id="next-month"
            role="tabpanel"
            aria-labelledby="next-month-tab"
          >
            <ByDay />
          </div>
        </div>
      </div>
    </>
  );
};
export default TransactionsCard;
