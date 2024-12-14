import React, { useState } from "react";
import MenuIcon from "../../assets/icons/menu.svg";
import DasshboardIcon from "../../assets/icons/dashboard.svg";
import InventoryIcon from "../../assets/icons/inventory.svg";
import ReportIcon from "../../assets/icons/Report.svg";
import SuppliersIcon from "../../assets/icons/Suppliers.svg";
import OrdersIcon from "../../assets/icons/Order.svg";
import StoreIcon from "../../assets/icons/Store.svg";
import Logo from "../../assets/icons/Logo2.svg";
import SettingsIcon from "../../assets/icons/Settings.svg";
import LogoutIcon from "../../assets/icons/LogOut.svg";
import { Link } from "react-router-dom";

export default function SideBar() {
  const menus = [
    { name: "Dasshboard", link: "/", icon: DasshboardIcon },
    { name: "Inventory", link: "/", icon: InventoryIcon },
    { name: "Reports", link: "/", icon: ReportIcon },
    { name: "Suppliers", link: "/", icon: SuppliersIcon },
    { name: "Orders", link: "/", icon: OrdersIcon },
    { name: "Manage Store", link: "/", icon: StoreIcon },
    { name: "Settings", link: "/", icon: SettingsIcon, margin: true },
    { name: "Log out", link: "/", icon: LogoutIcon },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div className="">
        <div
          className={`bg-[#081A51] p-5 pt-1 duration-300 h-[650px] mt-[20px] rounded-xl ml-[20px] mb-[20px] ${
            open ? "w-72" : "w-24"
          } duration-500 text-gray-100 px-6`}
        >
          <div className="flex items-end justify-between py-3">
            <img
              src={MenuIcon}
              alt="Menu"
              className="cursor-pointer w-[26px] h-[26px]"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className="relative flex flex-col gap-5 mt-3">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu?.margin && "mt-[50px]"
                } group flex items-center text-sm gap-10 font-medium p-2 hover:bg-blue-600 rounded-md`}
              >
                <img src={menu?.icon} alt={menu?.name} className="w-6 h-6" />
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
