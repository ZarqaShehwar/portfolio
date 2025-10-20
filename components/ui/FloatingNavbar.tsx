"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // Detect scroll direction for navbar visibility
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  // Detect whether we are near top (for color change)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsAtTop(latest < 100); // change "100" based on hero section height
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border items-center justify-center space-x-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-colors duration-500",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: isAtTop
            ? "black" // 👈 black navbar at top
            : "rgba(17, 25, 40, 0.75)", // 👈 blurred transparent when scrolling
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          color: isAtTop ? "white" : "white",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-sm font-medium transition-colors duration-300",
              isAtTop
                ? "text-white hover:text-gray-300"
                : "text-neutral-200 hover:text-neutral-100"
            )}
          >
            <span>{navItem.icon}</span>
            <span className="cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
