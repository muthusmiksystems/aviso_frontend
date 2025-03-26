import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
  square: "rounded-[8px]",
};

const variants = {
  fill: {
    gray_100_03: "bg-gray-100_03",
    neutral_100: "bg-neutral-100 text-gray-400_87",
    white_A700_04: "bg-color-white text-color_black",
    white_A700: "bg-white text-gray-400_87",
  },
  outline: {
    white_A700_4c: "bg-white border border-color_white-700_8c border-solid",
  },
  gradient: {
    light_blue_400_19_cyan_300_10: "bg-gradient text-text",
  },
};

const sizes = {
  "4xl": "h-[58px] pl-9 pr-3 text-[15px]",
  "3xl": "h-[54px] pl-8 pr-3 text-[15px]",
  "2xl": "h-[52px] pl-7 pr-3 text-[15px]",
  xl: "h-[50px] pl-5 pr-3 text-[14px]",
  lg: "h-[48px] pl-5 pr-3 text-[14px]",
  md: "h-[46px] pl-5 pr-3 text-[14px]",
  sm: "h-[38px] px-3 text-[14px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "gradient",
      size = "3xl",
      color = "white",
      ...restProps
    },
    ref
  ) => {
    return (
      <label className={`${className} !pl-0 flex items-center  cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}>
        {label && label}
        {prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} className={className} {...restProps} />
        {suffix && suffix}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.node,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  onChange: PropTypes.func,
  shape: PropTypes.oneOf(["round", "square"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  size: PropTypes.oneOf(["4xl", "3xl", "2xl", "xl", "lg", "md", "sm"]),
  color: PropTypes.oneOf([
    "gray_100_03",
    "neutral_100",
    "white_A700_04",
    "white_A700",
    "white_A700_4c",
    "light_blue_400_19_cyan_300_10",
  ]),
};

export { Input };
