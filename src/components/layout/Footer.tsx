import React from "react";
import Link from "next/link";
import { menuItems } from "./constants";

const Footer: React.FC = () => {
  return (
    <div className="bg-darkGray">
      <div className="lg:px-28 lg:pt-12 md:px-16 md:pt-6 px-6 pt-3">
        <div className="lg:flex items-center w-full">
          <h1 className="font-unlock text-white font-normal text-4xl sm:text-left text-center">
            NORTHCRAFT
          </h1>
        </div>

        <div className="grid grid-cols-4 text-white gap-x-12 gap-y-4 ">
          <div className=" md:col-span-2 col-span-4">
            <h1 className="font-medium text-xl py-4">Excellence Assured</h1>
            <p className="font-normal text-sm leading-5">
              We have the confidence to provide the best service for you, with
              the support of Professional and Certified HR that we currently
              have and the high-quality materials we use and structured work
              techniques, we will be able to realize timely completion of work.
            </p>
          </div>
          <div className="lg:col-span-1 sm:col-span-2 col-span-4">
            <h1 className="font-medium text-xl py-4">Contact</h1>
            <p className="font-normal text-sm leading-6 break-normal">
              Email : northcraftprojects@gmail.com
              <br />
              Phone : 02102797151
            </p>
          </div>
          <div className="lg:pl-6">
            <div>
              <h1 className="font-medium text-xl py-4 ">Link</h1>
              <ul className="font-normal flex sm:flex-col flex-row sm:space-x-0 space-x-2 text-sm leading-6">
                {menuItems.map((item, index: number) => (
                  <li key={index}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-xs font-normal text-lightGray pt-10 pb-4">
          <p className="w-full text-center">
            Copyright © 2024 North Craft. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
