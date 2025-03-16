"use client"

import React from "react"

interface MagicButtonProps {
  title: string
  icon: React.ReactNode
  position: "left" | "right"
  handleClick?: () => void
  otherClasses?: string
}

const MagicButton: React.FC<MagicButtonProps> = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <div className="w-full">
      <button
        className={` inline-flex h-10 sm:h-11 md:h-12 animate-shimmer items-center justify-center rounded-md px-4 sm:px-5 md:px-6 font-medium transition-all duration-3=600 focus:outline-none focus:ring-2 gap-2 hover:shadow-lg
          dark:border dark:border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] dark:text-slate-300 dark:focus:ring-slate-400 dark:focus:ring-offset-2 dark:focus:ring-offset-gray-900
          border border-blue-300 bg-[linear-gradient(110deg,#e6f2ff,45%,#ffffff,55%,#e6f2ff)] text-blue-800 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 
          bg-[length:200%_100%] ${otherClasses}`}
        onClick={handleClick}
      >
        {position === "left" && icon}
        <span className="text-sm sm:text-base">{title}</span>
        {position === "right" && icon}
      </button>
    </div>
  )
}

export default MagicButton

