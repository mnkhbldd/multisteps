import { CustomInput, CustomButton } from ".";
import { FirstStep, SecondStep } from "./Steps";

export const Container = () => {
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
            <p className="text-[26px] text-black font-semibold ">Join Us! 😎</p>
            <p className="text-[18px] text-[#8E8E8E] font-normal">
              Please provide all current information accurately
            </p>
          </div>
          {/* Header Finished*/}
          <FirstStep />
        </div>
        <CustomButton First={true} />
      </div>
      {/* Container finished */}
    </div>
  );
};
