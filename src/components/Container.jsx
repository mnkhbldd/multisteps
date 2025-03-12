"use client";
import { useState } from "react";
import { CustomInput, CustomButton } from ".";
import { FirstStep, SecondStep, ThirdStep } from "./Steps";
import { handleOnClick, initialFormValues } from "@/utils/functions";

export const Container = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [errorValues, setErrorValues] = useState();
  const [isError, setIsError] = useState(false); // Changed from "true" to true
  const [count, setCount] = useState(0);

  const CurrentSteps = [FirstStep, SecondStep, ThirdStep][count];

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  console.log(formValues);

  const handleForward = () => {
    if (count >= 2) {
      return;
    }

    if (
      formValues.firstName === "" ||
      formValues.lastName === "" ||
      formValues.userName === ""
    ) {
      setIsError(true);
      console.log("error");
      return;
    }

    setIsError(false);
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
      <div className="w-[480px] min-h-[655px] h-fit  bg-white flex flex-col justify-between p-8 rounded-[8px]">
        <div className="flex flex-col gap-7">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <img
              className="size-[60px]"
              src="https://s3-alpha-sig.figma.com/img/48cb/cd1f/b0c85cb83db9b8c1218a4675117f8e3f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P56abisAjYWn71XaGqmRWlnKFcN8M2iqLDDTxrmR8mzc9dwpv2v6E5N5ub4qucjg-FkxCQg~eRoszo0dXOOBzj53X4SoZcpEc-qbVuSKrJSWqilaEH0tyXSa2HOcHaJkxvgqoDC5Xz5tCJVVmFtXidp9yb04fXcAb49HdLTFX~5QGAjbw2K4QV5-TxTMjdtwwkphZVHHnCirGIcd4kJeJ0yajlPl2xgdPPx8gQGJNOzR-N3qniqfAwW3~GebluL1Lk~AkhbV7-k3ixFuUfVOQpdGxk6HPZTp1sPIP8m2p5UgK07RUtP7e0vh-7X6vWPUW9dgzx5m8bNiKqvmaww2tA__"
            ></img>
            <p className="text-[26px] text-black font-semibold m-0">
              Join Us! 😎
            </p>
            <p className="text-[18px] text-[#8E8E8E] font-normal m-0">
              Please provide all current information accurately
            </p>
          </div>
          {/* Header Finished*/}
          <CurrentSteps handleOnChange={handleOnChange} isError={isError} />
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
