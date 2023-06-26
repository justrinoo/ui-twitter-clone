import React from 'react';
import BorderTimeline from '../BorderTimeline';
import Tweet from './Tweet';

const data = [
    {
        imageAccount: '/images/twitter-social.svg',
        nameAccount: 'Twitter',
        description: 'follow dong sayang @rinoosp',
        comments: 10,
        retweets: 0,
        likes: 30,
    },
    {
        imageAccount: '/images/twitter-social.svg',
        nameAccount: 'akmal okkotsu',
        description:
            'bagi gue tahun ini suda selesai di bulan mei kemarin, suda tida ada yang menarik buat di lakukan tahun ini',
        comments: 2,
        retweets: 0,
        likes: 9,
    },
    {
        imageAccount: '/images/twitter-social.svg',
        nameAccount: 'Twitter',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        comments: 0,
        retweets: 0,
        likes: 0,
    },
    {
        imageAccount: '/images/twitter-social.svg',
        nameAccount: 'Twitter',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        comments: 0,
        retweets: 0,
        likes: 0,
    },
    {
        imageAccount: '/images/twitter-social.svg',
        nameAccount: 'Twitter',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        comments: 0,
        retweets: 0,
        likes: 0,
    },
    {
        imageAccount: '/images/twitter-social.svg',
        nameAccount: 'Twitter',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        comments: 0,
        retweets: 0,
        likes: 0,
    },
    {
        imageAccount: '/images/twitter-social.svg',
        nameAccount: 'Twitter',
        description: 'apa aja',
        comments: 0,
        retweets: 0,
        likes: 0,
    },
];

export default function Timeline() {
    return (
        <section className='items-center ml-52 flex flex-col w-[600px]'>
            {/* Heading Timeline */}
            <BorderTimeline>
                <div className='flex items-center justify-between'>
                    <h4 className='font-bold text-[#fff]'>Home</h4>
                    <button>
                        <img
                            src='/icons/timeline.svg'
                            width={20}
                            height={20}
                            alt='Timeline'
                        />
                    </button>
                </div>
            </BorderTimeline>
            {/* Heading Timeline */}
            {/* Create Timeline */}
            <BorderTimeline>
                <div className='flex items-center'>
                    <img
                        src='/images/user.png'
                        width={50}
                        height={50}
                        alt='Profile'
                    />
                    <div className='mx-2 flex flex-col justify-between w-full'>
                        <h4 className='text-lg text-gray-600'>
                            What's happening?
                        </h4>
                    </div>
                </div>
                <div className='ml-14 flex items-center mt-8 justify-between'>
                    <div className='flex items-center w-[20px] h-[20px]'>
                        <img
                            className='mr-2'
                            src='/images/Emoji.png'
                            alt='Emoji'
                        />
                        <img className='mx-2' src='/images/Gif.png' alt='Gif' />
                        <img
                            className='mx-2'
                            src='/images/Media.png'
                            alt='Media'
                        />
                        <img
                            className='mx-2'
                            src='/images/Poll.png'
                            alt='Poll'
                        />
                        <img
                            className='mx-2'
                            src='/images/Schedule.png'
                            alt='Schedule'
                        />
                    </div>
                    <button
                        disabled
                        type='button'
                        className='bg-primary text-white py-1 px-4 font-semibold rounded-full disabled:bg-grey-200'
                    >
                        Tweet
                    </button>
                </div>
            </BorderTimeline>
            {/* Create Timeline */}
            {/* Tweet */}
            {data.map((twt) => (
                <Tweet tweet={twt} />
            ))}
            {/* End Tweet */}
        </section>
    );
}
