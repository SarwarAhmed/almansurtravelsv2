export default function ServicesV2() {
    try {
        const services = [
            { icon: 'landmark', title: 'Hajj Services', description: 'Complete Hajj packages with accommodation, transportation, and guidance.' },
            { icon: 'moon', title: 'Umrah Services', description: 'Spiritual Umrah journeys with personalized packages and support.' },
            { icon: 'plane', title: 'Air Ticketing', description: 'Best flight deals worldwide with flexible booking options.' },
            { icon: 'file-check', title: 'Manpower Clearance', description: 'Quick and reliable manpower clearance card processing.' },
            { icon: 'file-badge', title: 'Visa Processing', description: 'Hassle-free visa services for all destinations.' },
        ];

        return (
            <section id="services" className="bg-gray-50 py-20" data-name="services" data-file="components/Services.tsx">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">Comprehensive travel solutions tailored to your needs</p>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <div key={index} className="rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-100">
                                    <div className={`icon-${service.icon} text-2xl text-[var(--primary-color)]`}></div>
                                </div>
                                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                                <p className="text-[var(--text-light)]">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        return null;
    }
}
