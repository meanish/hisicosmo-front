"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import Swiper modules
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import Image from 'next/image';



import A1 from "@/public/images/carausalhome/A1.png";
import B from "@/public/images/carausalhome/B.png";
import C from "@/public/images/carausalhome/C.png";
import C1 from "@/public/images/carausalhome/C1.jpeg";

import D2 from "@/public/images/carausalhome/D2.jpeg";

import D1 from "@/public/images/carausalhome/D1.png";


import { ArrowUpDown, Mouse } from 'lucide-react';


const CarousalSection = () => {
    return (

        <div className="flex h-[70vh] container gap-2 justify-center align-center ">
            <div className="w-3/5 h-full flex flex-col gap-3">
                <div className="h-1/2  flex justify-center items-center text-white text-xl font-bold">
                    <First />
                </div>
                <div className="h-1/2  flex relative justify-center items-center text-white text-xl font-bold">
                    <Image src={C1} fill alt="a1" />
                </div>
            </div>

            <div className="w-1/5 h-full flex flex-col gap-2">
                <div className="h-2/5  flex justify-center relative items-center text-white text-xl font-bold">
                    <Image src={B} fill alt="a1" />
                </div>
                <div className="h-3/5 flex justify-center items-center text-white relative text-xl font-bold">
                    <div className="absolute text-white blink right-2 top-2 z-50 flex gap-1  items-center justify-end">
                        <Mouse size={30} />
                        <p className="text-white font-normal">On Scroll</p>
                        <ArrowUpDown />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-10 z-40" style={{ pointerEvents: 'none' }}></div>
                    <Fourth />
                </div>
            </div>
        </div>
    );
};




export default CarousalSection;


const First = () => {
    return (
        <Swiper
            className="mySwiper"
            direction={'vertical'}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            speed={800}
            modules={[Autoplay]}
            style={{ height: '100%', position: "relative" }}
        >
            <SwiperSlide>
                <Image src={A1} fill alt="a1" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={D1} fill alt="a1" />

            </SwiperSlide>
            <SwiperSlide>
                <Image src={C1} fill alt="a1" />

            </SwiperSlide>
            <SwiperSlide>
                <Image src={A1} fill alt="a1" />

            </SwiperSlide>
            <SwiperSlide>
                <Image src={D1} fill alt="a1" />

            </SwiperSlide>
        </Swiper>
    )
}


const Fourth = () => {
    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={10}
            mousewheel={true}
            pagination={{
                clickable: true,
            }}
            loop={true}
            modules={[Mousewheel, Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Image src={D1} fill alt="a1" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={A1} fill alt="a1" />

            </SwiperSlide>
            <SwiperSlide>
                <Image src={B} fill alt="a1" />

            </SwiperSlide>
            <SwiperSlide>
                <Image src={C1} fill alt="a1" />

            </SwiperSlide>
            <SwiperSlide>
                <Image src={A1} fill alt="a1" />

            </SwiperSlide>
        </Swiper>
    )
}