import { CustomInput } from ".";
import { CiImageOn } from "react-icons/ci";
import { InputError } from "./InputError";

export const FirstStep = ({ handleOnChange, isError }) => {
  return (
    <form className="flex flex-col gap-3">
      <div>
        <CustomInput
          Title="First name"
          Id="firstname"
          Types="text"
          ErrorText="First name cannot be blank."
          handleOnChange={handleOnChange}
          isError={isError}
        />
        <CustomInput
          Title="Last name"
          Id="lastname"
          Types="text"
          ErrorText="Lastname name cannot be blank."
          handleOnChange={handleOnChange}
          isError={isError}
        />
        <CustomInput
          Title="Username"
          Id="username"
          Types="text"
          ErrorText="This username is already taken. Please choose another one."
          handleOnChange={handleOnChange}
          isError={isError}
        />
      </div>
    </form>
  );
};

export const SecondStep = () => {
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        Title="Email"
        Id="email"
        Types="email"
        ErrorText="Please provide a valid email address."
      />
      <CustomInput
        Title="Phone number"
        Id="phonenumber"
        Types="tel"
        ErrorText="Please enter a valid phone number."
      />
      <CustomInput
        Title="Password"
        Id="password"
        Types="password"
        ErrorText="Password must include letters and numbers."
      />
      <CustomInput
        Title="Confirm password"
        Id="confirmpassword"
        Types="password"
        ErrorText="Passwords do not match. Please try again."
      />
    </div>
  );
};

export const ThirdStep = () => {
  return (
    <div className="flex flex-col gap-3">
      <CustomInput
        Title="Date of birth"
        Id="dateofbirth"
        Types="date"
        ErrorText="Please select a date."
      />
      <div className="relative gap-3 flex flex-col">
        <input
          type="file"
          id="img"
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
