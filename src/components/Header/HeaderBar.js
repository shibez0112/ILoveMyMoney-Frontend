import { React, Link } from "react";
import { BiWallet, BiSearch, BiFilterAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const HeaderBar = () => {
  return (
    <div className="d-flex justify-content-between py-1">
      <div className="d-flex header-items-left position-relative">
        <div className="col-1 pt-2">
          <BiWallet size={25} />
        </div>
        <div className="col-11 px-3">
          <div className="d-flex">
            <div className="wallet-title pt-1">
              <span>Wallet is fucking long </span>
            </div>
            <div className="dropdown">
              <IoMdArrowDropdown
                href="#"
                className="dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />

              <ul
                className="dropdown-menu position-absolute"
                style={{ top: "50%", bottom: "100%" }}
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Edit wallet
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Delete wallet
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="balance fw-bold">
            <span>600000</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <BiFilterAlt size={25} />
        <BiSearch size={25} />
        <button
          className="btn btn-custom-blue m-2"
          style={{ fontSize: "14px" }}
        >
          Add new transaction
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
