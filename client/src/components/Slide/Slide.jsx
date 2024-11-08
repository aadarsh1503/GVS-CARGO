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
    const images = [i1, item2, i3, i4, i5, i6];
    const imageLinks = [
        "http://www.pangea-network.com",
        "https://www.glafamily.com/",
        "http://www.logifem.com.tr",
        "http://www.signaturegln.com",
        "https://www.jctrans.com/en/",
        "https://fiata.org/"
    ];

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
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2100,
        cssEase: "linear",
        pauseOnHover: true,
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
                    slidesToShow: 1,
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
       <section className="py-10 w-[300px] lg:w-full lg:max-w-7xl lg:ml-32 mx-auto">
    <div className="w-full px-4 md:px-1">
        {isLoaded ? (
            <Slider ref={sliderRef} {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="slide-item">
                        <a href={imageLinks[index]} target="_blank" rel="noopener noreferrer" className="image-link">
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="object-contain w-full md:w-3/4 mx-auto slide-image"
                                style={{ maxHeight: '300px' }}
                            />
                        </a>
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
