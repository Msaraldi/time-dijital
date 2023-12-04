import Head from 'next/head';
import AboutOne from '../components/abouts/AboutOne';
import {useInView} from 'react-intersection-observer';

import Layout from '../components/layouts/Layout';


const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });



    return (
        <Layout>
            <Head>
                <title>Time Dijital Hakkımızda</title>
            </Head>
            <AboutOne />
           
        </Layout>
    );
};

export default About;
