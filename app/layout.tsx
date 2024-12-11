import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trading - Landing Page",
  description: "Faster, Better , Stronger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-primaryRegular`}
      >
        {children}
      </body>
    </html>
  );
}
