import React from 'react';
import {Box, Container} from "@mui/material";
import Image from 'next/image';

import {Swiper, SwiperSlide} from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


export const Carousel = () => {
    return (
        <Container sx={{
            pt: '6rem',
            pb: "3rem",
        }} maxWidth={'xl'}>
            <Swiper
                pagination={{
                    "clickable": true
                }}
                className="mySwiper"
                slidesPerView={'auto'}
                spaceBetween={30}

            >
                {
                    slides.map(({imgSrc,id}) => {
                        return(
                            <SwiperSlide key={id}>
                               <Image width={300} height={300} src={imgSrc}/>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </Container>
    );
};

const slides = [
    {
        id: 1,
        imgSrc: "/slider/1.png"
    },{
        id: 2,
        imgSrc: "/slider/1.png"
    },{
        id: 3,
        imgSrc: "/slider/1.png"
    },{
        id: 4,
        imgSrc: "/slider/1.png"
    },{
        id: 5,
        imgSrc: "/slider/1.png"
    },
]