import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Comforter_Brush, Inter, Poppins, Unlock } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const comforterBrush = Comforter_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-comforter",
});

const unlock = Unlock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-unlock",
});

export const metadata: Metadata = {
  title: "North Craft Construction - Expert Construction Services",
  description:
    "North Craft Construction delivers quality residential, commercial, and industrial construction with expert craftsmanship, timely completion, and satisfaction.",
  icons: {
    icon: "/assets/icons/northcraft.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${comforterBrush.variable} ${unlock.variable}`}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
