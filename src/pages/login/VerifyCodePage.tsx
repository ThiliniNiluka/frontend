import { Button, TextField } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Girl from "../../assets/icons/girl.jpeg";
import Arrow from "../../assets/icons/backarrow.svg";

export default function VerifyCodePage() {
  return (
    <div className="">
      <div className="flex flex-col flex-wrap w-full h-full md:flex-row lg:flex-row">
        <div className="flex md:w-full lg:w-2/6 lg:h-screen">
          <img src={Girl} alt="" />
        </div>

        <div className="z-10 flex flex-col w-[500px] max-w-[560px] lg:w-[560px] mx-auto space-y-6 p-4 mt-[20px] bg-white rounded-lg shadow-md relative -top-16 lg:static xl:static">
          <p className="flex text-blue-3000 hover:blue-300">
            <img src={Arrow} alt="" />
            <a href="/login" className="flex gap-2 text-sm sm:text-base">
              Back to login
            </a>
          </p>
          <span className="font-semibold text-[40px]">Verify code</span>
          <p className="text-[16px]">
            An authentication code has been sent to your email.
          </p>

          <form className="mt-4 space-y-4">
            <div className="flex flex-col pt-[18px]">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="h-[56px] w-full bg-gray-50 "
              />
            </div>

            <div className="flex gap-2">
              <p>Didn’t receive a code?</p>
              <p className="text-red-600">Resend</p>
            </div>

            <div className="pt-[20px]">
              <Button variant="contained" className="w-full h-[48px] ">
                <p className="text-[14px]">Verify</p>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
