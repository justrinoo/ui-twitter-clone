export default function TweetHeading({ twtHeading }) {
    return (
        <div className='flex w-full'>
            <span className='text-md text-white font-semibold'>
                {twtHeading}
            </span>
            <img
                src='/icons/Verified.svg'
                className='mx-1'
                width={20}
                height={20}
                alt='Verified'
            />
            <span className='text-md font-light text-[#6E767D]'>
                @{twtHeading}
            </span>
            <span className='text-md font-light text-[#6E767D]'>. Oct 29</span>
        </div>
    );
}
