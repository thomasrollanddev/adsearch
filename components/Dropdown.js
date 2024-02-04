"use client";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["10 km", "25 km", "50 km", "100 km"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative flex  justify-start items-center h-[50px] w-[100px] ">
      <div className="cursor-pointer w-[70px]  p-2 " onClick={toggleDropdown}>
        {selectedOption || "10 km"}
      </div>
      {isOpen && (
        <div className="absolute top-[50px] w-[100px] mt-2 bg-white  ">
          {options.map((option) => (
            <div
              key={option}
              className="p-2 bg-stone-200 cursor-pointer hover:bg-white"
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      <div>
        <FaArrowDown />
      </div>
    </div>
  );
}
