import React from "react";
import { BiWallet } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
const Wallet = () => {
  return (
    <>
      <div className="transaction-container border-top">
        <div className="px-3 py-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="logo py-2">
                <BiWallet size={27} />
              </div>
              <div className="d-flex flex-column px-3">
                <div className="fw-medium fs-6">Wallet Title</div>
                <div className="fs-7 fw-light text-secondary">999999.0 $</div>
              </div>
            </div>
            <div className="d-flex gap-3">
              <Link className="fs-3 text-danger">
                <AiFillDelete size={23} />
              </Link>
              <Link className="fs-3 text-primary">
                <AiFillEdit size={23} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Wallet;
