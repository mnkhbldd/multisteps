// import { FirstStep } from "./Steps";

export const CustomButton = ({ First }) => {
  return (
    <div className="flex items-center gap-2 ">
      <div className={`${First ? "hidden" : "flex"}`}>
        <button
          className={`flex text-black w-[102px] border border-[#CBD5E1] px-3 py-2.5 rounded-[6px]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z"
              fill="#202124"
            />
          </svg>{" "}
          Back
        </button>
      </div>
      <button className="w-full px-3 py-[10px] bg-black rounded-[6px]">
        Continue 1/3
      </button>
    </div>
  );
};
