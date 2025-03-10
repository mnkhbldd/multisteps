import { InputError } from "./InputError";

export const CustomInput = ({ Title, Types }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[14px] text-[#334155] font-semibold">
        {Title} <span className="text-[#E14942]">*</span>
      </p>

      <input
        type={Types}
        placeholder={Title}
        className="p-3 border border-[#8B8E95] rounded-[8px] w-[392px] outline-none focus-visible:border-[#0CA5E9] text-black"
      ></input>
      <InputError Text="First name cannot contain special characteres or numbers." />
    </div>
  );
};
