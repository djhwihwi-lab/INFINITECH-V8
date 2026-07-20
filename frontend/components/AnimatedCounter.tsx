"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounter({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= value) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="glass p-6 text-center">

      <h3 className="text-4xl font-bold text-cyan-400">
        {count}+
      </h3>

      <p className="text-gray-300 mt-2">
        {label}
      </p>

    </div>
  );
}
