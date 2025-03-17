import { InputError } from "./InputError";

export const CustomInput = ({
  Title,
  Types,
  ErrorText,
  className,
  Id,
  name,
  value,
  errors,
  handleOnChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[14px] text-[#334155] font-semibold">
        {Title} <span className="text-[#E14942]">*</span>
      </p>

      <input
        type={Types}
        placeholder={Title}
        id={Id}
        name={name}
        value={value}
        onChange={handleOnChange}
        className={
          `
          focus-visible:border-[#0CA5E9] 
          outline-none
          text-black 
          text-[16px]
          w-full
          border 
          border-[#8B8E95] 
          rounded-[8px]  
          p-3
          ${errors ? "border-red-500" : ""}
        ` + className
        }
      />
      {errors && <InputError ErrorText={ErrorText} />}
    </div>
  );
};
