import React from "react"
const Img =({
    className,
    src="src/assets/images/Logo.png",
    alt="testImg",
    ...restProps
})=>{
 return <img src={src} alt={alt} className={className} {...restProps} loading={"{lazy"} />
}
export {Img}