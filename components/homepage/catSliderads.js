"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ad1 from "../../public/images//adsSlider/1.png"
import ad2 from "../../public/images//adsSlider/2.png"
import ad3 from "../../public/images//adsSlider/3.png"
import ad4 from "../../public/images//adsSlider/4.png"
import ad5 from "../../public/images//adsSlider/5.png"
import ad6 from "../../public/images//adsSlider/6.png"

import "../../styles/sliderads.css"

const CatSliderAds = () => {


    const AddImages = [
        {
            id: 1,
            link: ad1,
        },
        {
            id: 2,
            link: ad2,
        },
        {
            id: 3,
            link: ad3,
        },
        {
            id: 4,
            link: ad4,
        },
        {
            id: 5,
            link: ad5,
        },
        {
            id: 6,
            link: ad6,
        },
    ]

    return (
        <div id="sliderads" className="mx-6">
            <div
                className="slider"
                style={{
                    "--width": "190px",
                    "--height": "80px",
                    "--imageQuantity": "8",
                }}
            >
                <div className="list">
                    {
                        [].concat(AddImages, AddImages, AddImages, AddImages).map((currAds, index) => (
                            <div className="item relative" key={index}>
                                <Image
                                    src={currAds.link}
                                    alt="adsslider"
                                    width={300}
                                    height={200}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* <div
                className="slider"
                reverse="true"
                style={{
                    "--width": "200px",
                    "--height": "200px",
                    "--imageQuantity": "7",
                }}


            >
                <div className="list">
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_1.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_2.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_3.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_4.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_5.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_6.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_7.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_1.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_2.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_3.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_4.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_5.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_6.png"
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <Image src={a} fill
                            src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_7.png"
                            alt=""
                        />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default CatSliderAds;



