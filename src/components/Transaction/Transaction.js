import React from "react";
import { MdFastfood } from "react-icons/md";

const Transaction = () => {
  return (
    <>
      <div className="transaction-container">
        <div className="px-3 py-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="logo py-2">
                <MdFastfood size={27} />
              </div>
              <div className="d-flex flex-column px-3">
                <div className="fw-medium">Category</div>
                <div className="fs-7 fw-light text-secondary">Title</div>
              </div>
            </div>
            <div className="py-2">
              <span className="text-danger">60000.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Transaction;
