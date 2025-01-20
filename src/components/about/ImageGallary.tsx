"use client";
import React, { useState } from "react";
import { carouselsImages } from "../../utils/constants";
import Button from "../common/Button";

const ImageGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);
  const [alt, setAltText] = useState<string | null>(null);

  function handleOpen(url: string, alt:string) {
    setImage(url);
    setAltText(alt)
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
    setImage(null);
  }

  return (
    <>
      <div className="bg-darkGray relative z-0">
        <div className="p-4 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {carouselsImages?.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                onClick={() => handleOpen(image.url, image.title)}
              >
                <img
                  src={image.url}
                  alt={image.title || "Image"}
                  loading="lazy"
                  className="w-full h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-sm font-medium">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
          onClick={handleClose}
        >
          <div className="relative bg-darkGray rounded-lg pt-8 p-2 md:w-1/2 min-w-full h-screen">
            <Button
              className="absolute top-0 right-2 text-white text-2xl ease-in-out transition hover:scale-110"
              onClick={handleClose}
            >
              &times;
            </Button>
            <div className="flex justify-center w-full h-full">
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
