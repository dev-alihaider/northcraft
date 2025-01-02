"use client";
import arrow from "../../../public/assets/icons/arrow-right-circle.svg";
import Button from "../../components/common/Button";
import Link from "next/link";
import React from "react";
import carFull from "../../../public/assets/images/carFull.jpeg";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-bottom sm:justify-center justify-end -mt-36 min-h-screen overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to  bottom, rgba(25, 26, 25, 1), rgba(0, 0, 0, 0)),url(${carFull.src})`,
        }}
      >

      </div>
    </>
  );
};

export default HeroSection;
