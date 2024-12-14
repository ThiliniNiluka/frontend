import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import line from "../../assets/icons/line.svg";
import FB from "../../assets/icons/fb.svg";
import GOOGLE from "../../assets/icons/google.svg";
import Girl from "../../assets/icons/girl.jpeg";

interface PasswordRequirement {
  regex: RegExp;
}

interface FormData {
  password: string;
}

export default function RegisterPage() {
  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // const handleMouseUpPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phoneNumber: "",
  //   password: "",
  //   confirmpassword: "",
  // });

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfrimPassword, setShowConfirmPassword] = React.useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    return passwordRegex.test(password);
  };

  const passwordRequirements = [
    { regex: /.{8,}/ },
    {
      regex: /^(?=(.*[^A-Za-z0-9]){2,})/,
    },
    {
      regex: /^(?=(.*[A-Z]){2,})/,
    },
    {
      regex: /^(?=(.*[a-z]){2,})/,
    },
    {
      regex: /^(?=(.*\d){2,})/,
    },
  ];

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;
    setEmail(value);

    if (!validateEmail(email)) {
      setEmailError("Incorrect email. Please try again.");
    } else {
      setEmailError("");
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value as string;
      setPassword(value);

      if (!validatePassword(password)) {
        setPasswordError("Wrong password. Please check and retry.");
      } else {
        setPasswordError("");
      }
    };
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value as string;
    setConfirmPassword(value);

    if (!validatePassword(confirmPassword)) {
      setConfirmPasswordError("Wrong password. Please check and retry.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const isPasswordValid = (
    requirement: PasswordRequirement,
    formData: FormData
  ): boolean => {
    return requirement.regex.test(formData.password);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col flex-wrap w-full h-full md:flex-row lg:flex-row">
        <div className="flex md:w-full lg:w-2/6 lg:h-screen">
          <img src={Girl} alt="" />
        </div>
        <div className="z-10 flex flex-col w-[500px] max-w-[560px] lg:w-[560px] mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md relative -top-16 lg:static xl:static">
          <span className="font-semibold text-[40px] -mb-[5px]">Sign up</span>
          <p className="text-[16px] ">
            Let’s get you all st up so you can access your personal account.
          </p>

          <form className="mt-4 space-y-4">
            <div>
              <div className="flex-wrap">
                <div className="flex flex-row gap-[20px]">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    className="h-[56px] w-full bg-gray-50 "
                    // onChange={handleChange}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    className="h-[56px] w-full bg-gray-50 "
                  />
                </div>
              </div>
              <div className="flex-wrap mt-[10px]">
                <div className="flex flex-row gap-[20px]">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className="h-[56px] w-full bg-gray-50 "
                    onChange={handleEmailChange}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    className="h-[56px] w-full bg-gray-50"
                    // onChange={handlePhoneChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <FormControl variant="outlined" className="h-[56px] w-full">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-password-input"
                    className="h-[56px] w-full bg-gray-50"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, password: e.target.value })
                    // }
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <FormControl variant="outlined" className="h-[56px] w-full">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-password-input"
                    className="h-[56px] w-full bg-gray-50"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={showConfrimPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showConfrimPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                          onMouseUp={handleMouseUpConfirmPassword}
                          edge="end"
                        >
                          {showConfrimPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    label="Password"
                  />
                </FormControl>
              </div>
            </div>
            <div className="flex justify-between">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I agree to all the Terms and Privacy Policies"
              />
              <p className="text-[14px] text-red-400 mt-[10px] hover:underline cursor-pointer font-medium">
                <a href="/password">Forgot Password</a>
              </p>
            </div>
            <Button variant="contained" className="w-full h-[48px]">
              <p className="text-[14px]">Create account</p>
            </Button>
            <div className="flex gap-[5px] justify-center">
              <p className="text-[14px] font-medium">
                Already have an account?
              </p>
              <p className="text-red-400 text-[14px] font-semibold  hover:underline cursor-pointer">
                <a href="/login">Login</a>
              </p>
            </div>
            <div className="flex justify-center -gap-3">
              <img src={line} alt="" />
              <p className="text-[14px]">Or Sign up with</p>
              <img src={line} alt="" />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                className="w-[512px] h-[48px]"
                onClick={() => alert("Sign up with Facebook")}
              >
                <img src={FB} alt="" />
              </Button>
              <Button
                variant="outlined"
                className="w-[512px] h-[48px]"
                onClick={() => alert("Sign up with Google")}
              >
                <img src={GOOGLE} alt="" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
