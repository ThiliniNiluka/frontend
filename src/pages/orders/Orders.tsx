import { Button } from "@mui/material";
import Filter from "../../assets/icons/Filters.svg";

export default function Orders() {
  return (
    <div className="flex flex-col h-full pt-2 pb-2 pl-2 pr-2 mb-6 ml-12 overflow-x-hidden border-2 border-blue-700 rounded-md -mt-14">
      <div className="justify-items-center">
        <div className="md:w-[1096px] sm:w-[950px] h-[188px] bg-blue-50">
          <div className="ml-[24px]">
            {" "}
            <p className="text-[24px] text-gray-800 pt-4">Overall Oders</p>
            <div className="flex space-x-[128px]">
              <div className="mt-[20px]">
                <span className="font-semibold text-blue-500 text-[18px]">
                  Total Orders
                </span>
                <div className="flex flex-col mt-4">
                  {" "}
                  <span>37</span>
                  <span className="mt-2">Last 7 days</span>
                </div>
              </div>
              <div className="flex flex-col mt-[20px]">
                <span className="text-[18px] font-semibold text-yellow-100">
                  Total Received
                </span>
                <div className="flex mt-4">
                  {" "}
                  <span>32</span>
                  <span className="ml-[90px]">$ 25000</span>
                </div>
                <div className="flex mt-2">
                  {" "}
                  <span>Last 7 days</span>
                  <span className="ml-[38px]">Revenue</span>
                </div>
              </div>
              <div className="flex flex-col mt-[20px]">
                <span className="text-[18px] font-semibold text-purple-100">
                  Top Returned
                </span>
                <div className="flex mt-4">
                  {" "}
                  <span>5</span>
                  <span className="ml-[120px]">$ 2500</span>
                </div>
                <div className="flex mt-2">
                  {" "}
                  <span>Last 7 days</span>
                  <span className="ml-[64px]">Cost</span>
                </div>
              </div>
              <div className="flex flex-col mt-[20px]">
                <span className="text-red-400 font-semibold text-[18px]">
                  On the way
                </span>
                <div className="flex mt-4">
                  {" "}
                  <span>12</span>
                  <span className="ml-[150px]">$ 2356</span>
                </div>
                <div className="flex justify-between mt-2">
                  {" "}
                  <span>Ordered</span>
                  <span>Cost</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[1096px] sm:w-[950px] h-[606px] mt-[20px] bg-blue-50">
          <div className="mt-[20px]">
            <div className="flex mt-3 ml-[20px]">
              {" "}
              <span className="text-[24px] text-gray-800">Orders</span>
              <div className="flex ml-[560px] space-x-2 mt-6">
                <Button variant="contained" className="">
                  Add Product
                </Button>{" "}
                <Button variant="outlined">
                  <img src={Filter} alt="" />
                  <span className="ml-2 text-gray-400">Filters</span>
                </Button>
                <Button variant="outlined" className="space-x-10">
                  <span className="text-gray-400">Order History</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
