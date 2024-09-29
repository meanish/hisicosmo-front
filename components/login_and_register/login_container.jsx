"use client";
import { LoginvalidationSchema } from "@/schemas/schema";
import { Formik } from "formik";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Input_Error_Text } from "./commonComponents";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
  const initialValues = {
    email: "test100@gmail.com",
    password: "",
  };

  const router = useRouter();


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginvalidationSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {


          const res = await fetch("/api/login", {
            body: JSON.stringify({ ...values }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST'
          })

          const data = await res.json();
          if (data?.status === 200) {
            toast.success("Successfully Logged In!");
            router.push("/")
            window.location.reload(false)
          } else if (res.status === 400) {
            setErrors(data.errors);
          }
        } catch (error) {
          throw new Error(error, "Server Error");
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className=" w-full lg:w-1/2">
          <h2 className="font-bold text-3xl mb-6">Login</h2>
          <div className="input_field w-full">
            <div className="flex flex-col gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Email"
                  className={` ${errors.email && touched.email && " border-red-600"
                    } px-5 py-4 border rounded-md max-w-[480px] w-full`}
                />
                {errors.email && touched.email && (
                  <Input_Error_Text
                    className="text-sm text-red-600 font-semibold"
                    errors={errors.email}
                  />
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="Password"
                  className={` ${errors.password && touched.password && " border-red-600"
                    } px-5 py-4 border rounded-md max-w-[480px] w-full`}
                />
                {errors.password && touched.password && (
                  <Input_Error_Text
                    className="text-sm text-red-600 font-semibold"
                    errors={errors.password}
                  />
                )}
              </div>
            </div>

            <Link
              className="text-primary_blue block text-sm font-normal mt-3"
              href={"#"}
            >
              Forgot password ?
            </Link>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className={`my-5 w-full py-5 bg-primary_blue  text-lg text-white max-w-[480px] rounded-md disabled:bg-opacity-55 disabled:pointer-events-none select-none hover:opacity-80 active:opacity-100 active:bg-white active:text-black active:border-primary_blue border-2`}
          >
            Login
          </button>

          <div>
            <span className="text-sm font-bold">New To Hisi Cosmetic ? </span>
            <Link
              className="text-sm hover:underline active:text-primary_gold font-bold text-primary_blue"
              href={"/auth/register"}
            >
              Register With Us
            </Link>
          </div>
        </form>
      )}
    </Formik>
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
