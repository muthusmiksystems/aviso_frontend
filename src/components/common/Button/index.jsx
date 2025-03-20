import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[20px]",
};

const variants = {
  outline: {
    blue_500: "border-blue-500 border border-solid text-blue-500_01",
    purple_A200_01: "border border-solid purple_A200_01 purple_600_01_border",
    aviso_29abe2_0: "border-aviso_29abe2_0 border-[1.72px] border-solid text-aviso_29abe2_0",
    blue_gray_50: "border-blue_gray-50 border border-solid",
    teal_300: "border-teal-300 border border-solid text-teal-300",
    gray_902_28: "border-gray-902_28 border border-solid",
  },
  fill: {
    light_green_50: "bg-light_green-50 text-black-900_02",
    aviso_29abe2_1: "bg-aviso_29abe2-1",
    white_A700_1c: "bg-color_white_a700_1c text-black-900_01",
    white_A700_4c: "bg-color_white_a700_4c text-white",
    indigo_A700_7f: "bg-indigo-a700_7f",
    white: "bg-white text-aviso_29abe2_0",
    aviso_57bd3d: "bg-aviso_57bd3d shadow-md text-light",
    light: "bg-light",
    aviso_29abe2_0: "bg-aviso_29abe2-0 text-color_teks-white",
    blue_500_01: "bg-blue-500_01 text-white",
    gray_50_33: "bg-gray-50_33 text-color_teks-white",
    color_teks_grey_light: "bg-color_teks-grey_light text-color_teks-black",
  },
  gradient: {
    aviso_29abe2_0_cyan_A200: "bg-gradient1 text-light",
    aviso_grad_dark_purple_500: "bg-gradient1 text-white",
    purple_A200_purple_600: "bg-gradient3 text-white",
  },
};

const sizes = {
  xs: "h-[39px] px-[22px]",
  lg: "h-[62px] px-3.5 text-[19px]",
  xl: "h-[64px] px-[24px] text-[23px]",
  "2xl": "h-[38px] px-4 text-[14px]",
  "3xl": "h-[38px] px-[8px] text-[18px]",
  "4xl": "h-[22px] px-5 text-[10px]",
  "5xl": "h-[29px] px-[34px] text-[19px]",
  md: "h-[48px] px-1.5",
  sm: "h-[38px] px-[4px] text-[17px]",
  "xxl": "h-[58px] px-[24px] text-[18px]",
  "xxxl": "h-[42px] px-2",
  "xxxxl": "h-[48px] px-2",
  "xxxxxl": "h-[38px] px-7 text-[10px]",
  "xxxxxxl": "h-[36px] px-8 text-[11px]",
  "xxxxxxxl": "h-[26px] px-2.5",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape = "fill",
    size = "xl",
    color = "color_teks_grey_light",
    ...restProps
  }) => {
    return (
      <button
        className={`${className} flex flex-row p-2 items-center justify-center text-center cursor-pointer whitespace-nowrap ${
          shape && shapes[shape]
        } ${size && sizes[size]} ${variants && variants[variants]?.[color]}`}
        {...restProps}
      >
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </button>
    );
  };
  
  Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["square", "circle", "round"]),
    size: PropTypes.oneOf([
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "md",
      "sm",
      "xxl",
      "xxxl",
      "xxxxl",
      "xxxxxl",
      "xxxxxxl",
      "xxxxxxxl",
    ]),
    variants: PropTypes.oneOf(["outline", "fill", "gradient"]),
    color: PropTypes.oneOf([
      "blue_500",
      "purple_A200_01_purple_600_01",
      "aviso_29abe2_0",
      "blue_gray_50",
      "teal_300",
      "gray_902_28",
      "light_green_50",
      "aviso_29abe2_1",
      "white_A700_1c",
      "white_A700_4c",
      "indigo_A700_7f",
      "white",
      "aviso_57bd3d",
      "light",
      "color_teks_white",
      "color_teks_grey_light",
      "aviso_29abe2_0_cyan_A200",
      "aviso_grad_dark_purple_500",
      "purple_A200_purple_600",
    ]),
  };
  
  export { Button };
  