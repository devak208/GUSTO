"use client";
import React from "react";

export function Banner() {
    return (
      <div className="flex flex-col overflow-hidden my-10 sm:my-6 md:my-8 lg:my-10">
        <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/iiWIcgjcspI?si=Lj2JibtZauf2k-OZ&autoplay=1&mute=1&loop=1&playlist=iiWIcgjcspI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    );
  }
