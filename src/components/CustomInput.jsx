import { InputError } from "./InputError";

export const CustomInput = ({ Title, Types, ErrorText }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[14px] text-[#334155] font-semibold">
        {Title} <span className="text-[#E14942]">*</span>
      </p>

      <div
        className="p-3  border 
          border-[#8B8E95] 
          rounded-[8px]  
          focus-visible:border-[#0CA5E9] "
      >
        <input
          type={Types}
          placeholder={Title}
          className="
          focus-visible:border-[#0CA5E9] 
          outline-none
          text-black 
          text-[16px]
          h-[20px]
          w-full
        "
        />
      </div>
      <InputError ErrorText={ErrorText} />
    </div>
  );
};
