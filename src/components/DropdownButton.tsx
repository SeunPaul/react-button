import { useState, useRef } from "react";
import Button from "./Button";
import { DropdownButtonProps } from "../types";
import useOutsideClick from "../hooks";

function DropdownButton({
  dropdownContent,
  ...buttonProps
}: DropdownButtonProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setDropdownOpen(false);
    setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  const openDropdown = () => {
    setShowDropdown(true);
    setTimeout(() => {
      setDropdownOpen(true);
    }, 50);
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className="relative">
      <Button
        {...buttonProps}
        onClick={() => {
          showDropdown ? closeDropdown() : openDropdown();
        }}
      />
      {showDropdown && (
        <div
          className={`absolute right-0 top-[44px] z-10 max-h-56 -translate-y-4 overflow-scroll rounded border border-gray-200 bg-white shadow-lg transition-all ${
            dropdownOpen
              ? "opacity-1 translate-y-0"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
