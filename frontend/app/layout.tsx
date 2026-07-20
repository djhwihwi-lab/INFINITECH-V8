import LoadingScreen from "@/components/LoadingScreen";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "INFINITECH Zimbabwe | Engineering & Technology Solutions",
  description:
    "INFINITECH provides premium electrical engineering, solar systems, automation, networking, security and smart technology solutions.",
  keywords: [
    "INFINITECH Zimbabwe",
    "Electrical Engineering",
    "Solar Systems",
    "Automation",
    "CCTV",
    "Networking",
    "Smart Technology",
  ],
  authors: [{ name: "INFINITECH Zimbabwe" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <LoadingScreen />
  {children}
</body>
    </html>
  );
}
