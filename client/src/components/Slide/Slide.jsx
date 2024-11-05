import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Slide.css";
import item2 from "./item2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i1 from "./i1.png";
import i6 from "./i6.png";

const Slide = () => {
    const images = [i1,item2, i3, i4, i5, i6];

    const [isLoaded, setIsLoaded] = useState(false);
    const sliderRef = useRef(null);

    const preloadImages = (images) => {
        let loadedImages = 0;
        const totalImages = images.length;

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages += 1;
                if (loadedImages === totalImages) {
                    setIsLoaded(true);
                }
            };
        });
    };

    useEffect(() => {
        preloadImages(images);
    }, [images]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 25000,
        cssEase: "linear",
        pauseOnHover: false,
        beforeChange: (current, next) => {
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(next);
            }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="py-10 max-w-7xl mx-auto">
            <div className="mx-auto px-1">
                {isLoaded ? (
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((src, index) => (
                            <div key={index} className="slide-item">
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="object-contain w-3/4 mx-auto"
                                    style={{ maxHeight: '200px' }}
                                />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="flex justify-center items-center" style={{ height: '300px' }}>
                        <span>Loading...</span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Slide;
