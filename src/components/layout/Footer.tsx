import React from "react";
import rightArrow from "../../../public/assets/icons/ArrowRight.svg";
import linkedin from "../../../public/assets/icons/Vector.svg";
import instagram from "../../../public/assets/icons/Instagram.svg";
import twitter from "../../../public/assets/icons/twitter.svg";
import facebook from "../../../public/assets/icons/facebook.svg";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-darkGray">
      <div className="lg:px-28 lg:pt-12 md:px-16 md:pt-6 px-8 pt-3">
        <div className="lg:flex items-center w-full">
          <h1 className="font-unlock text-white font-normal text-4xl">
            &nbsp;
            NORTHCRAFT
          </h1>
          <div className="ml-auto items-center sm:flex sm:pt-0 pt-2">
            <p className="font-normal lg:text-xl md:text-base text-sm text-white pr-2">
              Subscribe To Our Newslatter :
            </p>
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                style={{
                  backgroundImage: `url(${rightArrow.src})`,
                  backgroundPosition: "right 10px center",
                }}
                placeholder="Enter Your Email Address"
                //
                className="w-full sm:w-auto placeholder:text-sm bg-no-repeat bg-transparent border-b border-lightGray text-white placeholder-lightGray py-2 lg:pr-10 pr-6 px-0 focus:outline-none focus:border-lightGray"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 text-white lg:gap-12 sm:gap-x-12 gap-x-8 gap-y-4 ">
          <div className=" lg:col-span-3 md:col-span-4 col-span-8">
            <h1 className="font-medium text-xl py-4">About Us</h1>
            <p className="font-normal text-sm leading-5">
              We have the confidence to provide the best service for you, with
              the support of Professional and Certified HR that we currently
              have and the high-quality materials we use and structured work
              techniques, we will be able to realize timely completion of work.
            </p>
          </div>
          <div className=" lg:col-span-2 md:col-span-4 col-span-8">
            <h1 className="font-medium text-xl py-4">Office</h1>
            <p className="font-normal text-sm leading-6">
              18 Office Park Building 21th Floor Unit C. <br />
              Jl. TB Simatupang Kav. 18, Jakarta Selatan ,12520
            </p>
          </div>
          <div className=" lg:col-span-2 md:col-span-4 col-span-8">
            <h1 className="font-medium text-xl py-4">Contact</h1>
            <p className="font-normal text-sm leading-6">
              Email : contact@jhontracktor.co
              <br />
              Phone : (+62) 877-2469-7246
            </p>
          </div>
          <div className=" lg:col-span-1 col-span-4 ">
            <h1 className="font-medium text-xl py-4">Link</h1>
            <ul className="font-normal lg:flex-col flex lg:space-x-0 space-x-2 text-sm leading-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Service</Link>
              </li>
              <li>
                <Link href="/">Project</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex gap-1">
          <Image src={linkedin} alt="instagram logo" />
          <Image src={instagram} alt="instagram logo" />
          <Image src={twitter} alt="instagram logo" />
          <Image src={facebook} alt="instagram logo" />
        </div>
        <div className="text-xs font-normal text-lightGray pt-10 pb-4">
          <p className="w-full text-center">
            Copyright © 2023 North Craft. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
