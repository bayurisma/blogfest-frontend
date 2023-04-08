import Author from '@/components/child/Author';
import App from '@/layouts/App';
import { getArticleById, getArticles } from '@/lib/helper';
import { NextPage } from 'next';
import Image from 'next/image';

function Page({ id, body, title, description, createdAt }: { id: number; body: string; title: string; description: string; createdAt: Date }) {
    return (
        <App>
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                <div className='flex justify-center'>
                    {new Date(createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                </div>

                <div className='post py-10'>
                    <h1 className='font-bold text-4xl text-center pb-5'>{title}</h1>

                    <p className='text-gray-500 text-xl text-center'>{body}</p>

                    <div className='py-10'>
                        <Image src={'/images/img1.jpg'} width={900} height={600} alt={''}></Image>
                    </div>

                    <div className='content text-gray-600 text-lg flex flex-col gap-4'>
                        <p>{description}</p>
                    </div>
                </div>
            </section>
        </App>
    );
}

export async function getStaticProps({ params }: { params: any }) {
    const posts = await getArticleById(params.articleId);

    return {
        props: posts,
    };
}

export async function getStaticPaths() {
    const posts = await getArticles();

    const paths = posts.map((value) => {
        return {
            params: {
                articleId: value.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export default Page;
