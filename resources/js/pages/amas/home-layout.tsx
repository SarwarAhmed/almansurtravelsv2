import NavbarHome from '@/pages/amas/navbar-home';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export function HomeLayout() {
    const { auth } = usePage<SharedData>().props;
    return (
        <>
            <NavbarHome auth={auth} />
        </>
    );
}
