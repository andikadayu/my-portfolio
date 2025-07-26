import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andika Dayu - Backend Developer",
  description: "Andika Dayu's personal portfolio as a Backend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}