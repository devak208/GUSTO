"use client";

export function GustoVideo() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 flex flex-col overflow-hidden">
      <div className="relative w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-full max-w-3xl mx-auto aspect-video rounded-lg shadow-md overflow-hidden">
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
