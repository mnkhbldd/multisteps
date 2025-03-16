"use client";
import { useState } from "react";
import { CustomInput, CustomButton } from ".";
import { FirstStep, FourthStep, SecondStep, ThirdStep } from "./Steps";
import { initialFormValues } from "@/utils/functions";

export const Container = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [count, setCount] = useState(3);

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    userName: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
    dateOfBirth: false,
    profileImage: false,
  });

  const CurrentSteps = [FirstStep, SecondStep, ThirdStep, FourthStep][count];

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "",
    }));
  };

  const handleForward = () => {
    if (count >= 3) return;

    let newErrors = {};

    if (count === 0) {
      newErrors = {
        firstName: formValues.firstName.trim() === "",
        lastName: formValues.lastName.trim() === "",
        userName: formValues.userName.trim() === "",
      };
    }

    if (count === 1) {
      newErrors = {
        email: formValues.email.trim() === "",
        phoneNumber: formValues.phoneNumber.trim() === "",
        password: formValues.password.trim() === "",
        confirmPassword: formValues.confirmPassword.trim() === "",
      };
      if (formValues.password !== formValues.confirmPassword) {
        newErrors.confirmPassword = true;
      }
      if (
        !/[A-Za-z]/.test(formValues.password) ||
        !/\d/.test(formValues.password)
      ) {
        newErrors.password = true;
      }

      if (!/^\d+$/.test(formValues.phoneNumber)) {
        newErrors.phoneNumber = true;
      }

      if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          formValues.email
        )
      ) {
        newErrors.email = true;
      }
    }

    if (count === 2) {
      newErrors = {
        dateOfBirth: formValues.dateOfBirth.trim() === "",
        profileImage: formValues.profileImage.trim() === "",
      };
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      console.log("Error: Some fields are empty.");
      return;
    }

    setCount(count + 1);
  };

  const handleBackward = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      {/* Container  */}
      <div className="w-[480px] min-h-[655px] h-fit bg-white flex flex-col justify-between p-8 rounded-[8px]">
        <div className="flex flex-col gap-7">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <img
              className="size-[60px]"
              src="https://s3-alpha-sig.figma.com/img/48cb/cd1f/b0c85cb83db9b8c1218a4675117f8e3f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P56abisAjYWn71XaGqmRWlnKFcN8M2iqLDDTxrmR8mzc9dwpv2v6E5N5ub4qucjg-FkxCQg~eRoszo0dXOOBzj53X4SoZcpEc-qbVuSKrJSWqilaEH0tyXSa2HOcHaJkxvgqoDC5Xz5tCJVVmFtXidp9yb04fXcAb49HdLTFX~5QGAjbw2K4QV5-TxTMjdtwwkphZVHHnCirGIcd4kJeJ0yajlPl2xgdPPx8gQGJNOzR-N3qniqfAwW3~GebluL1Lk~AkhbV7-k3ixFuUfVOQpdGxk6HPZTp1sPIP8m2p5UgK07RUtP7e0vh-7X6vWPUW9dgzx5m8bNiKqvmaww2tA__"
            />
            <p className="text-[26px] text-black font-semibold m-0">
              Join Us! 😎
            </p>
            <p className="text-[18px] text-[#8E8E8E] font-normal m-0">
              Please provide all current information accurately
            </p>
          </div>
          {/* Header Finished */}
          <CurrentSteps handleOnChange={handleOnChange} errors={errors} />
        </div>
        <CustomButton
          handleForward={handleForward}
          handleBackward={handleBackward}
          count={count}
        />
      </div>
      {/* Container finished */}
    </div>
  );
};
