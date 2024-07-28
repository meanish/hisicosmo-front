import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login_Container = () => {
  return (
    <div className="flex gap-14 p-14">
      <Login_Description_Section title={"Sign up and reap the benefits"} />
      <Login_Form />
    </div>
  );
};

export default Login_Container;

export const Login_Form = () => {
  return (
    <div className="w-1/2">
      <h2 className="font-bold text-3xl mb-6">Login</h2>
      <div className="input_field w-full">
        <div className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="px-5 py-4 border rounded-md max-w-[480px] w-full"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="px-5 py-4 border rounded-md max-w-[480px] w-full"
          />
        </div>

        <Link
          className="text-primary_blue block text-sm font-normal mt-3"
          href={"#"}
        >
          Forgot password ?
        </Link>
      </div>
      <button className="my-5 w-full py-5 bg-primary_blue text-lg text-white max-w-[480px] rounded-md">
        Login
      </button>

      <div>
        <span className="text-sm font-bold">New To Hisi Cosmetic ? </span>
        <Link className="text-sm font-bold text-primary_blue" href={"#"}>
          Register With Us
        </Link>
      </div>
    </div>
  );
};

export const Login_Description_Section = ({ title, list }) => {
  return (
    <div className="max-w-[511px] pr-20 border-r-2">
      <h2 className="text-3xl font-bold text-primary_blue">{title}</h2>
      <ul className="benefit_points p-4 flex flex-col gap-3">
        {Array(4)
          .fill(null)
          .map((point, index) => (
            <li key={index}>Earn Reward Points with every purchase</li>
          ))}
      </ul>
      <Login_With_Google_Btn />
    </div>
  );
};

export const Login_With_Google_Btn = () => {
  return (
    <button className="google_login flex items-center justify-center gap-2 w-full border-2 mt-4 rounded-md p-4">
      <FcGoogle />
      <span>Login With Google</span>
    </button>
  );
};
