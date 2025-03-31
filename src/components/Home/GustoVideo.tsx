"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { videoId } from "@/data/AllData";

export default function GustoVideo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Only run on client-side
  useEffect(() => {
    setIsClient(true);

    // Set video URL only on client side
    const origin =
      typeof window !== "undefined"
        ? encodeURIComponent(window.location.origin)
        : "";
    setVideoUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&origin=${origin}`
    );
  }, []);

  // Video thumbnail URL - use a local image for better performance
  const thumbnailUrl = "/placeholder/video-thumbnail.png"; // Create this thumbnail image

  const handleLoadVideo = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    console.error("YouTube video failed to load");
    setHasError(true);
  };

  const retryLoading = () => {
    setHasError(false);
    setIsLoaded(false);
    // Short delay before retrying
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  };

  // Fallback content in case YouTube embed fails
  const renderFallbackContent = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-red-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        Video Unavailable
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
        We&apos;re having trouble playing this video. Please try again later.
      </p>
      <button
        onClick={retryLoading}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Retry
      </button>
    </div>
  );

  if (!isClient) {
    // Return a placeholder during SSR
    return (
      <div className="relative w-full max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          GUSTO 2025 Highlights
        </h2>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
        GUSTO ' 25 Highlights
      </h2>

      <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
        {/* Thumbnail shown until iframe is loaded */}
        {!isLoaded && !hasError && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/10 dark:bg-black/40 cursor-pointer"
            onClick={handleLoadVideo}
          >
            <Image
              src={thumbnailUrl}
              alt="GUSTO 2025 Highlights"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 sm:h-10 sm:w-10 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Error state */}
        {hasError && renderFallbackContent()}

        {/* YouTube iframe - conditionally rendered */}
        {isLoaded && !hasError && videoUrl && (
          <>
            <iframe
              ref={iframeRef}
              src={videoUrl}
              title="GUSTO 2025 Video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="eager"
              onLoad={() => console.log("Video iframe loaded")}
              onError={handleError}
            />
          </>
        )}
      </div>

      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Experience the excitement of GUSTO 2025!
      </p>
    </div>
  );
}
