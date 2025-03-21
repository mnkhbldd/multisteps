// import { FirstStep } from "./Steps";

export const CustomButton = ({ handleForward, handleBackward, count }) => {
  return count !== 3 ? (
    <div className="flex items-center gap-2">
      <div className={count === 0 ? "hidden" : "flex"}>
        <button
          onClick={handleBackward}
          className="flex text-black w-[102px] border border-[#CBD5E1] px-3 py-2.5 rounded-[6px]"
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
          </svg>
          Back
        </button>
      </div>
      <button
        onClick={handleForward}
        className="w-full px-3 py-[10px] bg-black rounded-[6px] cursor-pointer"
      >
        Continue {count}/3
      </button>
    </div>
  ) : null;
};
