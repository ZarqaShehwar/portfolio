import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["NextJS", "GraphQL","SQL/NoSQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "zarqashehwar47@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center opacity-60"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-black font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              Let’s Connect
            </div> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* 🔹 Description */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-gray-200 z-10">
            {description}
          </div>

          {/* 🔹 Title */}
          <div className="font-sans text-lg lg:text-2xl max-w-96 font-bold text-white z-10">
            {title}
          </div>

          {/* 🔹 For the 3D globe */}
          {id === 2 && <GridGlobe />}

          {/* 🔹 Tech stack list */}
          {id === 3 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-6 pr-2">
              {/* Left column */}
              <div className="flex flex-col gap-4">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-2 text-sm lg:text-base text-gray-200 bg-[#10132E] rounded-lg text-center shadow-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-4">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-2 text-sm lg:text-base text-gray-200 bg-[#10132E] rounded-lg text-center shadow-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 🔹 Email Copy Button */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] text-green rounded-md h-8 md:h-8"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

