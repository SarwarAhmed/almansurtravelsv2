import Carousel from '@/components/carousel';
import { HomeLayout } from '@/pages/amas/home-layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <HomeLayout />
            <Carousel />
            {/*<Banner />*/}
        </>
    );
}
