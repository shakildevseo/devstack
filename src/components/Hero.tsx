import bannerStack from '../assets/banner-stack.png';

export const Hero = () => {
    return (
        <section
            id="home"
            className="mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-4 px-4 py-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-start sm:gap-5 sm:px-8 sm:py-16 lg:gap-16 lg:px-8 lg:py-24"
        >
            <div className="w-full max-w-lg text-center sm:text-left">
                <h2 className="text-2xl font-extrabold leading-tight text-[#0F172A] sm:text-3xl lg:text-5xl">
                    Build Your Ideal
                    <span className="block bg-linear-to-r from-devstack-primary via-devstack-pink to-devstack-violet bg-clip-text text-transparent">Development Stack</span>
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-xs leading-5 text-[#687386] sm:mx-0 sm:mt-4 sm:text-sm sm:leading-6 lg:mt-6 lg:text-base lg:leading-7">
                    Explore frontend, backend, database, and tooling
                    <br className="sm:hidden" /> options, compare them side by side, and put together
                    <br className="sm:hidden" /> the stack that fits your
                    next project.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:justify-start sm:gap-0 lg:mt-8">
                    <a className="inline-flex min-w-26 items-center justify-center rounded-md bg-linear-to-r from-devstack-primary via-devstack-pink to-devstack-violet px-2 py-2 text-[9px] font-bold text-white sm:min-w-35 sm:min-h-10 sm:px-4 sm:py-2 sm:text-xs" href="#technologies">
                        Explore Technologies
                    </a>
                    <a className="ml-1 inline-flex min-w-26 items-center justify-center rounded-md border border-gray-200 bg-white px-2 py-2 text-[9px] font-bold text-[#374151] sm:ml-3 sm:min-w-34 sm:min-h-10 sm:px-4 sm:py-2 sm:text-xs md:ml-4 lg:ml-5" href="#about">
                        Learn More
                    </a>
                </div>
            </div>

            <div className="grid min-h-0 place-items-center sm:min-h-64 lg:min-h-96">
                <img className="w-3/4 max-w-60 object-contain drop-shadow-2xl sm:w-full sm:max-w-lg" src={bannerStack} alt="banner-stack" />
            </div>
        </section>
    );
};
