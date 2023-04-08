import { Articles } from '@/lib/Articles';
import { getArticles } from '@/lib/helper';
import axios from 'axios';
import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const MainSection: FunctionComponent = () => {
    SwiperCore.use([Autoplay]);

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: 'right',
    };

    const [articles, setArticles] = useState<Articles[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getArticles();
            setArticles(response);
        };
        fetchData();
    }, []);

    return (
        <section className='py-16' style={bg}>
            <div className='container mx-auto md:px-20'>
                <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>

                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                    }}>
                    {articles.map((value: Articles) => (
                        <SwiperSlide key={value.id}>
                            <Slide data={value}></Slide>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

function Slide({ data }: { data: Articles }) {
    const { id, title, description, createdAt } = data;
    const baseURL: string = 'http://localhost:3000';
    return (
        <div className='grid md:grid-cols-2'>
            <div className='info flex justify-center flex-col'>
                <div className='cat'>
                    <Link href={`${baseURL}/articles/${id}`} className='text-gray-800 hover:text-gray-600'>
                        {new Date(createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                    </Link>
                </div>
                <div className='title'>
                    <Link href={`${baseURL}/articles/${id}`} className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>
                        {title}
                    </Link>
                </div>
                <p className='text-gray-500 py-3'>{description}</p>
            </div>
        </div>
    );
}

export default MainSection;
