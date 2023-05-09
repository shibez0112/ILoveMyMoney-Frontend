import { MdAccountBalanceWallet, MdHelpOutline } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { React, useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
// ------------------------------------------------

const items = [
  {
    label: "Wallet",
    key: "wallet",
    icon: <MdAccountBalanceWallet size={25} />,
  },
  {
    label: "Report",
    key: "report",
    icon: <TbReportAnalytics size={25} />,
  },
  {
    label: "Help",
    key: "help",
    icon: <MdHelpOutline size={25} />,
  },
  {
    label: "Profile",
    key: "profile",
    icon: <BiUserCircle size={25} />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="vh-100">
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
          } else {
            navigate(key);
          }
        }}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
