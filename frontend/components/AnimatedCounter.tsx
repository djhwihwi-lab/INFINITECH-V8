"use client";

import { ReactNode } from "react";

export default function ScrollAnimation({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="animate-float">
      {children}
    </div>
  );
}
