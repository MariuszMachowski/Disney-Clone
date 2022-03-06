import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="slider" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="slider" />
            </Wrap>
        </Carousel>
    );
}

export default ImgSlider;

const Carousel = styled(Slider)`
padding-top:20px;
ul li button{
    &:before{
        font-size:10px;
        color:black;
    }
}
li.slick-active button:before{
color:white;
}
.slick-list{
    overflow: visible;
}
button{
    z-index:1;
}
`
const Wrap = styled.div`
cursor: pointer;
img{
    width: 100%;
    height:100%;
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    border: 4px solid transparent;
    transition: .25s;
    &:hover{
        background: rgb(245,245,245,.8);
    }
}
`