"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
  maxStars?: number;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};
export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 800,
  maxDelay = 2800,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
  maxStars = 30,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const idCounterRef = useRef<number>(0);

  const generateUniqueId = () => {
    idCounterRef.current += 1;
    return Date.now() + idCounterRef.current;
  };

  useEffect(() => {
    const handleResize = () => {
      // When window resizes, update the SVG dimensions
      if (svgRef.current) {
        svgRef.current.setAttribute("width", `${window.innerWidth}`);
        svgRef.current.setAttribute("height", `${window.innerHeight}`);
      }
    };

    // Initialize size
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: generateUniqueId(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };

      setStars((prevStars) => [...prevStars, newStar].slice(-maxStars));

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay, maxStars]);

  useEffect(() => {
    const moveStars = () => {
      setStars(
        (prevStars) =>
          prevStars
            .map((star) => {
              const newX =
                star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
              const newY =
                star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
              const newDistance = star.distance + star.speed;
              const newScale = 1 + newDistance / 100;

              if (
                newX < -20 ||
                newX > window.innerWidth + 20 ||
                newY < -20 ||
                newY > window.innerHeight + 20
              ) {
                return null;
              }

              return {
                ...star,
                x: newX,
                y: newY,
                distance: newDistance,
                scale: newScale,
              };
            })
            .filter(Boolean) as ShootingStar[]
      );
    };

    const animationFrame = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(animationFrame);
  }, [stars]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full", className)}
      style={{ pointerEvents: "none" }}
    >
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
