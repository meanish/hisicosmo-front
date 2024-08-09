"use client";
import Link from "next/link";
import { Login_Description_Section } from "./login_container";
import { Formik } from "formik";
import { RegisterValidationSchema } from "@/schemas/schema";
import { Input_Error_Text } from "./commonComponents";
import { useState } from "react";
import toast from "react-hot-toast";

const Register_Container = () => {
  return (
    <div className="flex gap-14 p-14">
      <Login_Description_Section
        title={`Sign up today to unlock exclusive perks!`}
      />
      <Register_Form />
    </div>
  );
};

export default Register_Container;

export const Register_Form = () => {
  const [registrationError, setRegistrationError] = useState(null);
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterValidationSchema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        try {
          const res = await fetch(
            `https://tranquilbytes.com/hisicosmetics/auth/register`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "content-type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );

          const data = await res.json();
          if (res.status === 201) {
            toast.success("Successfully Registered !");
          } else if (res.status === 400) {
            setErrors(data.errors);
          }
        } catch (error) {
          // setRegistrationError(error);
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
        <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
          <h2 className="font-bold text-3xl mb-6">Register an account</h2>
          <div className="input_field w-full">
            <div className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  id="username"
                  placeholder="Full Name"
                  className={` ${
                    errors.username && touched.username && " border-red-600"
                  } px-5 py-4 border rounded-md max-w-[480px] w-full`}
                />
                {errors.username && touched.username && (
                  <Input_Error_Text
                    className="text-sm text-red-600 font-semibold"
                    errors={errors.username}
                  />
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="Email"
                  className={` ${
                    errors.email && touched.email && " border-red-600"
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
                  type="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  id="phone"
                  placeholder="Phone Number"
                  className={` ${
                    errors.phone && touched.phone && " border-red-600"
                  } px-5 py-4 border rounded-md max-w-[480px] w-full`}
                />
                {errors.phone && touched.phone && (
                  <Input_Error_Text
                    className="text-sm text-red-600 font-semibold"
                    errors={errors.phone}
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
                  className={` ${
                    errors.password && touched.password && " border-red-600"
                  } px-5 py-4 border rounded-md max-w-[480px] w-full`}
                />
                {errors.password && touched.password && (
                  <Input_Error_Text
                    className="text-sm text-red-600 font-semibold"
                    errors={errors.password}
                  />
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  id="confirm_password"
                  placeholder="Confirm Password"
                  className={` ${
                    errors.confirm_password &&
                    touched.confirm_password &&
                    " border-red-600"
                  } px-5 py-4 border rounded-md max-w-[480px] w-full`}
                />
                {errors.confirm_password && touched.confirm_password && (
                  <Input_Error_Text
                    className="text-sm text-red-600 font-semibold"
                    errors={errors.confirm_password}
                  />
                )}
              </div>
            </div>

            {/* {registrationError && (
                <div className="max-w-[480px] mr-auto login-error text-center my-5 rounded ">
                  <span className="inline-block w-full  bg-red-200 border-l-4  border-red-700 rounded  text-xs p-4 md:text-sm md:p-6">
                    {registrationError}
                  </span>
                </div>
              )} */}

            <button
              disabled={isSubmitting}
              type="submit"
              className={`my-5 w-full py-5 bg-primary_blue  text-lg text-white max-w-[480px] rounded-md disabled:bg-opacity-55 disabled:pointer-events-none select-none hover:opacity-80 active:opacity-100 active:bg-white active:text-black active:border-primary_blue border-2`}
            >
              REGISTER NEW ACCOUNT
            </button>
          </div>

          <div className="text-center max-w-[480px] select-none">
            <span className="text-sm font-bold">Already a user ? </span>
            <Link
              className="text-sm hover:underline active:text-primary_gold font-bold text-primary_blue"
              href={"/login"}
            >
              Login
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};
