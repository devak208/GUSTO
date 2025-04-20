"use client";

import { finalDate, isClosed } from "@/data/AllData";
import React, { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(finalDate);
      const now = new Date();

      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-6 pb-10 bg-gray-300 dark:bg-neutral-900 rounded-lg">
      {isClosed ? (
        <div className="h-60 flex flex-col text-4xl md:text-5xl font-bold text-slate-900 dark:text-white justify-center items-center">
          <h1 className="relative">Registration Closed!</h1>
          <div className="text-xl md:text-2xl font-medium text-slate-800 dark:text-white mt-8 text-center">
            We'll see you at our next celebration
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-white mb-8 text-center">
            The clock is ticking away !
          </h2>

          <div className="relative flex justify-center items-end space-x-1 md:space-x-3">
            <div className="flex flex-col items-center">
              <span className="text-rose-500 dark:text-rose-400 text-sm uppercase font-bold mb-1">
                DAYS
              </span>
              <div className="text-5xl md:text-9xl font-bold text-slate-900 dark:text-white leading-none">
                {formatNumber(timeLeft.days)}
              </div>
            </div>

            <div className="text-4xl md:text-8xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-3 mx-1">
              :
            </div>

            <div className="flex flex-col items-center">
              <span className="text-rose-500 dark:text-rose-400 text-sm uppercase font-bold mb-1">
                HOURS
              </span>
              <div className="text-5xl md:text-9xl font-bold text-slate-900 dark:text-white leading-none">
                {formatNumber(timeLeft.hours)}
              </div>
            </div>

            <div className="text-4xl md:text-8xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-3 mx-1">
              :
            </div>

            <div className="flex flex-col items-center">
              <span className="text-rose-500 dark:text-rose-400 text-sm uppercase font-bold mb-1">
                MINUTES
              </span>
              <div className="text-5xl md:text-9xl font-bold text-slate-900 dark:text-white leading-none">
                {formatNumber(timeLeft.minutes)}
              </div>
            </div>

            <div className="text-4xl md:text-8xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-3 mx-1">
              :
            </div>

            <div className="flex flex-col items-center">
              <span className="text-rose-500 dark:text-rose-400 text-sm uppercase font-bold mb-1">
                SECONDS
              </span>
              <div className="text-5xl md:text-9xl font-bold text-slate-900 dark:text-white leading-none">
                {formatNumber(timeLeft.seconds)}
              </div>
            </div>
          </div>

          <h2 className="text-lg md:text-2xl font-medium text-slate-800 dark:text-white mt-8 text-center">
            Registration closes on 22nd April 2025
          </h2>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
