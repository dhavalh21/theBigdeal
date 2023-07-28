"use client";
 

import Logo from "@/assets/images/thebigdeal-logo.png";
import InputField from "@/components/forms/InputField";
import NavLink from "@/components/NavLink";
import { ROUTES_PATH } from "@/helpers/constants/constants.helper";
import Image from "next/image";

function Registration() {
  return (
    <section className="text-gray-600 body-font container mx-auto flex flex-wrap items-center h-[100vh]">
      <div className="w-1/2 flex justify-center items-center flex-col max-tablet:w-full h-full">
        <img
          alt="logo"
          src={Logo}
          height={"150px"}
          width={"150px"}
          className="text-center mx-auto mb-5 hidden max-tablet:block "
        />
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
            className="w-full rounded-xl border focus:border-indigo-800 focus: text-base outline-none text-gray-700 py-1 px-3 leading-8  duration-200 ease-in-out mb-3 mx-auto border-purple-900"
            placeholder="Name*"
          />

          <InputField
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-xl border focus:border-indigo-800 focus: text-base outline-none text-gray-700 py-1 px-3 leading-8  duration-200 ease-in-out mb-3 mx-auto border-purple-900"
            placeholder="Email Address*"
          />
          <button className="text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full mx-auto rounded-full font-medium bg-themeColor h-[45px]">
            Sign Up for free
          </button>
        </div>
        <NavLink
          href={ROUTES_PATH.LOGIN}
          className=" mt-3 mx-auto font-bold text-xl text-themeColor"
        >
          Login
        </NavLink>
      </div>
      <div className="w-1/2 flex justify-center items-center max-tablet:hidden">
        <Image src={Logo} height="400" width="400" alt="logo" />
      </div>
    </section>
  );
}

export default Registration;
