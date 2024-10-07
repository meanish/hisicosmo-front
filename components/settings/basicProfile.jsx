"use client"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInputField } from "@/lib/store/slices/userDataSlice";
import { ImageWithFallback } from "../ui/imageWithFallBack";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import logo from "../../public/images/logo.png"
import Image from "next/image";
import toast from "react-hot-toast";



const BasicProfile = ({ className, token }) => {
  const userData = useSelector((state) => state.manageUserData.userData);
  const [enableEdit, setEnableEdit] = useState(false);
  const dispatch = useDispatch();
  const { email, username, phoneNumber, address, dob, id, featured_image: stored_image } =
    userData;

  const [featuredImage, setFeaturedImage] = useState(null)
  const [localImage, setLocalImage] = useState(null)


  console.log(localImage)


  const handleProfileSubmit = async () => {
    try {
      // app\api\userData\updateUserData\route.js


      const formData = new FormData();

      for (const key in userData) {
        if (userData.hasOwnProperty(key)) {
          formData.append(key, userData[key]);
        }
      }

      if (featuredImage) {
        formData.append(
          "featured_image",
          featuredImage,
          featuredImage.name
        );
      }

      const response = await fetch("/api/userData/updateUserData", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
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


  const handleChange = (e) => {
    let name = e.target.name;
    var value;


    if (name === "featured_image") {
      const file = e.target.files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        toast.error("File size cannot exceed 2 MB");
        e.target.value = "";
      } else {
        if (file) {
          setLocalImage(URL.createObjectURL(e.target.files[0]));
          setFeaturedImage(e.target.files[0]);

          if (!file.type.startsWith("image")) {
            alert("Please select a valid image");
            return;
          }
        }
      }
    } else {
      console.log("Called")
      value = e.target.value;
      dispatch(updateInputField({ name: name, value: value }));
    }
  };


  return (
    <div className={cn(`profile-form w-full bg-white p-5`, className)}>
      <div className="user-info flex gap-6 items-center">
        <div className="subject_img flex items-center justify-center gap-5">
          <div className="image_Section relative">

            {localImage ? (
              <Image
                src={localImage}
                width={160}
                height={160}
                alt="profile-image"
                className="size-40 object-cover relative rounded-full border "
              ></Image>
            ) : (
              <Image
                src={stored_image || logo}
                width={160}
                height={160}
                alt="profile-image"
                className="size-40 object-cover relative rounded-full border "
              ></Image>
            )
            }

            <div className={`input-image px-4 border absolute top-14 left-10 opacity-0 ${enableEdit ? " opacity-100" : ""}`}>
              <input
                type="file"
                id="image-file"
                accept="image/*"
                style={{ display: "none" }}
                name="featured_image"
                onChange={handleChange}
              />
              <label
                htmlFor="image-file"
                title="change profile"
                className="flex justify-start gap-1  p-2 rounded-sm text-white hover:text-black hover-text-bold"
              >
                <Plus color="#eee" />
              </label>
            </div>
          </div>
          <div className="names-email text-gray-700">
            <h1 className="font-medium text-2xl tracking-wide leading-9">
              {username}
            </h1>
            <p className="text-lg font-medium  tracking-wide">
              {email}
            </p>
          </div>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
