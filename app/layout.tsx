import type { Metadata } from "next";
import { montserrat } from "@/src/fonts/Montserrat";
import StoreProvider from "@/src/store/StoreProvider";
import "../src/styles/globals.css";

export const metadata: Metadata = {
  title: "Viajes Lili",
  description: "Viajes Lili Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={montserrat.style}
        className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
