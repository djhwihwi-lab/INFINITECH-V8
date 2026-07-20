"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-cyan-400 animate-pulse">
          INFINITECH
        </h1>

        <p className="text-gray-300 mt-4">
          Engineering The Future
        </p>

      </div>

    </div>
  );
}
