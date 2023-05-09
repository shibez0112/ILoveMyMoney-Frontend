import React from "react";
import Wallet from "./Wallet";

const WalletsCard = () => {
  return (
    <>
      <div className="card-container py-3 bg-white rounded shadow ">
        <Wallet />
        <Wallet />
        <Wallet />
      </div>
    </>
  );
};

export default WalletsCard;
