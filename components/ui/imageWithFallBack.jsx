"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/images/Hisi-Logo.svg";

export const ImageWithFallback = (props) => {
  const { src, alt, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc || logo}
      alt={alt || "hisi-logo"}
      onError={() => {
        setImgSrc(logo);
      }}
    />
  );
};
