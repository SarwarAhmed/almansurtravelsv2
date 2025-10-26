const services = [
    {
        name: 'Hajj Services',
        title: 'Complete Hajj packages with accommodation, transportation, and guidance.',
        href: '#',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
    },
    {
        name: 'Umrah Services',
        title: 'Spiritual Umrah journeys with personalized packages and support',
        href: '#',
        category: { name: 'Video', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '4 min',
    },
    {
        name: 'Air Ticketing',
        title: 'Best flight deals worldwide with flexible booking options.',
        href: '#',
        category: { name: 'Case Study', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '11 min',
    },
    {
        name: 'Manpower Clearance',
        title: 'Quick and reliable manpower clearance card processing.',
        href: '#',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
    },
    {
        name: 'Visa Processing',
        title: 'Hassle-free visa services',
        href: '#',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
    },
];
export default function OurServices() {
    return (
        <div className="container mx-auto max-w-7xl px-4">
            <div className="xmax-w-3xl container mx-auto mt-3 w-full rounded-2xl">
                <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
                    <div className="absolute inset-0">
                        <div className="h-1/3 bg-white sm:h-2/3" />
                    </div>
                    <div className="relative mx-auto max-w-7xl">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                                Comprehensive travel solutions tailored to your needs
                            </p>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-lg gap-5 overflow-hidden lg:max-w-none lg:grid-cols-3">
                            {services.map((service) => (
                                <div key={service.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="relative h-48 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                            src={service.imageUrl}
                                            alt=""
                                        />
                                        <div className="absolute -mt-2 mb-2 items-center justify-center rounded-r-xl bg-gray-900 p-2 font-bold text-white">
                                            {service.name}
                                        </div>
                                    </div>
                                    <div className="mt-5 flex flex-1 flex-col justify-between bg-white p-6">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-indigo-600">
                                                <a href={service.category.href} className="hover:underline">
                                                    {service.category.name}
                                                </a>
                                            </p>
                                            <a href={service.href} className="mt-2 block">
                                                <p className="text-xl font-semibold text-gray-900">{service.title}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
