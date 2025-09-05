import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import { NavigationMenuHome } from '@/pages/amas/navigation-menu';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="container mx-auto flex h-full w-full flex-col items-center justify-center bg-background text-foreground">
                <div className="flex w-full items-center justify-between gap-4 px-4 py-2">
                    <div className="flex flex-col items-center justify-center gap-4">Home</div>
                    <NavigationMenuHome />
                    <div className="flex flex-col items-center justify-center gap-4">
                        <AppearanceToggleDropdown />
                    </div>
                </div>
            </div>
        </>
    );
}
