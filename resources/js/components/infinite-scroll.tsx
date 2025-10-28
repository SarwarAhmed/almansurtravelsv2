import {
    AirArabia,
    AirHongKong,
    AirIndia,
    Biman,
    CathayPacific,
    EgyptAir,
    Emirates,
    EthiopianAirlines,
    Flydubai,
    Flynas,
    HongKongAirlines,
    IndiGo,
    JazeeraAirways,
    KuwaitAirways,
    MalaysiaAirlines,
    OmanAir,
    QatarAirways,
    SaudiArabian,
    SingaporeAirlines,
    SriLankaAirlines,
    ThaiAirways,
    TurkishAirlines,
    Vistar,
} from '@/components/AirlinesIcons';

export function InfiniteScroll() {
    const airlines = [
        AirArabia,
        AirHongKong,
        AirIndia,
        Biman,
        CathayPacific,
        EgyptAir,
        Emirates,
        EthiopianAirlines,
        Flydubai,
        Flynas,
        HongKongAirlines,
        IndiGo,
        JazeeraAirways,
        KuwaitAirways,
        MalaysiaAirlines,
        OmanAir,
        QatarAirways,
        SaudiArabian,
        SingaporeAirlines,
        SriLankaAirlines,
        ThaiAirways,
        TurkishAirlines,
        Vistar,
        Vistar,
    ];

    return (
        <div className="container mx-auto max-w-7xl px-4">
            <div className="container mx-auto mt-3 w-full rounded-2xl">
                <div className="container mx-auto px-4 pt-12">
                    <div className="group inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="group-hover:animation-pause animate-infinite-scroll hover:animation-pause flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                            {airlines.map((Airline, index) => (
                                <div key={index} className="mb-10 h-20 bg-white/40 dark:bg-neutral-800/40">
                                    <Airline />
                                </div>
                            ))}
                        </ul>
                        <ul
                            className="group-hover:animation-pause animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                            aria-hidden="true"
                        >
                            {airlines.map((Airline, index) => (
                                <div key={index} className="mb-20 h-20">
                                    <Airline />
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
