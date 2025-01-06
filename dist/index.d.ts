import * as react_jsx_runtime from 'react/jsx-runtime';
import { JSX } from 'react';

type StandardButtonType = {
    type: "primaryContained" | "primaryOutlined";
    onClick: () => void;
    height?: string;
    width?: string;
    loading?: boolean;
    disabled?: boolean;
    children: string | JSX.Element;
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
    type?: undefined;
};
type ButtonProps = StandardButtonType | CustomButtonType;
type DropdownButtonProps = Omit<CustomButtonType, "onClick"> & {
    dropdownContent: JSX.Element;
};

declare function Button({ type, height, width, color, borderColor, backgroundColor, onClick, loading, disabled, children, }: ButtonProps): react_jsx_runtime.JSX.Element;

declare function DropdownButton({ dropdownContent, ...buttonProps }: DropdownButtonProps): react_jsx_runtime.JSX.Element;

export { Button, DropdownButton };
