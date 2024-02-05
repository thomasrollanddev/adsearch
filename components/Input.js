"use client";
import { useState } from "react";

export default function Input({ title, placeholder, width }) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  return (
    <div
      className={`relative h-[50px] text-base tracking-wider bg-slate-200`}
      style={{ width: `${width}px` }}
    >
      <label
        className="relative block h-full"
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      >
        <input
          type="text"
          className="absolute bottom-0 left-0 w-full h-4/6 z-0 group px-5 bg-none bg-slate-200 outline-none mb-2"
          onChange={handleInputChange}
        />
        <p
          className={`${
            !isInputFocused && inputValue === ""
              ? "font-bold -translate-y-1/2 duration-100"
              : " font-normal -translate-y-7 text-[9px] duration-100"
          } absolute left-5 top-1/2  select-none z-0 cursor-text`}
        >
          {" "}
          {title}
        </p>
        {!isInputFocused && inputValue === "" && (
          <p
            className="text-slate-400 font-light  text-xs absolute left-20 top-1/2 -translate-y-1/2 select-none 
        z-0 cursor-text  group-hover:hidden"
          >
            {" "}
            {placeholder}
          </p>
        )}
      </label>
    </div>
  );
}
