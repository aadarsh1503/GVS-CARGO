import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Slide.css";

const Slide = () => {
    const images = [
        "https://brfreight.com/wp-content/uploads/2018/05/item2-1.png",
        "https://brfreight.com/wp-content/uploads/2018/06/JCtrans-net-parceiro-BR-Freight-Shipping-1.jpg",
        "https://brfreight.com/wp-content/uploads/2018/05/item1-1.png",
        "https://brfreight.com/wp-content/uploads/2018/05/item4-1.png",
        "https://brfreight.com/wp-content/uploads/2018/05/item3-1.png",
        
    ];

    const [isLoaded, setIsLoaded] = useState(false);
    const sliderRef = useRef(null); // Reference for the slider

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
        dots: true, // Enable dots for navigation
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
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
      <>
     

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
        </>
        
    );
};

export default Slide;
