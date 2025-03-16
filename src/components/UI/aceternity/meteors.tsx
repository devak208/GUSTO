import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const meteors = useMemo(() => {
    const seed = 42;
    
    return Array.from({ length: number }).map((_, i) => {
      const leftPosition = ((i * seed) % 400) - 200;
      const animationDelay = `${((i * 0.277) % 1).toFixed(2)}s`;
      const animationDuration = `${Math.floor((i % 8) + 2)}s`;
      
      return {
        id: i,
        top: 0,
        left: leftPosition,
        animationDelay,
        animationDuration,
      };
    });
  }, [number]);

  return (
    <>
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        ></span>
      ))}
    </>
  );
};
