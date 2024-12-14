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
import { useNavigate } from "react-router";
import { login } from "../../redux/features/auth/authSlice";
// import { clientRootState, clientStoreDispatch } from "../../redux/store/store";
// import { useDispatch, useSelector } from "react-redux";
// import CustomCarousel from "../components/CustomCarousel";
// import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";

// const providers = [
//   { id: "facebook", name: "Facebook" },
//   { id: "google", name: "Google" },
//   { id: "credentials", name: "Email and Password" },
// ];

// const signIn: (provider: AuthProvider) => void = async (provider) => {
//   const promise = new Promise<void>((resolve) => {
//     setTimeout(() => {
//       console.log(`Sign in with ${provider.id}`);
//       resolve();
//     }, 500);
//   });
//   return promise;
// };

export interface LoginCredentials {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [showPassword, setShowPassword] = React.useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;
    setEmail(value);

    if (!validateEmail(email)) {
      setEmailError("Incorrect email. Please try again.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;
    setPassword(value);

    if (!validatePassword(password)) {
      setPasswordError("Wrong password. Please check and retry.");
    } else {
      setPasswordError("");
    }
  };

  const handleLoginClick = (event: React.FormEvent) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid) {
      setEmailError("Invalid email format.");
    }

    if (!isPasswordValid) {
      setPasswordError("Password must be at least 8 characters.");
    }

    if (!isEmailValid && isPasswordValid) {
      const credentials: LoginCredentials = { email, password };
      dispatchEvent(login(credentials));
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
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
          <span className="font-semibold text-[40px] -mb-[5px]">Login</span>
          <p className="text-[16px] ">
            Login to access your travelwise account
          </p>

          <form className="mt-4 space-y-4">
            <div className="flex flex-col gap-[20px]">
              {/* <SignInPage
                  signIn={signIn}
                  providers={providers}
                  sx={{
                    "& form > .MuiStack-root": {
                      marginTop: "2rem",
                      rowGap: "0.5rem",
                    },
                  }}
                /> */}
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                // className="h-[56px] w-full bg-gray-50 "
                className={`h-[56px] w-full bg-gray-50 ${
                  emailError ? "border-nagative-300" : ""
                }`}
                onChange={handleEmailChange}
              />
              <FormControl variant="outlined" className="h-[56px] w-full ">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-password-input"
                  type={showPassword ? "text" : "password"}
                  onChange={handlePasswordChange}
                  className={`h-[56px] w-full bg-gray-50 ${
                    passwordError ? "border-nagative-300" : ""
                  }`}
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
            </div>
            <div className="flex justify-between">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              <p className="text-[14px] text-red-400 mt-[10px] hover:underline cursor-pointer font-medium">
                <a href="/password">Forgot Password</a>
              </p>
            </div>
            <Button variant="contained" className="w-full h-[48px]">
              <p className="text-[14px]">login</p>
            </Button>
            <div className="flex gap-[5px] justify-center">
              <p className="text-[14px] font-medium">
                <a href="/register">Don’t have an account?</a>
              </p>
              <p className="text-red-400 text-[14px] font-semibold  hover:underline cursor-pointer">
                <a href="/register">Sing Up</a>
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <img src={line} alt="" />
              <p className="text-[14px]">Or login with</p>
              <img src={line} alt="" />
            </div>
            <div className="flex gap-2">
              <Button variant="outlined" className="w-full h-[48px]">
                <a href="/fb">
                  <img src={FB} alt="" />
                </a>
              </Button>
              <Button variant="outlined" className="w-full h-[48px]">
                <a href="/google">
                  <img src={GOOGLE} alt="/google" />
                </a>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
