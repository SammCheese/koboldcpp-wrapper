import React, { MouseEventHandler, useState } from "react";
import "./Select.css";
import Flex from "../Flex/Flex";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SelectType {
  options: { value: string; name: string }[];
  placeholder?: string;
  onSelect?: (value: string) => void;
}

const Select = ({ options, placeholder = "Select", onSelect }: SelectType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const handleOptionClick = ({
    name,
    value,
  }: {
    value: string;
    name: string;
  }) => {
    setSelectedOption(name);
    setIsOpen(false);
    if (typeof onSelect === "function") onSelect(value);
  };

  return (
    <span className="select-item-container">
      <span className="select-item-head">
        <Flex
          className={`selected-text ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption : "Select"}
          {isOpen ? (
            <ChevronUp className="select-icon" />
          ) : (
            <ChevronDown className="select-icon" />
          )}
        </Flex>
        {isOpen && (
          <span className="select-item">
            {options.map((e) => (
              <li
                className={`select-item-option ${
                  selectedOption === e.name ? "selected" : ""
                }`}
                key={e.name}
                value={e.value}
                onClick={() => handleOptionClick(e)}
              >
                {e.name}
              </li>
            ))}
          </span>
        )}
      </span>
    </span>
  );
};

export default Select;
