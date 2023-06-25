import { Link } from '@remix-run/react';

export default function SidebarItem() {
    return (
        <>
            <ul className='flex flex-col items-start pt-4'>
                <a>
                    <img
                        src='/icons/Logo white.svg'
                        width={22}
                        height={19}
                        alt='logo'
                    />
                </a>
                <li className='mt-7 text-[19px] font-bold'>
                    <Link to='/home' className='flex items-center'>
                        <img
                            width={24}
                            height={24}
                            src='/icons/Home-Fill.svg'
                            alt='Home Icon'
                        />
                        <span className='block mx-5'>Home</span>
                    </Link>
                </li>
                <li className='mt-7 text-[19px] font-bold'>
                    <Link to='/explore' className='flex items-center'>
                        <img
                            width={24}
                            height={24}
                            src='/icons/Explore.svg'
                            alt='Explore Icon'
                        />
                        <span className='block mx-5'>Explore</span>
                    </Link>
                </li>
                <li className='mt-7 text-[19px] font-bold'>
                    <Link to='/notifications' className='flex items-center'>
                        <img
                            width={24}
                            height={24}
                            src='/icons/Notifications.svg'
                            alt='Notifications Icon'
                        />
                        <span className='block mx-5'>Notifications</span>
                    </Link>
                </li>
                <li className='mt-7 text-[19px] font-bold'>
                    <Link to='/messages' className='flex items-center'>
                        <img
                            width={24}
                            height={24}
                            src='/icons/Messages.svg'
                            alt='Messages Icon'
                        />
                        <span className='block mx-5'>Messages</span>
                    </Link>
                </li>
                <li className='mt-7 text-[19px] font-bold'>
                    <Link to='/bookmarks' className='flex items-center'>
                        <img
                            width={24}
                            height={24}
                            src='/icons/Bookmarks.svg'
                            alt='Bookmarks Icon'
                        />
                        <span className='block mx-5'>Bookmarks</span>
                    </Link>
                </li>
                <li className='mt-7 text-[19px] font-bold'>
                    <Link to='/lists' className='flex items-center'>
                        <img
                            width={24}
                            height={24}
                            src='/icons/Lists.svg'
                            alt='Lists Icon'
                        />
                        <span className='block mx-5'>Lists</span>
                    </Link>
                </li>
                <li className='mt-7 text-[19px] font-bold'>
                    <Link to='/profile' className='flex items-center'>
                        <img
                            width={24}
                            height={24}
                            src='/icons/Profile.svg'
                            alt='Profile Icon'
                        />
                        <span className='block mx-5'>Profile</span>
                    </Link>
                </li>
                <li className='mt-7 text-[19px] font-bold'>
                    <Link to='/more' className='flex items-center'>
                        <img
                            width={24}
                            height={24}
                            src='/icons/More.svg'
                            alt='More Icon'
                        />
                        <span className='block mx-5'>More</span>
                    </Link>
                </li>
                <li className='mt-7 text-[19px] font-bold'>
                    <button
                        type='button'
                        className='bg-primary text-white py-3 rounded-full px-20'
                    >
                        Tweet
                    </button>
                </li>
            </ul>
            <div className='flex items-center justify-between w-[200px] mb-3'>
                <img
                    src='/images/user.png'
                    width={40}
                    height={40}
                    alt='profile'
                />
                <div className='flex'>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <small className='text-sm'>Bradley Ortiz</small>
                            <img
                                className='mx-1'
                                src='/icons/Private.svg'
                                width={16}
                                height={16}
                                alt='Private'
                            />
                        </div>
                        <small className='text-sm text-gray-600 font-semibold'>
                            @bradley_
                        </small>
                    </div>
                </div>
                <img
                    src='/icons/more-2.svg'
                    width={20}
                    height={20}
                    alt='More'
                />
            </div>
        </>
    );
}
