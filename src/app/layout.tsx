import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Jimmy BearCrawl | Training App",
  description: "Time to get training",
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
