import { CustomInput } from ".";
import { CiImageOn } from "react-icons/ci";
import { InputError } from "./InputError";
import { use } from "react";

export const FirstStep = ({ handleOnChange, isError }) => {
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        Title="First name"
        Id="firstName"
        name={"firstName"}
        Types="text"
        ErrorText="First name cannot be blank."
        handleOnChange={handleOnChange}
        isError={isError}
      />
      <CustomInput
        Title="Last name"
        Id="lastName"
        name={"lastName"}
        Types="text"
        ErrorText="Lastname name cannot be blank."
        handleOnChange={handleOnChange}
        isError={isError}
      />
      <CustomInput
        Title="Username"
        Id="userName"
        name={"userName"}
        Types="text"
        ErrorText="This username is already taken. Please choose another one."
        handleOnChange={handleOnChange}
        isError={isError}
      />
    </div>
  );
};

export const SecondStep = ({ handleOnChange, isError }) => {
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        Title="Email"
        name="email"
        Id="email"
        Types="email"
        handleOnChange={handleOnChange}
        isError={isError}
        ErrorText="Please provide a valid email address."
      />
      <CustomInput
        Title="Phone number"
        Id="phonenumber"
        name="phoneNumber"
        Types="tel"
        handleOnChange={handleOnChange}
        isError={isError}
        ErrorText="Please enter a valid phone number."
      />
      <CustomInput
        Title="Password"
        Id="password"
        name="password"
        Types="password"
        handleOnChange={handleOnChange}
        isError={isError}
        ErrorText="Password must include letters and numbers."
      />
      <CustomInput
        Title="Confirm password"
        Id="confirmpassword"
        name={"confirmPassword"}
        handleOnChange={handleOnChange}
        isError={isError}
        Types="password"
        ErrorText="Passwords do not match. Please try again."
      />
    </div>
  );
};

export const ThirdStep = ({ handleOnChange, isError }) => {
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        Title="Date of birth"
        Id="dateofbirth"
        name="dateOfBirth"
        Types="date"
        handleOnChange={handleOnChange}
        isError={isError}
        ErrorText="Please select a date."
      />
      <div className="relative gap-3 flex flex-col">
        <input
          type="file"
          id="img"
          name="profileImage"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="h-[180px] bg-gray-200 border-none flex flex-col items-center justify-center gap-2">
          <div className="p-2 bg-white rounded-full">
            <CiImageOn className="text-black size-3" />
          </div>
          <label
            htmlFor="img"
            className="cursor-pointer text-black text-[14px] font-medium"
          >
            Add image
          </label>
        </div>
        <InputError ErrorText="Image cannot be blank" />
      </div>
    </div>
  );
};
