"use client"
import { useSelector } from "react-redux"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog"
import { closeLogintab } from "../../lib/store/slices/loginStatusSlice"
import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import { LoginvalidationSchema } from "@/schemas/schema";
import { Input_Error_Text } from "../login_and_register/commonComponents";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/images/logo_blue.png"
import toast from "react-hot-toast";

const LoginModal = () => {
    const loginactive = useSelector((state) => state.loginFormStatus.loginactive)
    const dispatch = useDispatch()
    const initialValues = {
        email: "admin@system.com",
        password: "admin2024",
    };

    const router = useRouter();
    return (<>
        <Dialog open={loginactive} onOpenChange={() => dispatch(closeLogintab())} >
            <DialogContent className="max-w-[500px] bg-gray-100">
                <DialogHeader>
                    <DialogDescription className="flex flex-col justify-center my-0">

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
                                        dispatch(closeLogintab())
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
                                <form onSubmit={handleSubmit} className=" w-full">
                                    <h2 className="font-bold text-3xl text-primary_gold">Login to the system</h2>
                                    <div className="flex justify-center my-4  relative overflow-hidden w-full"> <span className="flex justify-center h-20 w-64"><Image src={logo} height={100} width={100} alt="logo" /></span></div>
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

                    </DialogDescription>
                </DialogHeader>

            </DialogContent>
        </Dialog>
    </>)
}


export default LoginModal