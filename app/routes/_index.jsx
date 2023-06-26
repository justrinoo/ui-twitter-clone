import Sidebar from '../components/Sidebar';
import Timeline from '../components/Timeline';

export const meta = () => {
    return [
        { title: 'Explore / Twitter' },
        { name: 'description', content: 'Explore Twitter' },
    ];
};

export default function Index() {
    return (
        <main>
            <section className='px-[328px] w-screen h-screen flex relative'>
                {/* Navigation */}
                <Sidebar />
                {/* End Navigation */}

                {/* Timeline */}
                <Timeline />
                {/* end Timeline */}

                {/* Trending - Search */}
                <section className='fixed right-56 py-3 w-[300px]'>
                    <div className='relative mb-3'>
                        <img
                            className='absolute z-10 top-4 left-4'
                            src='/icons/Search.svg'
                            width={20}
                            height={20}
                            alt='Search Twitter'
                        />
                        <input
                            placeholder='Search Twitter'
                            className='bg-[#202327] placeholder:text-gray-600 text-white py-3 w-[300px] px-12 rounded-full relative outline-none'
                        />
                    </div>

                    <div className='bg-[#202327] py-3 px-4 rounded-xl'>
                        <div className='flex items-center justify-between'>
                            <h6 className='text-lg font-semibold'>
                                Trends for you
                            </h6>
                            <img
                                width={20}
                                height={20}
                                src='/icons/Settings.svg'
                                alt='Tending Setting'
                            />
                        </div>

                        <div className='flex flex-col'>
                            <div className='mt-4'>
                                <h6 className='text-gray-600 text-sm'>
                                    Trending in Indonesia
                                </h6>
                                <p className='font-bold'>Syahnaz Selingkuh</p>
                                <p className='text-gray-600 text-sm'>
                                    2,100 Tweets
                                </p>
                            </div>
                            <div className='mt-4'>
                                <h6 className='text-gray-600 text-sm'>
                                    Trending in Indoensia
                                </h6>
                                <p className='font-bold'>
                                    Emak Emak Ketabrak Mental
                                </p>
                                <p className='text-gray-600 text-sm'>
                                    1,600 Tweets
                                </p>
                            </div>
                            <div className='mt-4'>
                                <h6 className='text-gray-600 text-sm'>
                                    Trending in Indonesia
                                </h6>
                                <p className='font-bold'>
                                    Yu bRiK mY HeRt in mY HeRt
                                </p>
                                <p className='text-gray-600 text-sm'>
                                    600 Tweets
                                </p>
                            </div>

                            <button className='text-left mt-4 text-primary font-semibold'>
                                Show more
                            </button>
                        </div>
                    </div>
                    <div className='bg-[#202327] py-3 px-4 mt-4 rounded-xl'>
                        <h6 className='text-lg font-semibold'>Who to follow</h6>
                        <div className='flex flex-col mt-3'>
                            <div className='mb-3 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img
                                        src='/images/twitter-social.svg'
                                        width={50}
                                        height={50}
                                        alt='Twitter'
                                    />
                                    <div className='mx-2'>
                                        <div className='flex items-center'>
                                            <h6 className='text-sm'>Twitter</h6>
                                            <img
                                                className='mx-1'
                                                width={20}
                                                height={20}
                                                src='/icons/Verified.svg'
                                                alt='Verified'
                                            />
                                        </div>
                                        <span className='text-sm text-gray-600'>
                                            @Twitter
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <button className='bg-[#fff] py-2 px-6 text-[#000] rounded-full'>
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Trending - Search */}
            </section>
        </main>
    );
}
