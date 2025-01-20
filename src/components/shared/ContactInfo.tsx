import React from "react";
import Button from "../common/Button";
import Link from "next/link";

function ContactInfo() {
  return (
    <div className="col-span-1 bg-blue rounded-2xl text-white sm:text-left text-center">
      <div className="large:pt-11 lg:pt-7 pt-4     large:px-16  lg:px-8 px-5">
        <h1 className="font-medium  text-2xl ">Contact Info</h1>
        <div className="large:pt-10 lg:pt-6 sm:pt-4 pt-2">
          <h1 className="font-normal large:text-xl text-lg ">Our Location</h1>
          <p className="font-light large:text-base lg:text-sm text-xs pt-1">
            2802 statehighway 10 waipapa, far north
          </p>
        </div>
        <div className="large:pt-6  sm:pt-4 pt-2 ">
          <h1 className="font-normal large:text-xl text-lg ">Quick Contact</h1>
          <div className=" font-light large:text-base md:break-all pt-1 flex flex-col lg:text-sm text-xs">
            <div>Email : northcraftprojects@gmail.com</div>
            <div className=" ">Call Us : 02102797151</div>
          </div>
        </div>
        <div className="large:pt-6 sm:pt-4 pt-2 ">
          <h1 className="font-normal large:text-xl text-lg ">Opening Hours</h1>
          <p className="font-light large:text-base  pt-1 lg:text-sm text-xs">
            Monday - Friday
            <br />
            07:30 AM - 05:00 PM
          </p>
        </div>
        <div className="large:pt-6  sm:pt-4 pt-2 ">
          <p className="font-normal large:text-xl lg:text-lg md:text-base text-sm ">
            Do You Have Any Question, Just Contact Us To Get Help!
          </p>
        </div>
        <Link href="/contact">
          <Button className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-base py-3 sm:mb-12 mb-8 font-normal large:text-xl  w-full bg-darkGray large:py-6 sm:py-4 text-center rounded-2xl large:mt-10 mt-6">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ContactInfo;
