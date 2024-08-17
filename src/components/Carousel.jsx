import React from 'react';

const CarouselBackground = () => {
    const images = [
        'https://via.placeholder.com/1600x900?text=Image+1',
        'https://via.placeholder.com/1600x900?text=Image+2',
        'https://via.placeholder.com/1600x900?text=Image+3',
        'https://via.placeholder.com/1600x900?text=Image+4',
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute top-0 left-0 w-[400%] h-full flex animate-slide">
            {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
                <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                />
            </div>
            ))}
        </div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Important Centered Text
            </h1>
        </div>
        </div>
    );
};

export default CarouselBackground;
