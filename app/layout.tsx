import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import LenisProvider from "./providers/LenisProvider";
import { ContextProvider } from "./providers/ContextProvider";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html
      lang="en"
      className={`h-full antialiased overflow`}
    >
        <body className="min-h-full flex flex-col overflow-hidden"><LenisProvider><ContextProvider>{children}</ContextProvider></LenisProvider></body>
    </html>
    </ViewTransitions>
  );
}
