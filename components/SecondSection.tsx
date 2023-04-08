import { Articles } from '@/lib/Articles';
import { getArticles } from '@/lib/helper';
import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';
import Author from './child/Author';

const SecondSection: FunctionComponent = () => {
    const [articles, setArticles] = useState<Articles[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getArticles();
            setArticles(response);
        };
        fetchData();
    }, []);

    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>Latest Posts</h1>

            {/* grid columns */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {articles.map((value: Articles) => (
                    <Post data={value} key={value.id}></Post>
                ))}
            </div>
        </section>
    );
};

function Post({ data, key }: { data: Articles; key: number }) {
    const { id, title, description, createdAt } = data;
    const baseURL: string = 'http://localhost:3000';
    return (
        <div className='item'>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={`${baseURL}/articles/${id}`} className='text-gray-800 hover:text-gray-600'>
                        {new Date(createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                    </Link>
                </div>
                <div className='title'>
                    <Link href={`${baseURL}/articles/${id}`} className='text-xl font-bold text-gray-800 hover:text-gray-600'>
                        {title}
                    </Link>
                </div>
                <p className='text-gray-500 py-3'>{description}</p>
                <Author />
            </div>
        </div>
    );
}

export default SecondSection;
