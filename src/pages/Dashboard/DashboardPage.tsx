import Cost from "../../assets/icons/Cost.svg";
import Sales from "../../assets/icons/Sales.svg";
import Revenue from "../../assets/icons/Revenue.svg";
import Profit from "../../assets/icons/Profit.svg";
import Purchase from "../../assets/icons/Purchase.svg";
import Cancel from "../../assets/icons/Cancel.svg";
import Quality from "../../assets/icons/Quantity.svg";
import Location from "../../assets/icons/location.svg";
import Supplier from "../../assets/icons/Suppliers2.svg";
import Category from "../../assets/icons/Categories.svg";
import Product1 from "../../assets/icons/product1.svg";
import BasicArea from "../../components/Barchart/BasicArea";
import BasicBars from "../../components/Barchart/BasicBars";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full pt-2 pb-2 pl-2 pr-2 mb-6 ml-12 overflow-x-hidden border-2 border-blue-700 rounded-md -mt-14">
      <div className="flex gap-6">
        <div className="w-[690px] h-[163px] bg-blue-50 rounded-lg">
          <div className="mt-3 ml-[24px]">
            {" "}
            <span className="text-[24px] font-sans text-black">
              Sales Overview
            </span>
          </div>
          <div className="flex space-x-36 pl-[60px] mt-[24px]">
            <img src={Sales} alt="" />
            <img src={Revenue} alt="" />
            <img src={Profit} alt="" />
            <img src={Cost} alt="" />
          </div>
          <div className="flex flex-row mt-[18px] text-gray-600">
            <div className="ml-[20px] space-x-8">
              {" "}
              <span>$ 832</span>
              <span>Sales</span>
            </div>
            <div className="ml-[40px] space-x-10">
              {" "}
              <span>$ 18,300</span>
              <span>Revenue</span>
            </div>
            <div className="ml-[50px] space-x-6">
              <span>$ 868</span>
              <span>Profit</span>
            </div>
            <div className="ml-[50px] space-x-8">
              {" "}
              <span>$ 17,432</span>
              <span>Cost</span>
            </div>
          </div>
        </div>

        <div className="w-[384px] h-[163px] bg-blue-50 rounded-lg">
          <div className="mt-1 ml-4">
            {" "}
            <span className="text-[24px] text-black">Inventory Summary</span>
          </div>
          <div className="flex space-x-48 pl-[60px] mt-[20px]">
            <img src={Quality} alt="" />
            <img src={Location} alt="" />
          </div>
          <div className="mt-[14px] text-gray-600">
            <div className="flex justify-between ml-[60px] mr-[70px]">
              {" "}
              <span>868</span>
              <span>200</span>
            </div>
            <div className="flex justify-between ml-6 mr-8">
              {" "}
              <p>Quantity in Hand</p>
              <p className="">To be received</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] gap-6 ">
        <div className="w-[690px] h-[163px] bg-blue-50 rounded-lg">
          <div className="ml-[24px] mt-3">
            <span className="text-[24px] text-black">Purchase Overview</span>
          </div>
          <div className="flex space-x-36 pl-[60px] mt-[24px]">
            <img src={Purchase} alt="" />
            <img src={Cost} alt="" />
            <img src={Cancel} alt="" />
            <img src={Profit} alt="" />
          </div>
          <div className="flex flex-row mt-[18px] text-gray-600">
            <div className="ml-[20px] space-x-8">
              {" "}
              <span>82</span>
              <span>Purchase</span>
            </div>
            <div className="ml-[40px] space-x-10">
              {" "}
              <span>$ 18,300</span>
              <span>Cost</span>
            </div>
            <div className="ml-[80px] space-x-10">
              <span>5</span>
              <span>Cancel</span>
            </div>
            <div className="ml-[50px] space-x-8">
              {" "}
              <span>$ 17,432</span>
              <span>Return</span>
            </div>
          </div>
        </div>

        <div className="w-[384px] h-[163px] bg-blue-50 rounded-lg">
          <div className="mt-[4px] ml-4">
            {" "}
            <span className="text-[24px] text-black">Product Summary</span>
          </div>
          <div className="flex space-x-44 pl-[60px] mt-[20px]">
            <img src={Supplier} alt="" />
            <img src={Category} alt="" />
          </div>
          <div className="mt-[14px] text-gray-600">
            <div className="flex justify-between ml-16 mr-24">
              {" "}
              <p>31</p>
              <p>21</p>
            </div>
            <div className="flex justify-between ml-4 mr-4">
              {" "}
              <p>Number of Suppliers</p>
              <p>Number of Categories</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] gap-6">
        <div className="w-[690px] h-[360px] bg-blue-50 rounded-lg">
          <div className="mt-[8px] ml-[24px]">
            {" "}
            <span className="text-[24px] text-black">Sales & Purchase</span>
            <div>
              <BasicBars />
            </div>
          </div>
        </div>

        <div className="w-[385px] h-[360px] bg-blue-50 rounded-lg">
          <div className="mt-1 ml-4">
            {" "}
            <span className="text-[24px] text-black">Order Summary</span>
            <div>
              <BasicArea />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] gap-6">
        <div className="w-[690px] h-[309px] bg-blue-50 rounded-lg">
          <div className="flex justify-between ml-4 mt-[8px]">
            {" "}
            <p className="text-[24px] text-black">Top Selling Stock</p>
            <button className="hover:bg-gray-100 w-[80px] h-[28px] rounded-md mr-4 mt-2">
              <p className="text-center text-blue-500 text-14">See All</p>
            </button>
          </div>
        </div>

        <div className="w-[385px] h-[309px] bg-blue-50 rounded-lg">
          <div className="flex justify-between ml-3 mt-[10px]">
            {" "}
            <p className="text-[24px] text-black">Low Quantity Stock</p>
            <button className="hover:bg-gray-100 w-[80px] h-[28px] rounded-md mr-4 mt-2">
              <p className="text-center text-blue-500 text-14">See All</p>
            </button>
          </div>
          <div className="flex mt-[14px] ml-2">
            <img src={Product1} alt="" />
            <div className="flex flex-col ml-[10px] mt-[10px]">
              <span className="font-bold">Tata Salt</span>
              <span className="text-gray-300">
                Remaining Quantity : 10 Packet
              </span>
            </div>
            <button className="bg-red-200 w-[38px] h-[22px] rounded-full ml-[30px] mt-[24px]">
              <p className="text-center text-red-600 text-[12px]">Low</p>
            </button>
          </div>
          <div className="flex mt-[14px] ml-2">
            <img src={Product1} alt="" />
            <div className="flex flex-col ml-[10px] mt-[10px]">
              <span className="font-bold">Lays</span>
              <span className="text-gray-300">
                Remaining Quantity : 10 Packet
              </span>
            </div>
            <button className="bg-red-200 w-[38px] h-[22px] rounded-full ml-[30px] mt-[24px]">
              <p className="text-center text-red-600 text-[12px]">Low</p>
            </button>
          </div>
          <div className="flex mt-[14px] ml-2">
            <img src={Product1} alt="" />
            <div className="flex flex-col ml-[10px] mt-[10px]">
              <span className="font-bold">Lays</span>
              <span className="text-gray-300">
                Remaining Quantity : 10 Packet
              </span>
            </div>
            <button className="bg-red-200 w-[38px] h-[22px] rounded-full ml-[30px] mt-[24px]">
              <p className="text-center text-red-600 text-[12px]">Low</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import Cost from "../../assets/icons/Cost.svg";
// import Sales from "../../assets/icons/Sales.svg";
// import Revenue from "../../assets/icons/Revenue.svg";
// import Profit from "../../assets/icons/Profit.svg";

// interface SalesCardProps {
//   // title: string;
//   image: string;
//   price: string;
//   name: string;
// }

// function SalesCard({ image, price, name }: SalesCardProps) {
//   return (
//     <div>
//       <div className="w-[690px] h-[163px] bg-blue-400">
//         <div className="mt-4 ml-[24px]">
//           {" "}
//           <span className="text-[24px] text-black mt-4">Sales Overview</span>
//         </div>
//         <div className="space-x-36 pl-[60px] mt-[24px]">
//           <img src={image} alt="" />
//         </div>
//         <div className="mt-[18px] text-gray-600">
//           <div className="ml-[20px] space-x-8">
//             {" "}
//             <span>{price}</span>
//             <span>{name}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function DashboardPage() {
//   const sales = [
//     {
//       image: Sales,
//       price: "$ 832",
//       name: "Sales",
//     },
//     {
//       image: Revenue,
//       price: "$ 18,300",
//       name: "Revenue",
//     },
//     {
//       image: Profit,
//       price: "$ 868",
//       name: "Profit",
//     },
//     {
//       image: Cost,
//       price: "$ 832",
//       name: "Cost",
//     },
//   ];

//   return (
//     <div>
//       {sales.map((sale, index) => (
//         <SalesCard
//           key={index}
//           image={sale.image}
//           price={sale.price}
//           name={sale.name}
//         />
//       ))}
//     </div>
//   );
// }
