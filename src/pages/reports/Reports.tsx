import { Button } from "@mui/material";

export default function Reports() {
  return (
    <div className="flex flex-col h-full pt-2 pb-2 pl-2 pr-2 mb-6 ml-12 overflow-x-hidden border-2 border-blue-700 rounded-md -mt-14">
      <div className="flex justify-center gap-6">
        <div className="w-[555px] h-[244px] bg-blue-50 rounded-md">
          <div className="ml-[20px]">
            {" "}
            <p className="text-[24px] text-gray-800 pt-4">Overview</p>
          </div>
          <div className="flex space-x-[140px] ml-[24px]">
            <div className="flex flex-col mt-[24px]">
              <p>$ 21,190</p>
              <p className="text-gray-700">Total Profit</p>
            </div>
            <div className="flex flex-col mt-[24px]">
              <p>$ 18,300</p>
              <p className="text-gray-700">Revenue</p>
            </div>
            <div className="flex flex-col mt-[24px]">
              <p>$ 17,432</p>
              <p className="text-gray-700">Sales</p>
            </div>
          </div>
          <div className="flex space-x-[40px] ml-[24px]">
            <div className="flex flex-col mt-[24px]">
              <p>$ 1,17,432</p>
              <p className="text-gray-700">Net purchase value</p>
            </div>
            <div className="flex flex-col mt-[24px]">
              <p>$ 80,300</p>
              <p className="text-gray-700">Net sales value</p>
            </div>
            <div className="flex flex-col mt-[24px]">
              <p>$ 30,432</p>
              <p className="text-gray-700">MoM Profit</p>
            </div>
            <div className="flex flex-col mt-[24px]">
              <p>$ 1,10432</p>
              <p className="text-gray-700">YoY Profit</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex gap-6 ">
          <div className="w-[519px] h-[244px]  bg-blue-50 rounded-md">
            <div className="flex justify-between ">
              <p className="text-[24px] text-gray-800 pl-4 mt-2">
                Best selling category
              </p>
              <Button>See all</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] gap-6 justify-center">
        <div className="w-[1096px] h-[384px] bg-blue-50 rounded-md">
          <div className="ml-[20px]">
            <p className="text-[24px] text-gray-800 pt-4">Profit & Revenue</p>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] gap-6 ">
        <div className="w-[1096px] h-[384px]  bg-blue-50 rounded-md">
          <div className="flex justify-between mt-3">
            <p className="text-[24px] text-gray-800 pl-4">
              Best selling product
            </p>
            <Button>See all</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
