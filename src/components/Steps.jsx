"use client";
import { CustomInput } from ".";
import { CiImageOn } from "react-icons/ci";
import { InputError } from "./InputError";

import { useState } from "react";

export const FirstStep = ({ handleOnChange, errors }) => {
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        Title="First name"
        Id="firstName"
        name="firstName"
        Types="text"
        ErrorText="First name cannot be blank."
        handleOnChange={handleOnChange}
        errors={errors.firstName}
      />
      <CustomInput
        Title="Last name"
        Id="lastName"
        name="lastName"
        Types="text"
        ErrorText="Last name cannot be blank."
        handleOnChange={handleOnChange}
        errors={errors.lastName}
      />
      <CustomInput
        Title="Username"
        Id="userName"
        name="userName"
        Types="text"
        ErrorText="Username cannot be blank."
        handleOnChange={handleOnChange}
        errors={errors.userName}
      />
    </div>
  );
};

export const SecondStep = ({ handleOnChange, errors }) => {
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        Title="Email"
        name="email"
        Id="email"
        Types="email"
        handleOnChange={handleOnChange}
        errors={errors.email}
        ErrorText="Please provide a valid email address."
      />
      <CustomInput
        Title="Phone number"
        Id="phonenumber"
        name="phoneNumber"
        Types="tel"
        handleOnChange={handleOnChange}
        errors={errors.phoneNumber}
        ErrorText="Please enter a valid phone number."
      />
      <CustomInput
        Title="Password"
        Id="password"
        name="password"
        Types="password"
        handleOnChange={handleOnChange}
        errors={errors.password}
        ErrorText="Password must include letters and numbers."
      />
      <CustomInput
        Title="Confirm password"
        Id="confirmpassword"
        name="confirmPassword"
        handleOnChange={handleOnChange}
        errors={errors.confirmPassword}
        Types="password"
        ErrorText="Passwords do not match. Please try again."
      />
    </div>
  );
};

export const ThirdStep = ({ handleOnChange, errors }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }

    handleOnChange(event);
  };

  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        Title="Date of birth"
        Id="dateofbirth"
        name="dateOfBirth"
        Types="date"
        handleOnChange={handleOnChange}
        errors={errors.dateOfBirth}
        ErrorText="Please select a date."
      />

      {/* File input for profile image */}
      <div className="relative gap-3 flex flex-col">
        <input
          type="file"
          id="img"
          name="profileImage"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />
        <div className="h-[180px] bg-gray-200 border-none flex flex-col items-center justify-center gap-2">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile"
              className="w-[416px] h-[180px]  object-contain"
            />
          ) : (
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 flex items-center justify-center w-10  h-10  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z"
                    fill="#202124"
                  />
                </svg>
              </div>

              <label
                htmlFor="img"
                className="cursor-pointer text-black text-[14px] font-medium"
              >
                Add image
              </label>
            </div>
          )}
        </div>
        {errors.profileImage && (
          <InputError ErrorText="Image cannot be blank" />
        )}
      </div>
    </div>
  );
};

export const FourthStep = () => {
  return <div></div>;
};
