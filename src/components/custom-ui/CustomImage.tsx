import React from "react";
import Image from "next/image";

interface CustomImageProps {
  src: string;
}

const CustomImage = ({ src }: CustomImageProps) => {
  return (
    <div className="relative w-full h-full aspect-square sm:aspect-video">
      <Image
        src={src}
        alt="Custom Image"
        fill
        sizes="100%"
        className="object-cover object-center"
        quality={100}
        priority
      />
    </div>
  );
};

export default CustomImage;
