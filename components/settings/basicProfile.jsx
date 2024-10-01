"use client"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInputField } from "@/lib/store/slices/userDataSlice";
import { ImageWithFallback } from "../ui/imageWithFallBack";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

const BasicProfile = ({ className, token }) => {
  const userData = useSelector((state) => state.manageUserData.userData);
  const [enableEdit, setEnableEdit] = useState(false);
  const dispatch = useDispatch();
  const { email, username, phoneNumber, address, dob, id, featured_image } =
    userData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInputField({ name: name, value: value }));
  };

  const handleProfileSubmit = async () => {
    try {
      // app\api\userData\updateUserData\route.js
      const response = await fetch("/api/userData/updateUserData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Attach Bearer token
        },
        body: JSON.stringify({
          username,
          phoneNumber,
          dob,
          address,
          featured_image,
        }), // Send the updated user data
      });

      if (!response.ok) {
        throw new Error("Failed to update profile.");
      }

      const result = await response.json();
      console.log("Profile updated successfully", result);
      setEnableEdit(false); // Disable editing after successful submission
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className={cn(`profile-form w-full bg-white p-5`, className)}>
      <div className="user-info flex gap-6 items-center">
        <ImageWithFallback
          src={featured_image}
          width={160}
          height={160}
          alt="profile-image"
          className="size-40 object-cover rounded-full border "
        />
        <div className="names-email">
          <h1 className="font-medium text-2xl tracking-wide leading-9">
            {username}
          </h1>
          <p className="text-lg font-medium text-black tracking-wide">
            {email}
          </p>
        </div>
      </div>

      <form className=" max-w-lg w-1/2 min-h-[609px] p-7">
        <h3 className="text-xl font-medium text-gray-600 tracking-wide leading-loose mt-6">
          User Details
        </h3>
        <fieldset
          disabled={!enableEdit}
          className="input-fields w-full grid gap-4"
        >
          <label htmlFor="fullname" className="w-full">
            <p className="text-sm font-medium leading-tight mb-2 text-gray-600">
              Full Name
            </p>
            <input
              type="text"
              name="username"
              value={username || ""}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="p-4 text-sm w-full border border-gray-400 rounded-md bg-gray-100 placeholder-gray-700 text-gray-700"
            />
          </label>

          <label htmlFor="phoneNumber" className="w-full">
            <p className="text-sm font-medium leading-tight mb-2 text-gray-600">
              Phone Number
            </p>
            <input
              type="number"
              name="phoneNumber"
              onChange={handleInputChange}
              value={phoneNumber || ""}
              placeholder="Phone Number"
              className="p-4 text-sm w-full border border-gray-400 rounded-md bg-gray-100 placeholder-gray-700 text-gray-700"
            />
          </label>

          <label htmlFor="address" className="w-full">
            <p className="text-sm font-medium leading-tight mb-2 text-gray-600">
              Address
            </p>
            <input
              type="text"
              value={address || ""}
              name="address"
              onChange={handleInputChange}
              placeholder="Address"
              className="p-4 text-sm w-full border border-gray-400 rounded-md bg-gray-100 placeholder-gray-700 text-gray-700"
            />
          </label>

          <label htmlFor="DOB" className="w-full">
            <p className="text-sm font-medium leading-tight mb-2 text-gray-600">
              Date Of Birth
            </p>
            <input
              type="date"
              value={dob || ""}
              name="dob"
              onChange={handleInputChange}
              placeholder="Date Of Birth"
              className="p-4 text-sm w-full border border-gray-400 rounded-md bg-gray-100 placeholder-gray-700 text-gray-700"
            />
          </label>
        </fieldset>

        {enableEdit ? (
          <div className="flex gap-2 justify-between">
            <button
              type="button"
              onClick={handleProfileSubmit}
              className="bg-primary_blue select-none text-white hover:bg-opacity-70 active:bg-white active:border-primary_blue active:border active:text-black rounded-md py-3 mt-8 h-12 w-64 font-normal leading-normal tracking-wide "
            >
              SAVE CHANGES
            </button>
            <button
              onClick={() => setEnableEdit(false)}
              className="select-none  hover:bg-gray-400 active:bg-primary_blue active:text-white bg-white border-primary_blue border text-black rounded-md py-3 mt-8 h-12 w-64 font-normal leading-normal tracking-wide "
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setEnableEdit(true)}
            className="bg-primary_blue select-none text-white hover:bg-opacity-70 active:bg-white active:border-primary_blue active:border active:text-black rounded-md py-3 mt-8 h-12 w-64 font-normal leading-normal tracking-wide "
          >
            EDIT PROFILE
          </button>
        )}
      </form>
    </div>
  );
};

export default BasicProfile;
