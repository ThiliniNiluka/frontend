import { Button } from "@mui/material";
import Filter from "../../assets/icons/Filters.svg";

export default function Suppliers() {
  return (
    <div className="flex flex-col h-full pt-2 pb-2 pl-2 pr-2 mb-6 ml-12 overflow-x-hidden border-2 border-blue-700 rounded-md -mt-14">
      <div className="justify-items-center">
        <div className="md:w-[1096px] sm:w-[950px] h-[816px] rounded-md bg-blue-50">
          <div className="">
            <div className="flex ml-[20px]">
              {" "}
              <span className="text-[24px] text-gray-800 pt-3">Suppliers</span>
              <div className="flex ml-[540px] space-x-2 mt-6">
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
