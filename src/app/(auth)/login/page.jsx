"use client";

import LoginImg from "@/assets/images/login-img.png";
import InputField from "@/components/forms/InputField";
import NavLink from "@/components/NavLink";
import { ROUTES_PATH } from "@/helpers/constants/constants.helper";
import Image from "next/image";
import { useState } from "react";
import OtpInput from "./OtpInput";
import Link from "next/link";

function LoginPage() {
  const [otpValue, setOtpValue] = useState("");
  return (
    <section className="text-gray-600 body-font container mx-auto flex flex-wrap items-center h-[100vh]">
      <div className="w-1/2 flex justify-center items-center flex-col max-tablet:w-full h-full">
        {/* <img
          alt="logo"
          src={Logo}
          height={"150px"}
          width={"150px"}
          className="text-center mx-auto mb-5 hidden max-tablet:block "
        /> */}
        <h2 className="text-gray-900 title-font mb-5 mx-auto text-3xl font-black">
          Sign Up
        </h2>
        <div className="relative mb-4 w-[280px] max-w-[100%]">
          <InputField
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-xl border focus:border-indigo-500 focus: text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3 mx-auto border-purple-700 "
            placeholder="Email*"
          />

          <div className=" mx-auto mb-10 lg:w-2/6 md:w-1/2 rounded-lg flex flex-col md:ml-auto w-full mt-0   md:mt-0">
            {" "}
            <p className="text-sm font-extrabold text-themeColor mb-2  mt-4">
              ENTER OTP
            </p>
            <div className="relative">
              <OtpInput length={4} onChange={(e) => setOtpValue(e)} />
            </div>
            <p className=" text-sm text-themeColor font-extrabold   mt-1">
              <span className="text-grey">Didn’t receive the OTP?</span> RESEND
              CODE
            </p>
          </div>
          <button className="text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-5/12 mx-auto rounded-full font-medium bg-themeColor w-full">
            Send OTP
          </button>
          <div className="text-center">
            <Link
              href={ROUTES_PATH.REGISTRATION}
              className="mt-5 mx-auto font-bold text-lg text-themeColor"
            >
              Sign Up for free
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-end h-full max-tablet:hidden">
        <Image
          src={LoginImg}
          alt="logo"
          className="h-[80%] max-h-[800px] w-auto"
        />
      </div>
    </section>
  );
}

export default LoginPage;
