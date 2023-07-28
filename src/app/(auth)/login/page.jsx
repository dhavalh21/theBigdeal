"use client";

import { useState } from "react";
import LoginImg from "@/assets/images/login-img.png";
import InputField from "@/components/forms/InputField";
import OtpInput from "./OtpInput";
import NavLink from "@/components/NavLink";
import { ROUTES_PATH } from "@/helpers/constants/constants.helper";
import Image from "next/image";
// import Input from "@/components/forms/Input";

function LoginPage() {
  const [otpValue, setOtpValue] = useState("");
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-20 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-7/12 mt-0   md:mt-0">
            <h2 className="text-gray-900 title-font mb-5 mx-auto text-4xl font-bold	">
              Log In
            </h2>
            <div className="relative mb-4">
              <InputField
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-5/12 rounded-xl border focus:border-indigo-500 focus: text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3 mx-auto border-purple-700 "
                placeholder="Email*"
              />
            </div>
            <div className=" mx-auto mb-10 lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-5/12 mt-0   md:mt-0">
              {" "}
              <p className="text-sm font-extrabold text-themeColor mb-2 ml-2">
                ENTER OTP
              </p>
              <OtpInput length={4} onChange={(e) => setOtpValue(e)} />
              <p className=" text-sm text-themeColor font-extrabold ml-[35px] mt-1">
                <span className="text-grey">Didn’t receive the OTP?</span>{" "}
                RESEND CODE
              </p>
            </div>
            <button className="text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-5/12 mx-auto rounded-full font-medium bg-themeColor ">
              Send OTP
            </button>
            <NavLink
              href={ROUTES_PATH.REGISTRATION}
              className="mt-3 mx-auto font-bold text-xl text-themeColor"
            >
              Sign Up for free
            </NavLink>
          </div>
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex mt-1 justify-center">
            <Image src={LoginImg} height={"265px"} width={"265px"} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
