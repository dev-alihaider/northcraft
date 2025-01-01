import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Poppins, Comforter_Brush, Unlock } from "next/font/google";
import {Toaster} from "react-hot-toast";

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
  description: "North Craft Construction provides top-notch construction services, specializing in residential, commercial, and industrial projects. We are committed to delivering quality craftsmanship, timely project completion, and customer satisfaction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${comforterBrush.variable} ${unlock.variable} `}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
