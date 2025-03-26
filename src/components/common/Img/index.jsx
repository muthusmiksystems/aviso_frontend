import React from "react"
import Images from "../../../assets/images/Image"
const Img =({
    className,
    src=Images.Logo,
    alt="testImg",
    ...restProps
})=>{
 return <img src={src} alt={alt} className={className} {...restProps} loading={"{lazy"} />
}
export {Img}
