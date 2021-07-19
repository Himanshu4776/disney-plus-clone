import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dots: true,
        Infinite: true,
        speed: 500,
        SlidesToShow: 1,
        SlidesToScroll: 1,
        autoplay: true
    }
    
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt=""/>
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider;

const Carousel = styled(Slider)`
margin-top:20px;
ul li button {
    &:before {
        font-size: 10px;
        color: rgb(150 158 171);
    }
}
button {
    z-index: 1;
}
li.slick-active button:before {
    colour: white;
}
.slick-list {
    overflow: visible;
}
`
const Wrap = styled.div `
img {
    border-radius: 4px;
    border: 4px solid transparent;
    width: 100%;
    height:100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 76%) 0px 16px 10px -10px;

    &:hover {
        border: 4px solid rgba( 249, 249, 249, 0.8);
    }
}
`