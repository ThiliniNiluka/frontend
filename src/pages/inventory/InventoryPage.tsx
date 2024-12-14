import { Button } from "@mui/material";
import Filter from "../../assets/icons/Filters.svg";

export default function InventoryPage() {
  return (
    <div className="flex flex-col h-full pt-2 pb-2 pl-2 pr-2 mb-6 ml-12 overflow-x-hidden border-2 border-blue-700 rounded-md -mt-14">
      <div className="justify-items-center">
        <div className="md:w-[1096px] sm:w-[950px] h-[188px] bg-blue-100 rounded-md">
          <div className="ml-[24px]">
            {" "}
            <p className="text-[24px] font-sans text-black py-2">
              Overall Inventory
            </p>
            <div className="flex space-x-[156px]">
              <div className="mt-[18px]">
                <span className="font-semibold text-blue-500 text-[18px]">
                  Categories
                </span>
                <div className="flex flex-col mt-4 text-gray-300">
                  {" "}
                  <span>14</span>
                  <span className="mt-2">Last 7 days</span>
                </div>
              </div>
              <div className="flex flex-col mt-[18px]">
                <span className="text-[18px] font-semibold text-yellow-100">
                  Total Products
                </span>
                <div className="flex mt-4 text-gray-300">
                  {" "}
                  <span>868</span>
                  <span className="ml-[90px]">$ 25000</span>
                </div>
                <div className="flex mt-2 text-gray-300">
                  {" "}
                  <span>Last 7 days</span>
                  <span className="ml-[38px]">Revenue</span>
                </div>
              </div>
              <div className="flex flex-col mt-[20px]">
                <span className="text-[18px] font-semibold text-purple-100">
                  Top Selling
                </span>
                <div className="flex mt-4 text-gray-300">
                  {" "}
                  <span>5</span>
                  <span className="ml-[90px]">$ 2500</span>
                </div>
                <div className="flex mt-2 text-gray-300">
                  {" "}
                  <span>Last 7 days</span>
                  <span className="ml-[38px]">Cost</span>
                </div>
              </div>
              <div className="flex flex-col mt-[20px]">
                <span className="text-red-400 font-semibold text-[18px]">
                  Low Stocks
                </span>
                <div className="flex mt-4 text-gray-300">
                  {" "}
                  <span>12</span>
                  <span className="ml-[150px]">2</span>
                </div>
                <div className="flex mt-2 text-gray-300">
                  {" "}
                  <span>Ordered</span>
                  <span className="ml-[38px]">Not in stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[1096px] bg-blue-100 sm:w-[950px] h-[606px] mt-[20px]">
          <div className="mt-[20px]">
            <div className="flex mt-3 ml-[20px]">
              {" "}
              <span className="text-[24px] text-gray-800 mt-2">Products</span>
              <div className="flex ml-[540px] space-x-2">
                <Button variant="contained" className="">
                  Add Product
                </Button>{" "}
                <Button variant="outlined">
                  <img src={Filter} alt="" />
                  <span className="ml-2 text-gray-400">Filters</span>
                </Button>
                <Button variant="outlined" className="space-x-10">
                  <span className="text-gray-400">Download all</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { Button } from "@mui/material";
// import Filter from "../../assets/icons/Filters.svg";

// export default function InventoryPage() {
//   const stats = [
//     {
//       title: "Categories",
//       color: "text-blue-500",
//       value1: 14,
//       subtitle1: "Last 7 days",
//     },
//     {
//       title: "Total Products",
//       color: "text-yellow-100",
//       value1: 868,
//       value2: "$ 25000",
//       subtitle1: "Last 7 days",
//       subtitle3: "Revenue",
//     },
//     {
//       title: "Top Selling",
//       color: "text-purple-100",
//       value1: 5,
//       value2: "$ 2500",
//       subtitle1: "Last 7 days",
//       subtitle2: "Cost",
//     },
//     {
//       title: "Low Stocks",
//       color: "text-red-400",
//       value1: 12,
//       value2: "2",
//       subtitle1: "Ordered",
//       subtitle2: "Not in stock",
//     },
//   ];

//   const handleAddProduct = () => alert("Add Product clicked!");
//   const handleFilter = () => alert("Filter clicked!");
//   const handleDownload = () => alert("Download clicked!");

//   return (
//     <div className="mt-[50px]">
//       <div className="md:w-[1096px] sm:w-[950px] h-[188px] shadow mt-3 bg-red-300">
//         <div className="ml-[24px] ">
//           <p className="text-[24px] text-gray-800 py-2">Overall Inventory</p>
//           <div className="flex space-x-[156px]">
//             {stats.map((item, index) => (
//               <div className="flex flex-col mt-[20px]" key={index}>
//                 <span className={`text-[18px] font-semibold ${item.color}`}>
//                   {item.title}
//                 </span>
//                 <div className="flex mt-4">
//                   <span>{item.value1}</span>
//                   <span className="ml-[90px]">{item.value2}</span>
//                 </div>
//                 <div className="flex mt-2">
//                   <span>{item.subtitle1}</span>
//                   <span className="ml-[20px] mr-2">{item.subtitle2}</span>
//                   <div>
//                     <span className="">{item.subtitle3}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="md:w-[1096px] sm:w-[950px] h-[606px] mt-[20px] mb-[50px]">
//         <div className="flex mt-3 ml-[20px] justify-between items-center">
//           <span className="text-[24px] text-gray-800">Products</span>
//           <div className="flex space-x-2">
//             <Button variant="contained" onClick={handleAddProduct}>
//               Add Product
//             </Button>
//             <Button variant="outlined" onClick={handleFilter}>
//               <img src={Filter} alt="" />
//               <span className="ml-2 text-gray-400">Filters</span>
//             </Button>
//             <Button variant="outlined" onClick={handleDownload}>
//               <span className="text-gray-400">Download all</span>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { Button } from "@mui/material";
// import Filter from "../../assets/icons/Filters.svg";

// export default function InventoryPage() {
//   const stats = [
//     {
//       title: "Categories",
//       color: "text-blue-500",
//       value1: 14,
//       subtitle1: "Last 7 days",
//     },
//     {
//       title: "Total Products",
//       color: "text-yellow-100",
//       value1: 868,
//       value2: "$ 25000",
//       subtitle1: "Last 7 days",
//       subtitle2: "Revenue", // Adjusted this text below
//     },
//     {
//       title: "Top Selling",
//       color: "text-purple-100",
//       value1: 5,
//       value2: "$ 2500",
//       subtitle1: "Last 7 days",
//       subtitle2: "Cost",
//     },
//     {
//       title: "Low Stocks",
//       color: "text-red-400",
//       value1: 12,
//       value2: "2", // Adjusted this number below
//       subtitle1: "Ordered",
//       subtitle2: "Not in stock",
//     },
//   ];

//   const handleAddProduct = () => alert("Add Product clicked!");
//   const handleFilter = () => alert("Filter clicked!");
//   const handleDownload = () => alert("Download clicked!");

//   return (
//     <div className="mt-[50px]">
//       {/* Inventory Summary */}
//       <div className="md:w-[1096px] ml-20 bg-red-300 sm:w-[950px] h-[188px] shadow mt-3">
//         <div className="ml-[20px] mt-3 ">
//           <span className="text-[24px] text-gray-800">Overall Inventory</span>
//           <div className="flex space-x-[150px] mt-3">
//             {stats.map((item, index) => (
//               <div className="flex flex-col mt-[20px]" key={index}>
//                 <span className={`text-[18px] font-semibold ${item.color}`}>
//                   {item.title}
//                 </span>
//                 <div className="flex mt-4">
//                   <span>{item.value1}</span>
//                   <span className="ml-[88px]">{item.value2}</span>{" "}
//                   {/* Moved 2px */}
//                 </div>
//                 <div className="flex mt-2">
//                   <span className="">{item.subtitle1}</span>
//                   <span className="ml-[28px] mr-2">{item.subtitle2}</span>{" "}
//                   {/* Moved 2px */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Products Section */}
//       <div className="md:w-[1096px] sm:w-[950px] h-[606px] mt-[20px] mb-[50px]">
//         <div className="flex mt-3 ml-[20px] justify-between items-center">
//           <span className="text-[24px] text-gray-800">Products</span>
//           <div className="flex space-x-2">
//             <Button variant="contained" onClick={handleAddProduct}>
//               Add Product
//             </Button>
//             <Button variant="outlined" onClick={handleFilter}>
//               <img src={Filter} alt="" />
//               <span className="ml-2 text-gray-400">Filters</span>
//             </Button>
//             <Button variant="outlined" onClick={handleDownload}>
//               <span className="text-gray-400">Download all</span>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
