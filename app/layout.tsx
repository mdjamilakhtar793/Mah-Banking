import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibm_plext = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});
export const metadata: Metadata = {
  title: "MAH Banking",
  description: "Mah Banking is amodern banking platforme for everyone.",
  icons: "/icons/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibm_plext.variable}`}>
        {children}
      </body>
    </html>
  );
}
