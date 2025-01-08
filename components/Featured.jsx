"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Pagination, Navigation } from 'swiper/modules';

import FeaturedCard from "./FeaturedCard"

const featuredJobs = [
    {
        logo: '',
        type: 'full time',
        position: 'Email marketing',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'part time',
        position: 'UI/UX Designer',
        company: '',
        location: 'uk',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'Frontend developer',
        company: '',
        location: 'australia',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'UI/UX Designer',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'Data entry',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'virtual assistant',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'backend developer',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
    {
        logo: '',
        type: 'remote',
        position: 'Human resources',
        company: '',
        location: 'usa',
        jobDescription: '',
        tags: ['marketing', 'design'],
        price: ''
    },
]
const Featured = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='space-y-12 pl-4 md:pl-0 pr-4 BP400:pr-0'>
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl text-center md:text-left md:text-5xl font-bold">Featured <span className="text-[#26A4FF]">jobs</span></h2>
                        <button className="flex items-center gap-2 mr-4">
                            <p className="text-[#26A4FF]">View all</p>
                            <img src="../icon.png" alt="Arrow Icon" />
                        </button>
                    </div>

                    <div className="relative group">
                        {/* Swiper Component */}
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={16}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                400: { slidesPerView: 1.2, spaceBetween: 15 },
                                // 500: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                                1280: { slidesPerView: 4, spaceBetween: 30 },
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                        >
                            {featuredJobs.map((job, index) => (
                                <SwiperSlide key={index} className='mb-10'>
                                    <FeaturedCard job={job} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Left Arrow */}
                        <button
                            className="swiper-button-prev absolute top-1/2 left-0 -translate-y-1/2 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition"
                            aria-label="Previous"
                        >
                            {/* &#8249; */}
                        </button>

                        {/* Right Arrow */}
                        <button
                            className="swiper-button-next absolute top-1/2 right-0 -translate-y-1/2 text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition"
                            aria-label="Next"
                        >
                            {/* &#8250; */}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Featured