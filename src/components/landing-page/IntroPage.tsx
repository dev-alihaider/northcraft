import builders from "../../../public/assets/images/builders.png";
import arrow from "../../../public/assets/icons/arrow-right-circle.svg";
import Button from "../../components/common/Button";

export default function IntroPage() {
  return (
    <>
      <div
        className=" bg-cover bg-center bg-no-repeat items-center"
        style={{
          backgroundImage: `url(${builders.src})`,
        }}
      >
        <div className="lg:py-48 md:py-32 sm:py-32 md:px-28 sm:px-20  py-20 px-6 text-white">
          <h1 className="text-6xl font-semibold">We Prepare</h1>
          <h1 className="text-6xl font-semibold">
            For The <span className="text-blue">Future</span>
          </h1>
          <p className="text-xl pt-6 ">
            We provide the best architectural design, contruction, and <br />
            building maintance services for you.
          </p>
          <div className="pt-16 ">
            <Button className="flex items-center gap-2 sm:py-4 py-2  sm:px-6 px-4 rounded-xl bg-blue text-darkGray sm:text-2xl text-xl font-medium">
              <span>Our Services</span>
              <img
                src={arrow.src}
                alt="right arrow"
                className="sm:w-6 sm:h-6 w-4 h-4"
              />{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
