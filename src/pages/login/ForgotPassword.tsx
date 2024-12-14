import { Button, TextField } from "@mui/material";
import React from "react";
import line from "../../assets/icons/line.svg";
import FB from "../../assets/icons/fb.svg";
import GOOGLE from "../../assets/icons/google.svg";
import Girl from "../../assets/icons/girl.jpeg";

export default function ForgotPassword() {
  return (
    <div className="">
      <div className="flex flex-col flex-wrap w-full h-full md:flex-row lg:flex-row">
        <div className="flex md:w-full lg:w-2/6 lg:h-screen">
          <img src={Girl} alt="" />
        </div>

        <div className="z-10 flex flex-col w-[500px] max-w-[560px] lg:w-[560px] mx-auto space-y-6 p-4 mt-[50px] bg-white rounded-lg shadow-md relative -top-16 lg:static xl:static">
          <span className="font-semibold text-[40px]">
            Forgot your password?
          </span>
          <p className="text-[16px]">
            Don’t worry, happens to all of us. Enter your email below to <br />{" "}
            recover your password
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
            <div className="pt-[20px]">
              <Button variant="contained" className="w-full h-[48px] ">
                <p className="text-[14px]">Submit</p>
              </Button>
            </div>
            <div className="flex justify-center gap-4 pt-[40px]">
              <img src={line} alt="" />
              <p className="text-[14px]">Or login with</p>
              <img src={line} alt="" />
            </div>
            <div className="flex gap-2 pt-[40px]">
              <Button variant="outlined" className="w-full h-[48px]">
                <img src={FB} alt="" />
              </Button>
              <Button variant="outlined" className="w-full h-[48px]">
                <img src={GOOGLE} alt="" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
