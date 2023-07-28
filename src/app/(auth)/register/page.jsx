"use client";

import Logo from "@/assets/images/thebigdeal-logo.png";
import InputField from "@/components/forms/InputField";
import NavLink from "@/components/NavLink";
import { ROUTES_PATH } from "@/helpers/constants/constants.helper";
import Image from "next/image";

function RegisterPage() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="flex    mx-auto flex flex-wrap items-center">
          <div className="w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-7/12	 mt-10 md:mt-0">
            <h2 className="text-gray-900 title-font mb-5 mx-auto text-3xl font-bold	">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <InputField
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-5/12 rounded-xl border focus:border-indigo-800 focus: text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3 mx-auto border-purple-900"
                placeholder="Name*"
              />

              <InputField
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-5/12 rounded-xl border focus:border-indigo-800 focus: text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3 mx-auto border-purple-900"
                placeholder="Email Address*"
              />

              <InputField
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-5/12 rounded-xl border focus:border-indigo-800 focus: text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3 mx-auto border-purple-900"
                placeholder="India*"
              />
            </div>

            <button className="text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-5/12 mx-auto rounded-full font-medium bg-themeColor">
              Sign Up for free
            </button>
            <NavLink
              href={ROUTES_PATH.LOGIN}
              className=" mt-3 mx-auto font-bold text-xl text-themeColor"
            >
              Login
            </NavLink>
          </div>
          <div className="w-1/2 flex mt-1 justify-center">
            <Image src={Logo} height={"400px"} width={"400px"} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;
