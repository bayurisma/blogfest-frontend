import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { ImTwitter, ImYoutube } from 'react-icons/im';

const Navbar: FunctionComponent = () => {
    return (
        <>
            <nav className='bg-gray-50'>
                <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
                    <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
                        <Link href={'/create'}>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Create New Post</button>
                        </Link>
                    </div>
                    <div className='shrink w-80 sm:order-2'>
                        <Link href={'/'} className='font-bold text-3xl'>
                            My Blog
                        </Link>
                    </div>
                    <div className='w-96 order-3 flex justify-center'>
                        <div className='flex gap-6'>
                            <Link href={'https://www.instagram.com/compfest/?hl=id'}>
                                <FaInstagram color='#888888' />
                            </Link>
                            <Link href={'https://twitter.com/COMPFEST'}>
                                <ImTwitter color='#888888' />
                            </Link>
                            <Link href={'https://www.youtube.com/channel/UC03QmhwvQEWVI608A-RCEpw'}>
                                <ImYoutube color='#888888' />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
