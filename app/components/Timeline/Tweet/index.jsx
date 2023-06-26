import BorderTimeline from '../../BorderTimeline';
import TweetAction from './TweetAction';
import TweetDescription from './TweetDescription';
import TweetHeading from './TweetHeading';

export default function Tweet({ tweet }) {
    return (
        <BorderTimeline>
            <div className='flex items-start flex-row'>
                <img
                    src={tweet.imageAccount}
                    width={40}
                    height={40}
                    alt='Profile'
                />
                <div className='mx-3 flex flex-col w-[700px]'>
                    <TweetHeading twtHeading={tweet.nameAccount} />
                    <TweetDescription twtDesc={tweet.description} />
                    <TweetAction />
                </div>
            </div>
        </BorderTimeline>
    );
}
