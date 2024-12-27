"use client";
import Link from "next/link";
import northcraft from "../../../public/assets/icons/Northcraft.svg";
import Image from "next/image";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { motion, type Variants } from "framer-motion";
import Button from "../../components/common/Button";
import ActiveLink from "../../components/common/ActiveLink";
import { ROUTES } from "../../routes";

const animationVariants: Variants = {
  open: { opacity: 1, height: "auto", width: "100%" },
  closed: { opacity: 1, height: 0, width: "100%", overflow: "hidden" },
};

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="flex relative sm:h-36 h-28 items-center bg-darkGray w-full top-0 sm:sticky z-50">
        <Link href="/" className="large:pl-28 lg:pl-28 md:pl-12 pl-8">
          <Image
            src={northcraft}
            alt="Northcraft-logo"
            className="md:h-24 sm:h-20 h-16"
          />
        </Link>
        <div className="hidden sm:flex flex-grow justify-center sm:space-x-3 md:space-x-5 lg:space-x-6">
          {Object.values(ROUTES).map((route) => (
            <div key={route.label}>
              <ActiveLink
                href={route.path}
                activeClassName=" text-blue underline underline-offset-[1.5rem]  "
                className=" sm:text-base  md:text-xl lg:text-2xl font-medium "
              >
                {route.label}
              </ActiveLink>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex lg:pr-28 md:pr-12 sm:pr-8">
          <Button className="py-2 whitespace-nowrap px-4 sm:py-3 sm:px-4 md:py-4 md:px-6 rounded-xl bg-blue text-darkGray lg:text-2xl font-medium">
            Contact Us
          </Button>
        </div>

        <div className="sm:hidden ml-auto pr-7">
          <button className="text-white" onClick={() => setOpenMenu((e) => !e)}>
            <HiBars3 className="h-7 w-7 text-white" />
          </button>
        </div>
      </nav>

      <motion.div
        variants={animationVariants}
        initial="closed"
        animate={openMenu ? "open" : "closed"}
        className="absolute sm:top-36 top-28 left-0 w-full rounded-b-lg bg-darkGray flex flex-col items-center justify-center shadow-md sm:hidden z-50"
      >
        {Object.values(ROUTES).map((route) => (
          <div key={route.label} className="w-full px-10 py-2 ">
            <ActiveLink
              href={route.path}
              className="w-full text-white transition-all"
            >
              {route.label}
            </ActiveLink>
          </div>
        ))}
      </motion.div>
    </>
  );
}
