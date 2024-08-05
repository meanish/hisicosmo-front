import Link from "next/link";
import { Login_Description_Section } from "./login_container";

const Register_Container = () => {
  return (
    <div className="flex gap-14 p-14">
      <Login_Description_Section
        title={`Sign up today to unlock
exclusive perks!`}
      />
      <Register_Form />
    </div>
  );
};

export default Register_Container;

export const Register_Form = () => {
  return (
    <form className="w-1/2">
      <h2 className="font-bold text-3xl mb-6">Register an account</h2>
      <div className="input_field w-full">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            className="px-5 py-4 border rounded-md max-w-[480px] w-full"
          />{" "}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="px-5 py-4 border rounded-md max-w-[480px] w-full"
          />
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="px-5 py-4 border rounded-md max-w-[480px] w-full"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="px-5 py-4 border rounded-md max-w-[480px] w-full"
          />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            className="px-5 py-4 border rounded-md max-w-[480px] w-full"
          />
        </div>
      </div>
      <button
        type="submit"
        className="my-5 w-full py-5 bg-primary_blue text-lg text-white max-w-[480px] rounded-md"
      >
        REGISTER NEW ACCOUNT
      </button>

      <div className="text-center max-w-[480px]">
        <span className="text-sm font-bold">Already a user ? </span>
        <Link className="text-sm font-bold text-primary_blue" href={"#"}>
          Login
        </Link>
      </div>
    </form>
  );
};
