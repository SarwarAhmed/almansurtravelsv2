import TextLink from '@/components/text-link.js';
import { register } from '@/routes/index.js';

export function Banner() {
    return (
        <>
            <div className="container mx-auto px-4 py-4">
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white md:h-[400px] lg:h-[600px]">
                    <div className="absolute inset-0">
                        <img src="/images/header1.jpg" alt="Background Image" className="h-full w-full object-cover object-center" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>

                    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                        <h1 className="mb-4 text-5xl leading-tight font-bold">AL-Mansur Hajj Group</h1>
                        <p className="mb-4 text-lg text-gray-300">Hajj pre-registration is open</p>
                        <TextLink
                            href={register()}
                            className="transform rounded-full bg-yellow-400 px-6 py-2 text-lg font-semibold text-gray-900 no-underline transition duration-300 ease-in-out hover:scale-105 hover:bg-yellow-300 hover:shadow-lg"
                        >
                            Get Started
                        </TextLink>
                    </div>
                </div>
            </div>
        </>
    );
}
