import MainSection from '@/components/MainSection';
import SecondSection from '@/components/SecondSection';
import App from '@/layouts/App';
import { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <App>
            <MainSection></MainSection>
            <SecondSection />
        </App>
    );
};

export default Home;
