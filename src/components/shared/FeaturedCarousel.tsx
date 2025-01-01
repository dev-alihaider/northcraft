import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { CarouselsProps } from "../landing-page/types";

export const responsive = {
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

const FeaturedCarousel: React.FC<CarouselsProps> = ({ images }) => {
  return (
    <>
      <div className="relative bg-carousel pt-12   sm:pr sm:pl-16 md:pl-24 lg:pl-32">
        <Carousel
          responsive={responsive}
          keyBoardControl={false}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {images.map((image) => (
            <div key={image.id} className="mx-2 flex flex-col items-center">
              <img
                src={image.url}
                alt={image.title}
                className="w-80 h-96 md:w-96 lg:w-[30.3rem] md:h-[32rem] object-cover rounded-2xl"
              />
              <div className=" text-white -translate-y-24  sm:text-lg md:text-xl space-y-1 lg:text-2xl">
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

export default FeaturedCarousel;
