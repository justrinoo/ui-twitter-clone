export default function TweetAction() {
    return (
        <div className='flex items-start mt-2'>
            <div className='flex items-center mx-0 mr-10'>
                <img src='/icons/Reply.svg' alt='Reply' />
                <span className='text-sm text-gray-600 font-light ml-1'>
                    60
                </span>
            </div>
            <div className='flex items-center mx-10'>
                <img src='/icons/Retweet.svg' alt='Retweet' />
                <span className='text-sm text-gray-600 font-light ml-1'>
                    210
                </span>
            </div>
            <div className='flex items-center mx-10'>
                <img src='/icons/React.svg' alt='React' />
                <span className='text-sm text-gray-600 font-light ml-1'>
                    2000
                </span>
            </div>
            <div className='flex items-center mx-10'>
                <img src='/icons/Share.svg' alt='Share' />
            </div>
        </div>
    );
}
