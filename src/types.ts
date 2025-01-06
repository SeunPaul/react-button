import { JSX } from "react";

type StandardButtonType = {
  type: "primaryContained" | "primaryOutlined";
  onClick: () => void;
  height?: string;
  width?: string;
  loading?: boolean;
  disabled?: boolean;
  children: string | JSX.Element;

  // this is not needed for standard button
  color?: undefined;
  borderColor?: undefined;
  backgroundColor?: undefined;
};

type CustomButtonType = {
  onClick: () => void;
  height?: string;
  width?: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  loading?: boolean;
  disabled?: boolean;
  children: string | JSX.Element;

  // this is not needed for custom button
  type?: undefined;
};

export type ButtonProps = StandardButtonType | CustomButtonType;

export type DropdownButtonProps = Omit<CustomButtonType, "onClick"> & {
  dropdownContent: JSX.Element;
};
