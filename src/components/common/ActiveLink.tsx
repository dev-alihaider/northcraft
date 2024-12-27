"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLinkProps } from "./types";

const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  children,
  activeClassName = "",
  className = "",
}) => {
  const isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : "text-white"}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
