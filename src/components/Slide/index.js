import React from 'react'
import Slider from "react-slick"
import Image from '../common/image'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Slide({ imgUrls = [] }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {
                imgUrls.map((imgsrc, index) => {
                    return (
                        <div key={index}>
                            <Image type="summary-img" imgsrc={imgsrc} alttext={`image ${index}`} />
                        </div>
                    );
                })
            }
        </Slider>
    )
}

export default Slide
