import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { ImTwitter, ImYoutube } from 'react-icons/im';

const Footer: FunctionComponent = () => {
    return (
        <footer className='bg-gray-50'>
            <div className='container mx-auto flex justify-center py-12'>
                <div className='py-5'>
                    <div className='flex gap-6 justify-center'>
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

                    <p className='py-5 text-gray-400'>Copyright ©2023 All rights reserved</p>
                    <p className='text-gray-400 text-center'>Terms & Condition</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
