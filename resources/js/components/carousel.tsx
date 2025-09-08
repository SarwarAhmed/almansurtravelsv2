import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

const slides = [
    {
        id: 1,
        title: 'AL-MANSUR HAJJ GROUP',
        subtitle: 'Explore the serenity of nature',
        img: 'https://picsum.photos/id/1018/800/400',
    },
    {
        id: 2,
        title: 'AL-MANSUR UMRAH GROUP',
        subtitle: 'The lights never sleep',
        img: 'https://picsum.photos/id/1015/800/400',
    },
    {
        id: 3,
        title: 'AIRLINES TICKETS',
        subtitle: 'A walk into tranquility',
        img: 'https://picsum.photos/id/1019/800/400',
    },
];

export default function Carousel() {
    const [[page, direction], setPage] = React.useState([0, 0]);

    const paginate = (newDirection: number) => {
        setPage(([prev]) => [prev + newDirection, newDirection]);
    };

    const index = ((page % slides.length) + slides.length) % slides.length;

    // Auto scroll effect
    React.useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 4000); // every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto max-w-7xl px-4 dark:brightness-90">
            <div className="xmax-w-3xl relative container mx-auto mt-3 w-full overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-neutral-900">
                <div className="relative h-96 rounded-2xl md:h-[500px] lg:h-[600px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={slides[index].id}
                            src={slides[index].img}
                            alt={slides[index].title}
                            custom={direction}
                            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute h-full w-full object-cover"
                        />
                    </AnimatePresence>
                    {/* Overlay with title & subtitle */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                        <h2 className="text-2xl font-bold text-white drop-shadow-lg md:text-3xl">{slides[index].title}</h2>
                        <p className="text-base text-gray-200 drop-shadow md:text-lg dark:text-gray-300">{slides[index].subtitle}</p>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-2">
                    <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full bg-white/70 shadow-md dark:bg-neutral-800/70"
                        onClick={() => paginate(-1)}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full bg-white/70 shadow-md dark:bg-neutral-800/70"
                        onClick={() => paginate(1)}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>
                <div className="flex justify-center space-x-2 py-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`h-3 w-3 rounded-full ${i === index ? 'bg-primary' : 'bg-muted dark:bg-neutral-600'}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
