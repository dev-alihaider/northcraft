import React from 'react'
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const ContactUs: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 large:py-12 py-8 large:px-28 lg:px-20 md:px-16 px-8">
      <div className="md:col-span-2 col-span-1 bg-blue rounded-2xl text-white">
        <div className="large:pt-11 lg:pt-7 pt-4 large:px-16  lg:px-8 px-5">
          <h1 className="font-medium large:text-2xl lg:text-xl sm:text-lg text-base">
            Request A Quote
          </h1>
          <p className="font-normal large:text-xl lg:text-lg sm:text-base text-sm large:pt-6 lg:pt-4 pt-2">
            Complete control over products allow us to our customers the
            best quality prices and services. We take great pride in
            everything that we do in Jhontraktor{" "}
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-5 ">
            <Input
              placeholder="Name"
              className="text-black placeholder:text-grayish large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:py-6 lg:py-5 sm:py-4 py-2 large:pl-16 lg:pl-6 pl-4 sm:rounded-2xl rounded-xl w-full"
            />
            <Input
              placeholder="Email"
              className="text-black placeholder:text-grayish large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:py-6 lg:py-5 sm:py-4 py-2 large:pl-16 lg:pl-6 pl-4 sm:rounded-2xl rounded-xl w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1  gap-4 pt-4">
            <Input
              placeholder="Phone"
              className="text-black placeholder:text-grayish large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:py-6 lg:py-5 sm:py-4 py-2 large:pl-16 lg:pl-6 pl-4 sm:rounded-2xl rounded-xl w-full"
            />
            <Input
              placeholder="Select Your Service "
              className="text-black placeholder:text-grayish large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:py-6 lg:py-5 sm:py-4 py-2 large:pl-16 lg:pl-6 pl-4 sm:rounded-2xl rounded-xl w-full"
            />
          </div>

          <div className="grid grid-cols-2 pt-4">
            <textarea
              placeholder="Additional Details!"
              className=" col-span-2 h-full text-black large:pb-24  sm:pb-16 pb-8 placeholder:text-grayish large:py-6 lg:py-5 sm:py-4 py-2 large:placeholder:text-xl lg:placeholder:text-lg md:placeholder:text-base placeholder:xs placeholder:font-normal large:pl-16 lg:pl-6 pl-4  rounded-2xl"
            />
          </div>
          <Button className="large:mb-12 mb-8 font-normal large:text-xl text-lg w-full bg-darkGray large:py-6 py-4 text-center rounded-2xl large:mt-6 mt-4">
            Submit Request
          </Button>
        </div>
      </div>
      <div className="col-span-1 bg-blue rounded-2xl text-white">
        <div className="large:pt-11 lg:pt-7 pt-4     large:px-16  lg:px-8 px-5">
          <h1 className="font-medium large:text-2xl lg:text-xl text-lg">
            Contact Info
          </h1>

          <div className="large:pt-10 lg:pt-6 sm:pt-4 pt-2  ">
            <h1 className="font-normal large:text-xl lg:text-lg text-base">
              Our Location
            </h1>
            <p className="font-light large:text-base lg:text-sm text-xs pt-1">
              18 Office Park Building 21th Floor Unit C. Jl. TB Simatupang
              Kav. 18, Jakarta Selatan ,12520
            </p>
          </div>
          <div className="large:pt-6  sm:pt-4 pt-2 ">
            <h1 className="font-normal large:text-xl lg:text-lg text-base">
              Quick Contact
            </h1>
            <div className=" font-light large:text-base text-sm pt-1 flex flex-col lg:text-sm text-xs">
              <div>Email : 02102797151</div>
              <div className="flex md:break-all">
                Call Us : northcraftprojects@gmail.com
              </div>
            </div>
          </div>
          <div className="large:pt-6  sm:pt-4 pt-2 ">
            <h1 className="font-normal large:text-xl lg:text-lg text-base">
              Opening Hours
            </h1>
            <p className="font-light large:text-base text-sm pt-1 lg:text-sm text-xs">
              Monday - Friday
              <br />
              09:00 AM - 06:00 PM
            </p>
          </div>
          <div className="large:pt-6  sm:pt-4 pt-2 ">
            <p className="font-normal large:text-xl lg:text-lg md:text-base text-sm ">
              Do You Have Any Question, Just Contact Us To Get Help!
            </p>
          </div>
          <Button className="sm:mb-12 mb-8 font-normal large:text-xl text-lg w-full bg-darkGray large:py-6 py-4 text-center rounded-2xl large:mt-10 mt-6">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
