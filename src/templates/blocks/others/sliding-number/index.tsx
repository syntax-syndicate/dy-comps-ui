"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { SlidingNumber } from "./sliding-number";
import { RiGithubFill } from "react-icons/ri";

export default function HomePage() {
  const targetDate = useMemo(
    () => new Date(new Date().setMonth(new Date().getMonth() + 1)).getTime(), // next month
    [],
  );
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate - Date.now();

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference % 86400000) / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);
    const seconds = Math.floor((difference % 60000) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  }, [targetDate]);

  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <section className="flex h-full flex-1 flex-col items-center justify-center text-center">
      <h6 className="font-mono">Next Month</h6>
      <div className="mt-2 flex items-center gap-1 font-mono text-2xl">
        <SlidingNumber value={timeLeft.days} padStart={true} />
        <span className="mr-0.5 text-muted-foreground">d</span>
        <SlidingNumber value={timeLeft.hours} padStart={true} />
        <span className="mr-0.5 text-muted-foreground">h</span>
        <SlidingNumber value={timeLeft.minutes} padStart={true} />
        <span className="mr-0.5 text-muted-foreground">m</span>
        <SlidingNumber value={timeLeft.seconds} padStart={true} />
        <span className="text-muted-foreground">s</span>
      </div>

      <div className="mt-3">
        <a
          target="_blank"
          href="https://github.com/programming-with-ia/dy-comps"
          className="flex items-center gap-1 font-mono text-sm text-muted-foreground hover:underline"
        >
          <RiGithubFill className="size-3.5" /> GitHub
        </a>
      </div>
    </section>
  );
}
