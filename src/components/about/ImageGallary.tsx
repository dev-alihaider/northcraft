import React from 'react';
import {carouselsImages} from "../../utils/Constants";

const ImageGallery: React.FC = () => {
    return (
        <div className="bg-darkGray  relative z-0">
            <div className=" p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {carouselsImages?.map((image) => (
                        <div
                            key={image.id}
                            className="relative overflow-hidden rounded-lg shadow-lg group"
                        >
                            <img
                                src={image.url || '/placeholder.jpg'}
                                alt={image.title || 'Image'}
                                loading="lazy"
                                className="w-full h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-sm font-medium">{image.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default ImageGallery;
