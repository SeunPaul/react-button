import { CgSpinner } from "react-icons/cg";
import { ButtonProps } from "../types";

function Button({
  type,
  height,
  width,
  color,
  borderColor,
  backgroundColor,
  onClick,
  loading,
  disabled,
  children,
}: ButtonProps) {
  const buttonType = {
    primaryContained: {
      backgroundColor: "#A738FF",
      borderColor: null,
      color: "#fff",
    },
    primaryOutlined: {
      backgroundColor: "#FCFAFF",
      borderColor: "#A738FF",
      color: "#A738FF",
    },
    undefined: null,
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 text-nowrap rounded text-sm font-medium outline-none hover:opacity-80 ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      style={{
        color: disabled
          ? "#98a2b3"
          : buttonType[type as keyof typeof buttonType]?.color ||
            color ||
            "#344054",
        backgroundColor: disabled
          ? "#eaecf0"
          : buttonType[type as keyof typeof buttonType]?.backgroundColor ||
            backgroundColor ||
            "transparent",
        border: disabled
          ? "1px solid #eaecf0"
          : `1px solid ${
              buttonType[type as keyof typeof buttonType]?.borderColor ||
              borderColor ||
              "transparent"
            }`,
        height: height || "40px",
        width: width || "auto",
        padding: width ? "0px" : "0 16px",
      }}
      type="button"
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? (
        <CgSpinner className={`text-[${color}] animate-spin text-2xl`} />
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
