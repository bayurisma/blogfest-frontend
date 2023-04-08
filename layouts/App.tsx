import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';
import { FunctionComponent, ReactNode } from 'react';

interface BaseLayoutProps {
    children?: ReactNode;
}

const App: FunctionComponent<BaseLayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>

            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
};

export default App;
