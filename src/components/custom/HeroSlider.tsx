'use client'

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import ButtonTertiary from "../ui/ButtonTertiary";

// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';

type props = {
    data: {
        title: string,
        description: string,
        cta: string,
        link: string
    }[]
}

const HeroSlider = ({ data }: props) => {
    return (
        <div className="absolute inset-0 m-auto top-13/20 max-w-7xl w-full px-4 xl:p-0">
            <div className="absolute px-4 xl:p-0 -bottom-12 flex flex-row justify-center items-center gap-8 w-[calc(100%-32px)] lg:hidden">
                <button className="swiper-button-prev-custom bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow">
                    <ArrowLeftIcon className="size-4 group-data-open:hidden text-white inline-block" />
                </button>
                <button className="swiper-button-next-custom bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow">
                    <ArrowRightIcon className="size-4 group-data-open:hidden text-white inline-block" />
                </button>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation]}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                breakpoints={{
                    640: {   // sm
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {   // md
                        slidesPerView: 2,
                        spaceBetween: 35,
                    },
                    1024: {  // lg
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }}
            >
                {data.map((item, key) => (
                    <SwiperSlide key={key}>
                        <div className="p-1">
                            <div className="w-full h-[180px] bg-white rounded-2xl drop-shadow-md flex flex-col justify-center items-center gap-4 p-4 px-8 border border-primary hover:drop-shadow-lg hover:scale-101">
                                <h2 className="text-center font-semibold text-2xl text-shadow-md/10 tracking-wide">{item.title}</h2>
                                <p className="text-center text-mute text-sm">{item.description}</p>
                                <ButtonTertiary link={item.link} title={item.cta} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSlider;