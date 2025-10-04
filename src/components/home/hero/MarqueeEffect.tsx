"use client";

import React from "react";
import styles from "./MarqueeEffect.module.css";

type MarqueeProps = {
  items: string[];
  speed?: number; // animation speed in seconds
};

const Marquee: React.FC<MarqueeProps> = ({ items, speed = 20 }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex whitespace-nowrap ${styles.animateMarquee}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-xl font-medium text-gray-800 dark:text-gray-200"
          >
            {item}
          </span>
        ))}
        {/* Duplicate items for infinite loop */}
        {items.map((item, i) => (
          <span
            key={`dup-${i}`}
            className="mx-8 text-xl font-medium text-gray-800 dark:text-gray-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
