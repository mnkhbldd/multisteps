import { CustomInput } from ".";

export const FirstStep = () => {
  return (
    <div className="flex flex-col gap-3 pb-[54px]">
      <CustomInput
        Title="First name"
        Types="text"
        ErrorText="First name cannot contain special characteres or numbers."
      />
      <CustomInput
        Title="Last name"
        Types="text"
        ErrorText="First name cannot contain special characteres or numbers."
      />
      <CustomInput
        Title="Last name"
        Types="text"
        ErrorText="First name cannot contain special characteres or numbers."
      />
    </div>
  );
};

export const SecondStep = () => {
  return (
    <div className="flex flex-col gap-3 pb-[54px]">
      <CustomInput
        Title="Email"
        Types="email"
        ErrorText="Please provide a valid email address."
      />
      <CustomInput
        Title="Phone number"
        Types="tel"
        ErrorText="Please enter a valid phone number."
      />
      <CustomInput
        Title="Password"
        Types="password"
        ErrorText="Password must include letters and numbers."
      />
      <CustomInput
        Title="Confirm password"
        Types="password"
        ErrorText="Passwords do not match. Please try again."
      />
    </div>
  );
};
