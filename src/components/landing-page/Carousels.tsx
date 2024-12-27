import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { CarouselsProps } from "./types";

const Carousels: React.FC<CarouselsProps> = ({ images }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="relative bg-carousel py-12 pr-8 sm:pr sm:pl-16 md:pl-24 lg:pl-32">
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          infinite={true}
          arrows={false}
          renderButtonGroupOutside={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          centerMode={false}
        >
          {images.map((image) => (
            <div key={image.id} className="m-2">
              <img
                src={image.url}
                alt={`Slide ${image.title}`}
                className="w-80 h-96 sm:w-80 sm:h-96 md:w-96 md:h-[32rem] lg:w-[30.3rem] lg:h-[38.5rem] object-cover rounded-2xl"
              />
              <div className=" text-white -translate-y-24 sm:space-y-2 sm:text-lg md:space-y-3 md:text-xl lg:space-y-4 lg:text-2xl">
                <h3 className="font-medium whitespace-nowrap text-2xl text-center sm:text-xl md:text-2xl lg:text-3xl">
                  {image.title}
                </h3>
                <p className="text-xl font-medium text-center sm:text-lg md:text-xl lg:text-2xl">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carousels;
